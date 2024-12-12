import React, { useEffect } from 'react';
import { ChevronDown, Code, Sparkles, Mail } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import profileImage from '../assets/00017-1143460065.png';

export const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <section className="relative h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.15)_0%,_rgba(0,0,0,0.9)_70%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          className="mb-12"
        >
          {/* Profile Image */}
          <motion.div 
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-pink-500/20"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={profileImage}
              alt="Ramachandra Udupa"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name and Title */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}  
            transition={{ delay: 0.5 }}
          >
            Ramachandra Udupa
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Full Stack Developer & AI/ML Specialist
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Transforming ideas into reality through code, crafting intelligent solutions that bridge 
            the gap between human creativity and machine intelligence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-medium flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-pink-500/25 transition-shadow"
            >
              <span>View My Work</span>
              <Code className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-pink-500/50 rounded-full text-white font-medium flex items-center justify-center space-x-2 hover:bg-pink-500/10 transition-colors"
            >
              <span>Get in Touch</span>
              <Mail className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a 
          href="#about"
          animate={{ 
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="block text-pink-500 hover:text-pink-400 transition-colors"
        >
          <ChevronDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  );
};