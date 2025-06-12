import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Download, Star, Users, Apple, Play } from "lucide-react";

const DownloadSection = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <motion.h2
            className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            Download TaskFlow Today
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            Join thousands of users who have transformed their productivity with
            TaskFlow. Available for all your devices.
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 lg:p-12 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div variants={itemVariants}>
                {/* Stats */}
                <div className="flex items-center justify-center lg:justify-start space-x-8 mb-8">
                  <motion.div
                    className="flex items-center space-x-2 bg-slate-700/30 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-600/20"
                    whileHover={{ scale: 1.05 }}>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}>
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-slate-300 ml-2 font-semibold">
                      4.8 rating
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-2 text-slate-400 bg-slate-700/30 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-600/20"
                    whileHover={{ scale: 1.05 }}>
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">10K+ downloads</span>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20 backdrop-blur-sm"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(34, 197, 94, 0.15)",
                    }}>
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Download className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <a href="https://expo.dev/accounts/raiyan2002/projects/todo-mate/builds/ea7f6613-a8a0-47bf-b15a-59f5eed38c8a">
                        <p className="text-white font-semibold text-lg">
                          Free Download
                        </p>
                        <p className="text-slate-400">
                          No hidden costs or subscriptions
                        </p>
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(59, 130, 246, 0.15)",
                    }}>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Smartphone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">
                        Cross Platform
                      </p>
                      <p className="text-slate-400">
                        Available on iOS, Android & Web
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="text-center lg:text-right"
                variants={itemVariants}>
                <div className="space-y-4">
                  <motion.button
                    className="w-full lg:w-auto group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}>
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <a href="https://expo.dev/accounts/raiyan2002/projects/todo-mate/builds/ea7f6613-a8a0-47bf-b15a-59f5eed38c8a">
                        <p className="text-sm opacity-90">Download for</p>
                        <p className="font-bold">Android</p>
                      </a>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>

                  <motion.button
                    className="w-full lg:w-auto group relative bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}>
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Apple className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm opacity-90">Download for</p>
                      <p className="font-bold">iOS</p>
                    </div>
                  </motion.button>

                  <motion.p
                    className="text-slate-400 text-sm mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}>
                    Also available as a Progressive Web App
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
