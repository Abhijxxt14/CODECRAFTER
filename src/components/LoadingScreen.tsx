import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-4 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg transform rotate-45"></div>
              <div className="absolute inset-2 bg-black rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  C²
                </span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent mb-2"
            >
              CodeCraft
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-gray-400 text-sm"
            >
              by Abhijeet Enterprises
            </motion.p>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-4"
          >
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Loading Experience</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Initializing...
              </motion.span>
            </div>
            
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 1.8, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-full relative"
              >
                <motion.div
                  animate={{ x: [-20, 320] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Loading Messages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="text-xs text-gray-500 space-y-1"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              ✓ Loading interactive components
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.3, duration: 0.5 }}
            >
              ✓ Preparing code editor
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6, duration: 0.5 }}
            >
              ✓ Setting up learning environment
            </motion.p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-amber-500/30 font-mono text-lg"
              initial={{ 
                x: Math.random() * 400 + 100,
                y: Math.random() * 400 + 100,
                opacity: 0,
                scale: 0
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {['<>', '</>', '{}', '[]', '()', '=>', '&&', '||'][i]}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;