import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Star, Users, Trophy, Target, Zap } from 'lucide-react';

interface CourseOverviewProps {
  setActiveSection: (section: string) => void;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ setActiveSection }) => {
  const courses = [
    {
      id: 'html',
      title: 'HTML Mastery',
      description: 'Build the foundation of web development with semantic HTML, accessibility best practices, and modern web standards.',
      duration: '4-6 hours',
      level: 'Beginner',
      topics: ['Semantic Elements', 'Forms & Validation', 'Accessibility', 'SEO Optimization'],
      color: 'from-orange-400 to-red-500',
      bgGradient: 'from-orange-900/20 to-red-900/10',
      borderColor: 'border-orange-500/20 hover:border-orange-400/40',
      icon: '🏗️',
      students: '15K+',
      rating: 4.9
    },
    {
      id: 'css',
      title: 'CSS Styling Pro',
      description: 'Master modern CSS with Flexbox, Grid, animations, and responsive design techniques that create stunning interfaces.',
      duration: '6-8 hours',
      level: 'Beginner to Intermediate',
      topics: ['Flexbox & Grid', 'Animations & Transitions', 'Responsive Design', 'CSS Variables'],
      color: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-900/20 to-cyan-900/10',
      borderColor: 'border-blue-500/20 hover:border-blue-400/40',
      icon: '🎨',
      students: '12K+',
      rating: 4.8
    },
    {
      id: 'javascript',
      title: 'JavaScript Mastery',
      description: 'From fundamentals to advanced concepts including ES6+, DOM manipulation, async programming, and modern JavaScript patterns.',
      duration: '12-15 hours',
      level: 'Beginner to Advanced',
      topics: ['ES6+ Features', 'DOM Manipulation', 'Async/Await & Promises', 'API Integration'],
      color: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-900/20 to-orange-900/10',
      borderColor: 'border-yellow-500/20 hover:border-yellow-400/40',
      icon: '⚡',
      students: '20K+',
      rating: 4.9
    },
    {
      id: 'react',
      title: 'React Development',
      description: 'Build powerful, scalable web applications with React, hooks, state management, and modern development practices.',
      duration: '15-20 hours',
      level: 'Intermediate to Advanced',
      topics: ['Components & JSX', 'Hooks & State', 'Context API', 'React Router'],
      color: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-900/20 to-pink-900/10',
      borderColor: 'border-purple-500/20 hover:border-purple-400/40',
      icon: '⚛️',
      students: '18K+',
      rating: 4.9
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-500/30 mb-8">
            <Trophy className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-300">Premium Learning Paths</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="text-white">Learning Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Each course is meticulously crafted to build upon the previous one, creating a complete 
            transformation from beginner to professional frontend developer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`group p-8 rounded-2xl bg-gradient-to-br ${course.bgGradient} border ${course.borderColor} transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-amber-500/10 relative overflow-hidden`}
              onClick={() => setActiveSection(course.id)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className={`h-16 w-16 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {course.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-amber-400" />
                          <span className="text-amber-400">{course.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{course.students}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-amber-400 group-hover:text-amber-300 transition-colors"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{course.description}</p>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Target className="h-4 w-4 text-amber-400" />
                    <h4 className="text-white font-semibold">What you'll master:</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {course.topics.map((topic, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-2 text-sm text-gray-300"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${course.color} rounded-full`}></div>
                        <span>{topic}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${course.color} text-black font-medium`}>
                      {course.level}
                    </span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${course.color} hover:shadow-lg px-6 py-2 rounded-lg font-semibold text-black transition-all duration-300 flex items-center space-x-2`}
                  >
                    <span>Start Course</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 text-center"
        >
          {[
            { icon: Target, value: '200+', label: 'Interactive Lessons', color: 'from-blue-400 to-purple-500' },
            { icon: Trophy, value: '50+', label: 'Hands-on Projects', color: 'from-emerald-400 to-cyan-500' },
            { icon: Zap, value: '24/7', label: 'Code Editor Access', color: 'from-orange-400 to-pink-500' },
            { icon: Users, value: '50K+', label: 'Active Learners', color: 'from-amber-400 to-yellow-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm"
            >
              <div className={`h-12 w-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="h-6 w-6 text-black" />
              </div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CourseOverview;