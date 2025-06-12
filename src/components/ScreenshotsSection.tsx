import React from 'react';
import { motion } from 'framer-motion';

const ScreenshotsSection = () => {
  const screenshots = [
    {
      title: 'Task Dashboard',
      description: 'Clean and intuitive dashboard showing your task progress and daily overview.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Task Management',
      description: 'Easy task creation, editing, and organization with priority settings.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Progress Tracking',
      description: 'Visual progress indicators and completion statistics to keep you motivated.',
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="screenshots" className="py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Beautiful Interface
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Experience the app's clean design and intuitive user interface that makes task management a pleasure.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {screenshots.map((screenshot, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={itemVariants}
            >
              <motion.div 
                className="relative mb-6"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full aspect-[9/16] bg-gradient-to-b from-slate-900 to-slate-800 rounded-[2.5rem] border-8 border-slate-700/50 shadow-2xl overflow-hidden backdrop-blur-sm">
                  {/* Phone Screen Content */}
                  <div className="w-full h-full bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 p-6 relative">
                    {/* Status Bar */}
                    <motion.div 
                      className="w-16 h-1 bg-slate-600 rounded-full mx-auto mb-8"
                      initial={{ width: 0 }}
                      whileInView={{ width: 64 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                    />
                    
                    {/* Header */}
                    <motion.div 
                      className="space-y-4 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.2 }}
                    >
                      <div className={`h-6 bg-gradient-to-r ${screenshot.gradient} rounded-lg opacity-80`}></div>
                      <div className="h-4 bg-slate-700/60 rounded w-3/4"></div>
                    </motion.div>
                    
                    {/* Content Cards */}
                    <div className="space-y-3">
                      {[0, 1, 2].map((cardIndex) => (
                        <motion.div
                          key={cardIndex}
                          className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-xl backdrop-blur-sm border border-slate-600/20"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9 + index * 0.2 + cardIndex * 0.1 }}
                          whileHover={{ scale: 1.02, backgroundColor: 'rgba(51, 65, 85, 0.4)' }}
                        >
                          <motion.div 
                            className={`w-8 h-8 bg-gradient-to-br ${screenshot.gradient} rounded-full shadow-lg`}
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="flex-1 space-y-1">
                            <div className="h-3 bg-slate-600 rounded w-2/3"></div>
                            <div className="h-2 bg-slate-600/60 rounded w-1/2"></div>
                          </div>
                          <motion.div
                            className="w-4 h-4 border-2 border-slate-500 rounded-full"
                            whileHover={{ borderColor: '#3b82f6', scale: 1.2 }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${screenshot.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${screenshot.gradient} rounded-full blur-lg opacity-60`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 2 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className={`absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br ${screenshot.gradient} rounded-full blur-lg opacity-40`}
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {screenshot.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {screenshot.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;