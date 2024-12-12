import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp, Code, Brain, User, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Skills', href: '#skills', icon: Brain },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Ramachandra-2k96',
      color: 'hover:text-pink-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ramachandra-udupa/',
      color: 'hover:text-purple-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:ramachandraudupa2004@gmail.com',
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <footer className="relative bg-black border-t border-pink-500/10">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.15)_0%,_rgba(0,0,0,0.9)_70%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Back to Top Button */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 
            bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full 
            shadow-lg hover:shadow-pink-500/25 transition-shadow"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </motion.a>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 mb-2">
              Ramachandra Udupa
            </h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer & AI/ML Specialist
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {sections.map((section) => (
                <motion.a
                  key={section.name}
                  href={section.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-pink-400 flex items-center gap-1"
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 ${link.color} transition-colors`}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-pink-500/10"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Ramachandra Udupa. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}; 