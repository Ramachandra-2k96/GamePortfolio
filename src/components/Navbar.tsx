import React, { useState, useEffect } from 'react';
import { Code, User, Mail, Github, Zap, Terminal, Database, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import portalAnimation from '../assets/portal-animation.json';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { text: "Projects", href: "#projects", description: "View my portfolio projects" },
    { text: "Skills", href: "#skills", description: "Technical skills & expertise" },
    { text: "About", href: "#about", description: "Learn more about me" },
    { text: "Contact", href: "#contact", description: "Get in touch" },
    { text: "Github", href: "https://github.com/Ramachandra-2k96", description: "Check my Github repos" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="relative overflow-visible">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoverEffect(true)}
              onHoverEnd={() => setHoverEffect(false)}
            >
              <div className="relative w-20 h-20">
                <Lottie 
                  animationData={portalAnimation}
                  loop={true}
                  className="absolute inset-0"
                />
               
              </div>
              
              <motion.span 
                className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 cursor-pointer"
                animate={{ textShadow: hoverEffect ? "0 0 15px rgba(236, 72, 153, 0.8)" : "0 0 0px rgba(236, 72, 153, 0)" }}
              >
                CODE QUANTUM
              </motion.span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="group relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative px-4 py-2">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(236, 72, 153, 0.3)",
                      }}
                    />
                    <div className="relative flex flex-col items-center">
                      <span className="text-pink-300 font-medium text-sm group-hover:text-pink-400 transition-all duration-300">
                        {item.text}
                      </span>
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 text-xs text-pink-300 whitespace-nowrap bg-black/80 px-2 py-1 rounded"
                      >
                        {item.description}
                      </motion.span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button - Add z-index */}
            <div className="md:hidden relative z-20">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="text-pink-500 p-2 hover:bg-pink-500/20 rounded-lg"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation - Adjust z-index */}
          <AnimatePresence mode="wait">
            {isMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="md:hidden absolute w-full left-0 top-full z-50"
              >
                <div className="py-4 space-y-2 bg-black/95 rounded-lg mt-2 mx-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="block px-4 py-2 text-pink-300 hover:bg-pink-500/20 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="font-medium">{item.text}</span>
                      <span className="block text-xs text-pink-400 mt-1">{item.description}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};