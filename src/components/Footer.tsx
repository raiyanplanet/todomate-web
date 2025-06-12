import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50 py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-purple-500/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <motion.div variants={itemVariants} className="md:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}>
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}>
                <Smartphone className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TaskFlow
              </span>
            </motion.div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              The beautiful task management app that helps you stay organized
              and productive. Transform your daily workflow with intuitive
              design and powerful features.
            </p>
            <p className="text-slate-500 text-sm">
              © 2024 TaskFlow. All rights reserved.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">App</h4>
            <ul className="space-y-2 text-slate-400">
              {["Features", "Screenshots", "Download", "Privacy Policy"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5, color: "#ffffff" }}
                    transition={{ duration: 0.2 }}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Developer</h4>
            <ul className="space-y-2 text-slate-400">
              {[
                { name: "Contact", href: "mailto:tawsifulalam2002@gmail.com" },
                { name: "GitHub", href: "#" },
                { name: "LinkedIn", href: "#" },
                { name: "Portfolio", href: "#" },
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-slate-800/50 mt-8 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-slate-400 flex items-center space-x-1"
              whileHover={{ scale: 1.05 }}>
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>by Tawsiful Alam Raiyan</span>
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}>
              <span>Back to top</span>
              <motion.div
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-slate-700 transition-colors"
                whileHover={{ rotate: -90 }}
                transition={{ duration: 0.3 }}>
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
