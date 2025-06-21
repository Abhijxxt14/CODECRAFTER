import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      course_progress: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          lesson_id: string;
          completed: boolean;
          progress_percentage: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          course_id: string;
          lesson_id: string;
          completed?: boolean;
          progress_percentage?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          course_id?: string;
          lesson_id?: string;
          completed?: boolean;
          progress_percentage?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_projects: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          description: string | null;
          html_code: string;
          css_code: string;
          js_code: string;
          is_public: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          description?: string | null;
          html_code: string;
          css_code: string;
          js_code: string;
          is_public?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          description?: string | null;
          html_code?: string;
          css_code?: string;
          js_code?: string;
          is_public?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};