import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Rocket } from 'lucide-react';

export const AboutMe = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.15)_0%,_rgba(0,0,0,0.9)_70%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-500 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-4">
            About Me
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full"
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-300 space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-black/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 hover:border-pink-500/40 transition-colors"
            >
              <p className="text-lg leading-relaxed">
                Hi! I'm a BE student in AI & DS at SMVITM Bantakal, passionate about creating 
                technology that makes a difference.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-colors"
            >
              <p className="leading-relaxed">
                I combine Full Stack Development with AI/ML to build practical solutions. 
                Currently focused on developing applications that bridge the gap between 
                complex AI systems and user-friendly interfaces.
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-pink-500/10 to-pink-500/5 p-6 rounded-lg border border-pink-500/20 
                hover:border-pink-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Code2 className="text-pink-500" />
                </motion.div>
                <h3 className="text-xl text-white font-semibold">Development</h3>
              </div>
              <p className="text-gray-300">
                Full Stack Web Development, React, Node.js, Python
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 p-6 rounded-lg border border-purple-500/20 
                hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Brain className="text-purple-500" />
                </motion.div>
                <h3 className="text-xl text-white font-semibold">AI & ML</h3>
              </div>
              <p className="text-gray-300">
                Machine Learning, Deep Learning, Computer Vision
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 p-6 rounded-lg border border-cyan-500/20 
                hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Rocket className="text-cyan-500" />
                </motion.div>
                <h3 className="text-xl text-white font-semibold">Goals</h3>
              </div>
              <p className="text-gray-300">
                Creating innovative solutions that combine AI with practical applications
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
