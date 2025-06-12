import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Play, Smartphone, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToDownload = () => {
    const element = document.getElementById("download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const phoneVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -30 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                <Sparkles className="w-4 h-4 text-yellow-600 m-2" />
              </motion.div>
              <h1 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Todo-mate
              </h1>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-2xl lg:text-4xl font-semibold mb-6 text-slate-200">
              Organize Your Life,
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                One Task at a Time
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-slate-400 mb-8 leading-relaxed">
              Stay productive and never miss a deadline with our beautiful,
              intuitive task management app. Track progress, set priorities, and
              achieve your goals effortlessly.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={scrollToDownload}
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Smartphone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Download Now</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                className="group relative border-2 border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}>
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}>
                  10K+
                </motion.div>
                <div className="text-slate-400 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}>
                  4.8★
                </motion.div>
                <div className="text-slate-400 text-sm">Rating</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}>
                  99%
                </motion.div>
                <div className="text-slate-400 text-sm">Satisfaction</div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              variants={phoneVariants}
              {...floatingVariants}>
              <div className="relative">
                <motion.div
                  className="w-80 h-[640px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-[3rem] border-8 border-slate-700/50 shadow-2xl backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}>
                  <div className="w-full h-full bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 rounded-[2.5rem] p-6 overflow-hidden relative">
                    {/* Phone UI Content */}
                    <div className="text-center">
                      <motion.div
                        className="w-16 h-1 bg-slate-600 rounded-full mx-auto mb-8"
                        initial={{ width: 0 }}
                        animate={{ width: 64 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                      />

                      <div className="text-left">
                        <motion.p
                          className="text-xs text-slate-400 mb-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.8 }}>
                          Thursday, June 12
                        </motion.p>
                        <motion.h3
                          className="text-white font-semibold mb-1 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2 }}>
                          Hi, tawsifulalam2002@gmail.com
                        </motion.h3>
                        <motion.p
                          className="text-xs text-slate-500 mb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.2 }}>
                          Be productive today
                        </motion.p>

                        <motion.div
                          className="bg-gradient-to-r from-slate-700/50 to-slate-600/30 rounded-xl p-4 mb-6 backdrop-blur-sm border border-slate-600/30"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 2.4 }}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white text-sm font-medium">
                              Task Progress
                            </span>
                            <span className="text-blue-400 text-sm font-bold">
                              40%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-slate-600 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "40%" }}
                              transition={{ delay: 2.6, duration: 1 }}
                            />
                          </div>
                        </motion.div>

                        <div className="space-y-3">
                          {[
                            {
                              color: "orange",
                              title: "Design Review",
                              subtitle: "Due in 2 hours",
                              delay: 2.8,
                            },
                            {
                              color: "blue",
                              title: "Team Meeting",
                              subtitle: "3 tasks remaining",
                              delay: 3,
                            },
                            {
                              color: "green",
                              title: "Code Review",
                              subtitle: "Almost done",
                              delay: 3.2,
                            },
                          ].map((task, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-xl backdrop-blur-sm border border-slate-600/20"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: task.delay }}
                              whileHover={{ scale: 1.02 }}>
                              <div
                                className={`w-10 h-10 bg-${task.color}-500 rounded-full flex items-center justify-center shadow-lg`}>
                                <div className="w-5 h-5 bg-white/90 rounded-sm"></div>
                              </div>
                              <div className="flex-1">
                                <p className="text-white text-sm font-medium">
                                  {task.title}
                                </p>
                                <p className="text-xs text-slate-400">
                                  {task.subtitle}
                                </p>
                              </div>
                              <motion.div
                                className="w-6 h-6 border-2 border-slate-500 rounded-full"
                                whileHover={{ borderColor: "#3b82f6" }}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements around Phone */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Lightning Icon */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}>
                  <Zap className="w-4 h-4 text-yellow-800" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}>
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
