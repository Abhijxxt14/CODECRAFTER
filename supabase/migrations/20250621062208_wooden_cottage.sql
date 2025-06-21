/*
  # Initial Database Schema for CodeCraft

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text, unique)
      - `full_name` (text)
      - `avatar_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `course_progress`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `course_id` (text)
      - `lesson_id` (text)
      - `completed` (boolean)
      - `progress_percentage` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `user_projects`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `title` (text)
      - `description` (text)
      - `html_code` (text)
      - `css_code` (text)
      - `js_code` (text)
      - `is_public` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create course_progress table
CREATE TABLE IF NOT EXISTS course_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  course_id text NOT NULL,
  lesson_id text NOT NULL,
  completed boolean DEFAULT false,
  progress_percentage integer DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, course_id, lesson_id)
);

-- Create user_projects table
CREATE TABLE IF NOT EXISTS user_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text,
  html_code text DEFAULT '',
  css_code text DEFAULT '',
  js_code text DEFAULT '',
  is_public boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_projects ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Course progress policies
CREATE POLICY "Users can read own progress"
  ON course_progress
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON course_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON course_progress
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- User projects policies
CREATE POLICY "Users can read own projects"
  ON user_projects
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read public projects"
  ON user_projects
  FOR SELECT
  TO authenticated
  USING (is_public = true);

CREATE POLICY "Users can insert own projects"
  ON user_projects
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own projects"
  ON user_projects
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own projects"
  ON user_projects
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_course_progress_updated_at
  BEFORE UPDATE ON course_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_projects_updated_at
  BEFORE UPDATE ON user_projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_course_progress_user_id ON course_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_course_progress_course_id ON course_progress(course_id);
CREATE INDEX IF NOT EXISTS idx_user_projects_user_id ON user_projects(user_id);
CREATE INDEX IF NOT EXISTS idx_user_projects_public ON user_projects(is_public) WHERE is_public = true;