import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseOverview from './components/CourseOverview';
import LearningSection from './components/LearningSection';
import CodeEditor from './components/CodeEditor';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import AuthModal from './components/AuthModal';
import { useAuthStore } from './store/authStore';
import { useProgressStore } from './store/progressStore';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const { user, initialize } = useAuthStore();
  const { fetchProgress } = useProgressStore();

  useEffect(() => {
    // Initialize auth
    initialize();
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [initialize]);

  useEffect(() => {
    // Fetch user progress when user signs in
    if (user) {
      fetchProgress(user.id);
    }
  }, [user, fetchProgress]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#f3f4f6',
            border: '1px solid #374151',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#f3f4f6',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#f3f4f6',
            },
          },
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/5 to-amber-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-500/20 font-mono text-sm"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {['<div>', '</div>', 'function()', '{}', '[]', '=>', 'const', 'let'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        <Header 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          setShowAuthModal={setShowAuthModal}
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeSection === 'overview' && (
              <>
                <Hero setShowAuthModal={setShowAuthModal} />
                <CourseOverview setActiveSection={setActiveSection} />
              </>
            )}
            
            {activeSection === 'html' && <LearningSection topic="html" />}
            {activeSection === 'css' && <LearningSection topic="css" />}
            {activeSection === 'javascript' && <LearningSection topic="javascript" />}
            {activeSection === 'react' && <LearningSection topic="react" />}
            {activeSection === 'editor' && <CodeEditor />}
          </motion.div>
        </AnimatePresence>
        
        <Footer />
      </div>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
}

export default App;