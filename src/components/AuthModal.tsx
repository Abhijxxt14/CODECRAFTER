import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff, Github, Chrome, Loader2 } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const { signIn, signUp } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (isLogin) {
        await signIn(formData.email, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        await signUp(formData.email, formData.password, formData.name);
      }
      onClose();
    } catch (error: any) {
      console.error('Auth error:', error);
      if (error && error.message) {
        alert(error.message);
      } else if (typeof error === 'string') {
        alert(error);
      } else {
        alert('Unknown error occurred during authentication.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSocialAuth = async (provider: string) => {
    setIsLoading(true);
    try {
      // This would integrate with Supabase social auth
      console.log(`Social auth with ${provider} - to be implemented`);
    } catch (error) {
      console.error('Social auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-2xl p-8 w-full max-w-md relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    {isLogin ? 'Welcome Back' : 'Join CodeCraft'}
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    {isLogin ? 'Continue your learning journey' : 'Start your coding adventure'}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Social Login */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleSocialAuth('Google')}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center space-x-3 p-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors disabled:opacity-50"
                >
                  <Chrome className="h-5 w-5" />
                  <span>Continue with Google</span>
                </button>
                <button
                  onClick={() => handleSocialAuth('GitHub')}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center space-x-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white hover:bg-gray-700/50 transition-colors disabled:opacity-50"
                >
                  <Github className="h-5 w-5" />
                  <span>Continue with GitHub</span>
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">or continue with email</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                )}

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {!isLogin && (
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    isLogin ? 'Sign In' : 'Create Account'
                  )}
                </motion.button>
              </form>

              {/* Toggle */}
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>

              {isLogin && (
                <div className="mt-4 text-center">
                  <button className="text-amber-400 hover:text-amber-300 text-sm transition-colors">
                    Forgot your password?
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;