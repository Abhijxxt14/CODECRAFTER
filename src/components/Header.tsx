import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X, User, LogOut, BookOpen, Trophy } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  setShowAuthModal: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, setShowAuthModal }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, signOut } = useAuthStore();

  const navItems = [
    { id: 'overview', label: 'Overview', icon: '🏠' },
    { id: 'html', label: 'HTML', icon: '🏗️' },
    { id: 'css', label: 'CSS', icon: '🎨' },
    { id: 'javascript', label: 'JavaScript', icon: '⚡' },
    { id: 'react', label: 'React', icon: '⚛️' },
    { id: 'editor', label: 'Code Editor', icon: '💻' },
  ];

  const handleLogout = async () => {
    await signOut();
    setActiveSection('overview');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-b border-amber-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setActiveSection('overview')}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg transform rotate-45 flex items-center justify-center"
              >
                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center transform -rotate-45">
                  <span className="text-xs font-bold text-amber-400">C²</span>
                </div>
              </motion.div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                CodeCraft
              </h1>
              <p className="text-xs text-gray-400 -mt-1">by Abhijeet Enterprises</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 relative overflow-hidden ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg shadow-amber-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.icon}</span>
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                    alt={user.user_metadata?.full_name || user.email}
                    className="w-8 h-8 rounded-full border-2 border-amber-500/50"
                  />
                  <div className="hidden sm:block">
                    <span className="text-sm text-white">{user.user_metadata?.full_name || user.email?.split('@')[0]}</span>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <Trophy className="h-3 w-3" />
                      <span>Level 1</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                  title="Sign out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAuthModal(true)}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-colors flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:block">Sign In</span>
              </motion.button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-amber-500/20"
            >
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-3 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;