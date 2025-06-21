import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface Project {
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
}

interface ProjectState {
  projects: Project[];
  currentProject: Project | null;
  loading: boolean;
  fetchProjects: (userId: string) => Promise<void>;
  saveProject: (userId: string, project: Omit<Project, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => Promise<void>;
  updateProject: (projectId: string, updates: Partial<Project>) => Promise<void>;
  deleteProject: (projectId: string) => Promise<void>;
  setCurrentProject: (project: Project | null) => void;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  currentProject: null,
  loading: false,

  fetchProjects: async (userId: string) => {
    set({ loading: true });
    try {
      const { data, error } = await supabase
        .from('user_projects')
        .select('*')
        .eq('user_id', userId)
        .order('updated_at', { ascending: false });

      if (error) throw error;
      set({ projects: data || [] });
    } catch (error: any) {
      toast.error('Failed to fetch projects');
      console.error('Projects fetch error:', error);
    } finally {
      set({ loading: false });
    }
  },

  saveProject: async (userId: string, project) => {
    try {
      const { data, error } = await supabase
        .from('user_projects')
        .insert({
          user_id: userId,
          ...project,
        })
        .select()
        .single();

      if (error) throw error;
      
      set(state => ({
        projects: [data, ...state.projects],
      }));
      
      toast.success('Project saved successfully!');
    } catch (error: any) {
      toast.error('Failed to save project');
      console.error('Project save error:', error);
    }
  },

  updateProject: async (projectId: string, updates) => {
    try {
      const { data, error } = await supabase
        .from('user_projects')
        .update(updates)
        .eq('id', projectId)
        .select()
        .single();

      if (error) throw error;
      
      set(state => ({
        projects: state.projects.map(p => p.id === projectId ? data : p),
        currentProject: state.currentProject?.id === projectId ? data : state.currentProject,
      }));
      
      toast.success('Project updated successfully!');
    } catch (error: any) {
      toast.error('Failed to update project');
      console.error('Project update error:', error);
    }
  },

  deleteProject: async (projectId: string) => {
    try {
      const { error } = await supabase
        .from('user_projects')
        .delete()
        .eq('id', projectId);

      if (error) throw error;
      
      set(state => ({
        projects: state.projects.filter(p => p.id !== projectId),
        currentProject: state.currentProject?.id === projectId ? null : state.currentProject,
      }));
      
      toast.success('Project deleted successfully!');
    } catch (error: any) {
      toast.error('Failed to delete project');
      console.error('Project delete error:', error);
    }
  },

  setCurrentProject: (project: Project | null) => {
    set({ currentProject: project });
  },
}));