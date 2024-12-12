import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      if (form.current) {
        // Replace these with your EmailJS credentials
        const result = await emailjs.sendForm(
          'service_3mcuj3d', // Get from EmailJS dashboard
          'template_0nhev7i', // Get from EmailJS dashboard
          form.current,
          '5j2MqRMeKfbmMphWC' // Get from EmailJS dashboard
        );

        if (result.text === 'OK') {
          setSubmitStatus('success');
          form.current.reset();
        }
      }
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Ramachandra-2k96', // Update with your GitHub
      color: 'hover:text-pink-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ramachandra-udupa/', // Update with your LinkedIn
      color: 'hover:text-purple-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:ramachandraudupa2004@gmail.com', // Update with your email
      color: 'hover:text-cyan-400'
    }
  ];

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

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-4">
            Get In Touch
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full"
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-black/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-pink-500" />
                <h3 className="text-xl font-bold text-white">Location</h3>
              </div>
              <p className="text-gray-300">Bantakal, Udupi, Karnataka</p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-400 ${link.color} transition-colors`}
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <input
                  type="text"
                  name="user_name" // Important for EmailJS
                  placeholder="Your Name"
                  required
                  className="w-full bg-black/50 border border-pink-500/20 rounded-lg px-4 py-3 text-white 
                    placeholder-gray-400 focus:outline-none focus:border-pink-500/50 transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="email"
                  name="user_email" // Important for EmailJS
                  placeholder="Your Email"
                  required
                  className="w-full bg-black/50 border border-pink-500/20 rounded-lg px-4 py-3 text-white 
                    placeholder-gray-400 focus:outline-none focus:border-pink-500/50 transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <textarea
                  name="message" // Important for EmailJS
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full bg-black/50 border border-pink-500/20 rounded-lg px-4 py-3 text-white 
                    placeholder-gray-400 focus:outline-none focus:border-pink-500/50 transition-colors resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium py-3 
                  rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-pink-500/25 
                  transition-shadow disabled:opacity-50"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-sm text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center"
                >
                  {errorMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 