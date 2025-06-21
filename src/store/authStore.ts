import { create } from 'zustand';
import { User, Session ,  AuthChangeEvent} from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  session: null,
  loading: true,

  signUp: async (email: string, password: string, fullName: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      if (data.user) {
        // Create profile
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: data.user.id,
            email: data.user.email!,
            full_name: fullName,
            avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          });

        if (profileError) throw profileError;
        
        toast.success('Account created successfully! Please check your email to verify your account.');
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account');
      throw error;
    }
  },

  signIn: async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      toast.success('Welcome back!');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in');
      throw error;
    }
  },

  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      set({ user: null, session: null });
      toast.success('Signed out successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign out');
      throw error;
    }
  },

  initialize: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      set({ session, user: session?.user ?? null, loading: false });

    
supabase.auth.onAuthStateChange(
  (_event: AuthChangeEvent, session: Session | null) => {
    set({ session, user: session?.user ?? null });
  }
);
    } catch (error) {
      console.error('Auth initialization error:', error);
      set({ loading: false });
    }
  },
}));