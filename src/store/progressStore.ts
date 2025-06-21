import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface CourseProgress {
  id: string;
  course_id: string;
  lesson_id: string;
  completed: boolean;
  progress_percentage: number;
}

interface ProgressState {
  progress: CourseProgress[];
  loading: boolean;
  fetchProgress: (userId: string) => Promise<void>;
  updateProgress: (userId: string, courseId: string, lessonId: string, progressPercentage: number) => Promise<void>;
  markLessonComplete: (userId: string, courseId: string, lessonId: string) => Promise<void>;
  getCourseProgress: (courseId: string) => number;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  progress: [],
  loading: false,

  fetchProgress: async (userId: string) => {
    set({ loading: true });
    try {
      const { data, error } = await supabase
        .from('course_progress')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;
      set({ progress: data || [] });
    } catch (error: any) {
      toast.error('Failed to fetch progress');
      console.error('Progress fetch error:', error);
    } finally {
      set({ loading: false });
    }
  },

  updateProgress: async (userId: string, courseId: string, lessonId: string, progressPercentage: number) => {
    try {
      const { error } = await supabase
        .from('course_progress')
        .upsert({
          user_id: userId,
          course_id: courseId,
          lesson_id: lessonId,
          progress_percentage: progressPercentage,
          completed: progressPercentage >= 100,
        });

      if (error) throw error;
      
      // Refresh progress
      get().fetchProgress(userId);
    } catch (error: any) {
      toast.error('Failed to update progress');
      console.error('Progress update error:', error);
    }
  },

  markLessonComplete: async (userId: string, courseId: string, lessonId: string) => {
    await get().updateProgress(userId, courseId, lessonId, 100);
  },

  getCourseProgress: (courseId: string) => {
    const { progress } = get();
    const courseProgress = progress.filter(p => p.course_id === courseId);
    if (courseProgress.length === 0) return 0;
    
    const totalProgress = courseProgress.reduce((sum, p) => sum + p.progress_percentage, 0);
    return Math.round(totalProgress / courseProgress.length);
  },
}));