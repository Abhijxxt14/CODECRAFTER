import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-amber-500/20 mt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/5 to-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg transform rotate-45 flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center transform -rotate-45">
                  <span className="text-sm font-bold text-amber-400">C²</span>
                </div>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                  CodeCraft
                </h3>
                <p className="text-xs text-gray-400 -mt-1">by Abhijeet Enterprises</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Empowering the next generation of developers with cutting-edge interactive learning 
              experiences and hands-on projects that matter.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Crafted with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
              <span>for developers worldwide</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'Getting Started',
                'Course Catalog',
                'Code Editor',
                'Projects Gallery',
                'Coding Challenges',
                'Community'
              ].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6 text-lg">Learn & Master</h4>
            <ul className="space-y-3">
              {[
                { name: 'HTML Fundamentals', icon: '🏗️' },
                { name: 'CSS Styling Pro', icon: '🎨' },
                { name: 'JavaScript Mastery', icon: '⚡' },
                { name: 'React Development', icon: '⚛️' },
                { name: 'Advanced Topics', icon: '🚀' },
                { name: 'Career Guidance', icon: '💼' }
              ].map((course, index) => (
                <motion.li
                  key={course.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-sm">{course.icon}</span>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">
                    {course.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6 text-lg">Connect With Us</h4>
            <div className="space-y-4 mb-6">
              <a href="mailto:abhijeetsoren222@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-amber-400 transition-colors duration-300 group">
                <div className="p-2 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">abhijeetsoren222@gmail.com</span>
              </a>
              
              <div className="flex space-x-3">
                {[
                  { icon: Github, href: 'https://github.com/Abhijxxt14', label: 'GitHub' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/abhijeet-soren-a7654b2b5/', label: 'LinkedIn' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href !== '#' ? '_blank' : undefined}
                    rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 text-gray-400 hover:text-white hover:border-amber-400/40 transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-white font-medium mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-r-lg hover:from-amber-600 hover:to-yellow-600 transition-colors text-sm"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-amber-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2025 CodeCraft by Abhijeet Enterprises. All rights reserved. | Transforming developers worldwide.
            </motion.div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Support'].map((link) => (
                  <a key={link} href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    {link}
                  </a>
                ))}
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-400 hover:text-amber-300 transition-colors"
                title="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;