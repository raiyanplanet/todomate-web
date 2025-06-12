import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Code, Coffee, Heart, Star } from 'lucide-react';

const DeveloperSection = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="developer" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-blue-500/10"></div>
      
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
            Meet the Developer
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Built with passion and attention to detail by a dedicated developer who understands productivity.
          </motion.p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl border border-slate-700/50 overflow-hidden backdrop-blur-sm relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            
            <div className="p-8 lg:p-12 relative z-10">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <motion.div 
                  className="lg:col-span-1"
                  variants={itemVariants}
                >
                  <div className="relative">
                    <motion.div 
                      className="w-56 h-56 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      TA
                    </motion.div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
                      animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Stars */}
                    <motion.div
                      className="absolute top-4 left-4 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Star className="w-3 h-3 text-yellow-800 fill-current" />
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="lg:col-span-2"
                  variants={itemVariants}
                >
                  <motion.h3 
                    className="text-3xl lg:text-4xl font-bold text-white mb-4"
                    whileHover={{ 
                      background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Tawsiful Alam
                  </motion.h3>
                  
                  <motion.div 
                    className="flex items-center space-x-2 text-slate-400 mb-6"
                    variants={itemVariants}
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Software Developer</span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-slate-300 text-lg leading-relaxed mb-8"
                    variants={itemVariants}
                  >
                    Passionate mobile and web developer with expertise in creating beautiful, 
                    user-friendly applications. I believe in building tools that make people's 
                    lives easier and more productive. TaskFlow is the result of my commitment 
                    to excellent design and seamless user experience.
                  </motion.p>
                  
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
                    variants={itemVariants}
                  >
                    <motion.div 
                      className="flex items-center space-x-3 p-4 bg-slate-700/30 rounded-xl backdrop-blur-sm border border-slate-600/20"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(51, 65, 85, 0.4)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Clean Code</p>
                        <p className="text-slate-400 text-sm">Well-structured & maintainable</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center space-x-3 p-4 bg-slate-700/30 rounded-xl backdrop-blur-sm border border-slate-600/20"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(51, 65, 85, 0.4)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Heart className="w-6 h-6 text-white fill-current" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">User Focus</p>
                        <p className="text-slate-400 text-sm">Experience-driven development</p>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-wrap gap-4"
                    variants={itemVariants}
                  >
                    <motion.a
                      href="mailto:tawsifulalam2002@gmail.com"
                      className="group relative flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg overflow-hidden"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">Contact Me</span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.a>
                    
                    <motion.a
                      href="#"
                      className="flex items-center space-x-2 border-2 border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </motion.a>
                    
                    <motion.a
                      href="#"
                      className="flex items-center space-x-2 border-2 border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;