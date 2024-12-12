import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, Globe } from 'lucide-react';
import image1 from '../assets/image.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

const projects = [
  {
    title: "AI Image Classifier",
    description: "Deep learning model for real-time image classification using CNNs. Features an intuitive web interface for instant predictions.",
    tech: ["Python", "Pytorch"],
    image: image1,
    github: "https://github.com/Ramachandra-2k96/ImageClassificationFramework.git",
    demo: "https://github.com/Ramachandra-2k96/ImageClassificationFramework.git", 
    category: "AI/ML",
    icon: Brain
  },
  {
    title: "Website Maker for College",
    description: "Developed a dynamic website with student registration, event management, and content management features.",
    tech: ["Django", "Tailwind", "Python", "SQLite3"],
    image: image2,
    github: "https://github.com/Ramachandra-2k96/CreateWebsite",
    demo: "https://github.com/Ramachandra-2k96/CreateWebsite",
    category: "Full Stack",
    icon: Globe
  },
  {
    title: "Snake Game AI",
    description: "Created an AI-powered Snake game using Python and Pygame, incorporating advanced pathfinding algorithms for autonomous movement.",
    tech: ["Python", "Pygame", "A* Algorithm", "Double DQN"],
    image: image3,
    github: "https://github.com/Ramachandra-2k96/SnakeGameAI",
    category: "AI/ML",
    icon: Brain
  },
  {
    title: "Signature Verification - Siamese Network",
    description: "Built a signature verification system using Siamese neural networks with TensorFlow and Keras, achieving high accuracy.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
    image: image4,
    github: "https://github.com/Ramachandra-2k96/SignatureVerification",
    category: "AI/ML",
    icon: Brain
  },
  {
    title: "College App",
    description: "Mobile app for college students with timetable management, notifications, and study resources. Redesigned with Flutter and Django-React.",
    tech: ["Flutter", "Django", "React", "Java"],
    image: image5,
    github: "https://github.com/Ramachandra-2k96/SMVITM",
    category: "Full Stack",
    icon: Globe
  }
];

export const Projects = () => {
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-4">
            Featured Projects
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full"
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-black/50 backdrop-blur-sm border border-pink-500/20 rounded-lg overflow-hidden hover:border-pink-500/40 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <motion.div
                  className="absolute top-4 right-4 z-10"
                  whileHover={{ scale: 1.2 }}
                >
                  <project.icon className="w-8 h-8 text-pink-500" />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-pink-400 hover:text-pink-300"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-pink-400 hover:text-pink-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 