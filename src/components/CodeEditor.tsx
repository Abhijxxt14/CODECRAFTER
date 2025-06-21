import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  RotateCcw, 
  Download, 
  Share, 
  ArrowLeft, 
  Save, 
  Settings, 
  Maximize2, 
  Copy, 
  Check,
  Folder,
  Plus,
  Trash2
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useProjectStore } from '../store/projectStore';
import toast from 'react-hot-toast';

const CodeEditor: React.FC = () => {
  const [activeTab, setActiveTab] = useState('html');
  const [copied, setCopied] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [code, setCode] = useState({
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeCraft Editor</title>
</head>
<body>
    <div class="container">
        <h1>Welcome to CodeCraft!</h1>
        <p>Start coding and see your changes live!</p>
        <button onclick="changeColor()" class="btn">Click me!</button>
    </div>
</body>
</html>`,
    css: `.container {
    max-width: 800px;
    margin: 50px auto;
    padding: 40px;
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    color: #333;
    text-align: center;
    transition: all 0.3s ease;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.8;
}

.btn {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    transform: translateY(0);
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}`,
    javascript: `function changeColor() {
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
    ];
    
    const container = document.querySelector('.container');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    container.style.background = randomColor;
    
    // Add a fun animation
    container.style.transform = 'scale(1.05) rotate(1deg)';
    setTimeout(() => {
        container.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn');
    const h1 = document.querySelector('h1');
    
    // Add click counter
    let clickCount = 0;
    button.addEventListener('click', function() {
        clickCount++;
        h1.textContent = \`Welcome to CodeCraft! (Clicked \${clickCount} times)\`;
        
        // Add sparkle effect
        createSparkles();
    });
    
    // Add keyboard interaction
    document.addEventListener('keydown', function(e) {
        if (e.key === ' ') {
            e.preventDefault();
            changeColor();
        }
    });
});

function createSparkles() {
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// Add CSS for sparkle animation
const style = document.createElement('style');
style.textContent = \`
    @keyframes sparkle {
        0% { opacity: 1; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
        100% { opacity: 0; transform: scale(0) rotate(360deg); }
    }
\`;
document.head.appendChild(style);`
  });

  const { user } = useAuthStore();
  const { projects, saveProject, fetchProjects, currentProject, setCurrentProject } = useProjectStore();

  useEffect(() => {
    if (user) {
      fetchProjects(user.id);
    }
  }, [user, fetchProjects]);

  const tabs = [
    { id: 'html', label: 'HTML', icon: '🏗️', color: 'from-orange-400 to-red-500' },
    { id: 'css', label: 'CSS', icon: '🎨', color: 'from-blue-400 to-cyan-500' },
    { id: 'javascript', label: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500' }
  ];

  const handleCodeChange = (language: string, value: string) => {
    setCode(prev => ({ ...prev, [language]: value }));
  };

  const resetCode = () => {
    setCode({
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeCraft Editor</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Start coding here...</p>
</body>
</html>`,
      css: `body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    margin: 0;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    min-height: 100vh;
}

h1 {
    color: #fff;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1rem;
}`,
      javascript: `console.log('Welcome to CodeCraft!');

// Your JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
});`
    });
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code[activeTab as keyof typeof code]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const handleSaveProject = async () => {
    if (!user) {
      toast.error('Please sign in to save projects');
      return;
    }

    if (!projectTitle.trim()) {
      toast.error('Please enter a project title');
      return;
    }

    try {
      await saveProject(user.id, {
        title: projectTitle,
        description: projectDescription,
        html_code: code.html,
        css_code: code.css,
        js_code: code.javascript,
        is_public: false
      });
      
      setShowSaveModal(false);
      setProjectTitle('');
      setProjectDescription('');
    } catch (error) {
      console.error('Save error:', error);
    }
  };

  const loadProject = (project: any) => {
    setCode({
      html: project.html_code,
      css: project.css_code,
      javascript: project.js_code
    });
    setCurrentProject(project);
    toast.success(`Loaded project: ${project.title}`);
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
      </head>
      <body>
        ${code.html.replace(/<html[^>]*>|<\/html>|<head[^>]*>[\s\S]*?<\/head>|<!DOCTYPE[^>]*>/gi, '')}
        <script>${code.javascript}</script>
      </body>
      </html>
    `;
  };

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
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
                CodeCraft Editor
              </h1>
              <p className="text-gray-400">Write, test, and preview your code in real-time</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {user && (
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSaveModal(true)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Save className="h-4 w-4" />
                <span className="hidden sm:block">Save Project</span>
              </motion.button>
            )}
            
            {[
              { icon: RotateCcw, label: 'Reset', color: 'from-gray-600 to-gray-700', onClick: resetCode },
              { icon: Share, label: 'Share', color: 'from-blue-500 to-blue-600' },
              { icon: Download, label: 'Export', color: 'from-purple-500 to-purple-600' },
            ].map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.onClick}
                className={`px-4 py-2 rounded-lg bg-gradient-to-r ${action.color} text-white font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl`}
              >
                <action.icon className="h-4 w-4" />
                <span className="hidden sm:block">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Projects Sidebar */}
          {user && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-amber-500/20 p-4 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center space-x-2">
                  <Folder className="h-4 w-4" />
                  <span>My Projects</span>
                </h3>
                <button
                  onClick={() => setShowSaveModal(true)}
                  className="p-1 rounded bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                      currentProject?.id === project.id
                        ? 'bg-amber-500/20 border-amber-400/40'
                        : 'bg-gray-800/50 border-gray-700 hover:border-amber-500/30'
                    }`}
                    onClick={() => loadProject(project)}
                  >
                    <h4 className="text-white font-medium text-sm truncate">{project.title}</h4>
                    <p className="text-gray-400 text-xs mt-1 truncate">{project.description || 'No description'}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">
                        {new Date(project.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
                
                {projects.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    <Folder className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No projects yet</p>
                    <p className="text-xs">Save your first project!</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Code Editor Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl ${
              user ? 'lg:col-span-2' : 'lg:col-span-3'
            }`}
          >
            {/* Tab Navigation */}
            <div className="flex border-b border-amber-500/20 bg-gradient-to-r from-gray-900 to-gray-800">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium transition-all duration-300 flex items-center space-x-2 relative ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border-b-2 border-amber-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500"
                    />
                  )}
                </motion.button>
              ))}
              
              <div className="flex-1 flex justify-end items-center px-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyCode}
                  className="p-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors"
                  title="Copy code"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </motion.button>
              </div>
            </div>

            {/* Code Editor */}
            <div className="h-full relative">
              <textarea
                value={code[activeTab as keyof typeof code]}
                onChange={(e) => handleCodeChange(activeTab, e.target.value)}
                className="w-full h-full bg-gradient-to-br from-gray-900 to-black text-gray-100 font-mono text-sm p-6 resize-none border-none outline-none leading-relaxed"
                style={{ minHeight: '500px' }}
                placeholder={`Write your ${activeTab.toUpperCase()} code here...`}
                spellCheck="false"
              />
              
              <div className="absolute top-4 right-4">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{activeTab.toUpperCase()}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Preview Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 border-b border-amber-500/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm font-medium">Live Preview</span>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors"
                  title="Refresh preview"
                >
                  <Play className="h-4 w-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors"
                  title="Fullscreen"
                >
                  <Maximize2 className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
            
            <iframe
              srcDoc={generatePreview()}
              className="w-full h-full border-none bg-white"
              style={{ minHeight: '500px' }}
              title="Code Preview"
              sandbox="allow-scripts"
            />
          </motion.div>
        </div>
      </div>

      {/* Save Project Modal */}
      <AnimatePresence>
        {showSaveModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSaveModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-2xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-white mb-4">Save Project</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    placeholder="Enter project title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Description (Optional)
                  </label>
                  <textarea
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"
                    rows={3}
                    placeholder="Describe your project"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowSaveModal(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSaveProject}
                  className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-colors"
                >
                  Save Project
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CodeEditor;