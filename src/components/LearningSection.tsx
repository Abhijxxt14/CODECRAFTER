import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Code, 
  CheckCircle, 
  Play, 
  RotateCcw,
  Trophy,
  Clock,
  Target,
  Lightbulb
} from 'lucide-react';
import { courses, Course, Lesson } from '../data/courses';
import { useAuthStore } from '../store/authStore';
import { useProgressStore } from '../store/progressStore';

interface LearningSectionProps {
  topic: string;
}

const LearningSection: React.FC<LearningSectionProps> = ({ topic }) => {
  const [currentCourse, setCurrentCourse] = useState<Course | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('content');
  const [code, setCode] = useState({
    html: '',
    css: '',
    javascript: ''
  });

  const { user } = useAuthStore();
  const { updateProgress, getCourseProgress } = useProgressStore();

  useEffect(() => {
    const course = courses.find(c => c.id === topic);
    if (course) {
      setCurrentCourse(course);
      setCurrentLesson(course.lessons[0]);
      setCurrentLessonIndex(0);
      
      // Initialize code with lesson example
      if (course.lessons[0]?.codeExample) {
        setCode({
          html: course.lessons[0].codeExample.html || '',
          css: course.lessons[0].codeExample.css || '',
          javascript: course.lessons[0].codeExample.javascript || ''
        });
      }
    }
  }, [topic]);

  const handleLessonComplete = async () => {
    if (user && currentCourse && currentLesson) {
      await updateProgress(user.id, currentCourse.id, currentLesson.id, 100);
      
      // Move to next lesson if available
      if (currentLessonIndex < currentCourse.lessons.length - 1) {
        const nextIndex = currentLessonIndex + 1;
        const nextLesson = currentCourse.lessons[nextIndex];
        setCurrentLesson(nextLesson);
        setCurrentLessonIndex(nextIndex);
        
        // Update code with next lesson example
        if (nextLesson.codeExample) {
          setCode({
            html: nextLesson.codeExample.html || '',
            css: nextLesson.codeExample.css || '',
            javascript: nextLesson.codeExample.javascript || ''
          });
        }
      }
    }
  };

  const navigateLesson = (direction: 'prev' | 'next') => {
    if (!currentCourse) return;
    
    const newIndex = direction === 'next' 
      ? Math.min(currentLessonIndex + 1, currentCourse.lessons.length - 1)
      : Math.max(currentLessonIndex - 1, 0);
    
    const newLesson = currentCourse.lessons[newIndex];
    setCurrentLesson(newLesson);
    setCurrentLessonIndex(newIndex);
    
    if (newLesson.codeExample) {
      setCode({
        html: newLesson.codeExample.html || '',
        css: newLesson.codeExample.css || '',
        javascript: newLesson.codeExample.javascript || ''
      });
    }
  };

  const generatePreview = () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <style>${code.css}</style>
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      </head>
      <body>
        ${code.html}
        <script>${code.javascript}</script>
      </body>
      </html>
    `;
  };

  if (!currentCourse || !currentLesson) {
    return (
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading course content...</p>
        </div>
      </div>
    );
  }

  const courseProgress = getCourseProgress(currentCourse.id);

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Course Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className="p-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 hover:text-white border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300"
              >
                <ArrowLeft className="h-5 w-5" />
              </motion.button>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent mb-2">
                  {currentCourse.title}
                </h1>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>Lesson {currentLessonIndex + 1} of {currentCourse.lessons.length}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Trophy className="h-4 w-4 text-amber-400" />
                    <span className="text-amber-400">{courseProgress}% Complete</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="hidden md:block w-64">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                <span>Course Progress</span>
                <span>{courseProgress}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${courseProgress}%` }}
                  className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Content Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-amber-500/20 overflow-hidden"
          >
            {/* Tab Navigation */}
            <div className="flex border-b border-amber-500/20 bg-gradient-to-r from-gray-900 to-gray-800">
              {[
                { id: 'content', label: 'Lesson', icon: BookOpen },
                { id: 'code', label: 'Code', icon: Code },
                { id: 'exercise', label: 'Practice', icon: Target }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border-b-2 border-amber-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 h-96 overflow-y-auto">
              <AnimatePresence mode="wait">
                {activeTab === 'content' && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="prose prose-invert max-w-none"
                  >
                    <h2 className="text-2xl font-bold text-white mb-4">{currentLesson.title}</h2>
                    <p className="text-gray-300 mb-6">{currentLesson.description}</p>
                    <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                      {currentLesson.content}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'code' && (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4">Code Example</h3>
                    <div className="space-y-4">
                      {currentLesson.codeExample?.html && (
                        <div>
                          <h4 className="text-amber-400 font-semibold mb-2">HTML</h4>
                          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                            <code className="text-gray-300">{currentLesson.codeExample.html}</code>
                          </pre>
                        </div>
                      )}
                      {currentLesson.codeExample?.css && (
                        <div>
                          <h4 className="text-blue-400 font-semibold mb-2">CSS</h4>
                          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                            <code className="text-gray-300">{currentLesson.codeExample.css}</code>
                          </pre>
                        </div>
                      )}
                      {currentLesson.codeExample?.javascript && (
                        <div>
                          <h4 className="text-yellow-400 font-semibold mb-2">JavaScript</h4>
                          <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                            <code className="text-gray-300">{currentLesson.codeExample.javascript}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'exercise' && (
                  <motion.div
                    key="exercise"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <Lightbulb className="h-5 w-5 text-yellow-400" />
                      <h3 className="text-xl font-bold text-white">Practice Exercise</h3>
                    </div>
                    {currentLesson.exercises && currentLesson.exercises.length > 0 ? (
                      <div>
                        <h4 className="text-amber-400 font-semibold mb-2">
                          {currentLesson.exercises[0].title}
                        </h4>
                        <p className="text-gray-300 mb-4">
                          {currentLesson.exercises[0].description}
                        </p>
                        <button
                          onClick={() => {
                            setCode(currentLesson.exercises![0].startingCode);
                            setActiveTab('code');
                          }}
                          className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transition-colors"
                        >
                          Start Exercise
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-400">No exercises available for this lesson.</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="border-t border-amber-500/20 p-4 flex items-center justify-between">
              <button
                onClick={() => navigateLesson('prev')}
                disabled={currentLessonIndex === 0}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 text-gray-400 rounded-lg hover:text-white hover:bg-gray-700/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Previous</span>
              </button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLessonComplete}
                className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-colors"
              >
                <CheckCircle className="h-4 w-4" />
                <span>Complete Lesson</span>
              </motion.button>

              <button
                onClick={() => navigateLesson('next')}
                disabled={currentLessonIndex === currentCourse.lessons.length - 1}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 text-gray-400 rounded-lg hover:text-white hover:bg-gray-700/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Interactive Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-amber-500/20 overflow-hidden"
          >
            <div className="border-b border-amber-500/20 p-4 flex items-center justify-between">
              <h3 className="text-white font-semibold">Live Code Editor</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCode({ html: '', css: '', javascript: '' })}
                  className="p-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors"
                  title="Reset code"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors">
                  <Play className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 h-96">
              <div className="grid grid-cols-3 gap-2 h-32">
                <div>
                  <label className="block text-xs text-orange-400 mb-1">HTML</label>
                  <textarea
                    value={code.html}
                    onChange={(e) => setCode(prev => ({ ...prev, html: e.target.value }))}
                    className="w-full h-full bg-gray-800 text-gray-100 font-mono text-xs p-2 rounded border border-gray-700 focus:border-orange-400 focus:outline-none resize-none"
                    placeholder="HTML code..."
                  />
                </div>
                <div>
                  <label className="block text-xs text-blue-400 mb-1">CSS</label>
                  <textarea
                    value={code.css}
                    onChange={(e) => setCode(prev => ({ ...prev, css: e.target.value }))}
                    className="w-full h-full bg-gray-800 text-gray-100 font-mono text-xs p-2 rounded border border-gray-700 focus:border-blue-400 focus:outline-none resize-none"
                    placeholder="CSS code..."
                  />
                </div>
                <div>
                  <label className="block text-xs text-yellow-400 mb-1">JavaScript</label>
                  <textarea
                    value={code.javascript}
                    onChange={(e) => setCode(prev => ({ ...prev, javascript: e.target.value }))}
                    className="w-full h-full bg-gray-800 text-gray-100 font-mono text-xs p-2 rounded border border-gray-700 focus:border-yellow-400 focus:outline-none resize-none"
                    placeholder="JavaScript code..."
                  />
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-xs text-gray-400 mb-1">Preview</label>
                <iframe
                  srcDoc={generatePreview()}
                  className="w-full h-full bg-white rounded border border-gray-700"
                  title="Code Preview"
                  sandbox="allow-scripts"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LearningSection;