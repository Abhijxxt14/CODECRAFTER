import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code, Zap, Play, Star } from 'lucide-react';

interface HeroProps {
  setShowAuthModal: (show: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setShowAuthModal }) => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { code: '<div className="hero">', x: '10%', y: '20%', delay: 0 },
          { code: 'const learn = () => {}', x: '80%', y: '30%', delay: 1 },
          { code: '.container { display: flex; }', x: '15%', y: '70%', delay: 2 },
          { code: 'useState(false)', x: '75%', y: '80%', delay: 3 },
          { code: 'function CodeCraft()', x: '20%', y: '50%', delay: 4 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ delay: item.delay, duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute font-mono text-sm text-amber-400/50"
            style={{ left: item.x, top: item.y }}
          >
            {item.code}
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-500/30 mb-8"
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-300">Master Frontend Development</span>
            <Sparkles className="h-4 w-4 text-yellow-400" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
              Master Frontend
            </span>
            <br />
            <span className="text-white">Development with</span>
            <br />
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-amber-400 via-yellow-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Interactive Learning
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your coding journey with our premium interactive platform. 
            Master HTML, CSS, JavaScript, and React through hands-on projects, 
            real-time coding, and expert-crafted curriculum.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-12 text-sm"
          >
            {[
              { icon: Star, label: '50K+ Students', value: '4.9/5 Rating' },
              { icon: Code, label: '200+ Lessons', value: 'Interactive' },
              { icon: Zap, label: 'Live Coding', value: 'Real-time' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center space-x-2 text-gray-400">
                <stat.icon className="h-4 w-4 text-amber-400" />
                <span>{stat.label}</span>
                <span className="text-amber-400">•</span>
                <span className="text-white">{stat.value}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAuthModal(true)}
              className="group bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 px-8 py-4 rounded-xl font-bold text-lg text-black transition-all duration-300 shadow-lg shadow-amber-500/25 flex items-center space-x-2"
            >
              <span>Start Learning Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-amber-500/50 text-amber-400 hover:border-amber-400 hover:bg-amber-500/10 transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: Code,
              title: 'Interactive Coding',
              description: 'Learn by doing with our advanced code editor and real-time feedback system.',
              color: 'from-amber-400 to-amber-600',
              bgColor: 'from-amber-900/30 to-amber-800/20',
              borderColor: 'border-amber-500/20 hover:border-amber-400/40'
            },
            {
              icon: Zap,
              title: 'Live Preview',
              description: 'See your code come to life instantly with our powerful live preview engine.',
              color: 'from-yellow-400 to-yellow-600',
              bgColor: 'from-yellow-900/30 to-yellow-800/20',
              borderColor: 'border-yellow-500/20 hover:border-yellow-400/40'
            },
            {
              icon: Sparkles,
              title: 'Expert Curriculum',
              description: 'Comprehensive courses designed by industry experts for maximum learning impact.',
              color: 'from-amber-400 to-yellow-500',
              bgColor: 'from-amber-900/20 to-yellow-900/20',
              borderColor: 'border-amber-500/20 hover:border-yellow-400/40'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group p-8 rounded-2xl bg-gradient-to-br ${feature.bgColor} border ${feature.borderColor} transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10`}
            >
              <div className={`h-14 w-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Code Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-amber-500/20 shadow-2xl shadow-amber-500/10 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">CodeCraft Interactive Editor</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="text-amber-400"
              >
                <span className="text-purple-400">const</span> <span className="text-blue-400">welcomeMessage</span> = <span className="text-green-400">"Welcome to CodeCraft!"</span>;
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className="text-amber-400"
              >
                <span className="text-purple-400">function</span> <span className="text-blue-400">startLearning</span>() {'{'}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.4, duration: 0.5 }}
                className="text-amber-400 ml-4"
              >
                <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-400">"Your coding journey begins now!"</span>);
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.6, duration: 0.5 }}
                className="text-amber-400"
              >
                {'}'}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;