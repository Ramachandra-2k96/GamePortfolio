import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Globe, Server, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "C++", "C#", "JavaScript", "TypeScript"],
    colorClass: "from-emerald-500 to-teal-400"
  },
  {
    title: "Web Development", 
    icon: Globe,
    skills: ["Django", "Full Stack", "React", "HTML/CSS", "Next.js"],
    colorClass: "from-violet-500 to-indigo-400" 
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["Machine Learning", "Neural Networks", "TensorFlow/Keras", "RAG", "Computer Vision", "NLP"],
    colorClass: "from-blue-500 to-cyan-400"
  },
  {
    title: "Mobile & Game Dev",
    icon: Server,
    skills: ["Flutter", "Android Java", "Pygame","Mobile UI/UX"],
    colorClass: "from-rose-500 to-pink-400"
  },
  {
    title: "Cloud & DevOps",
    icon: Database,
    skills: ["Google Cloud", "Azure", "Docker", "Git", ],
    colorClass: "from-amber-500 to-yellow-400"
  },
  {
    title: "Cybersecurity",
    icon: Terminal,
    skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "Security Tools",],
    colorClass: "from-purple-500 to-fuchsia-400"
  }
];

export const Skills = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center p-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15)_0%,_rgba(0,0,0,0.9)_70%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [0, 2, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6">
            Skills & Expertise
          </h2>
          <motion.div 
            className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
            animate={{ 
              width: ["0%", "100%"],
              opacity: [0.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03, translateY: -5 }}
              className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg 
                border-2 border-gray-800/50 rounded-xl p-8 shadow-xl
                hover:border-gray-700/50 transition-all duration-500
                hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className={`bg-gradient-to-br ${category.colorClass} p-3 rounded-lg`}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.1) }}
                    whileHover={{ scale: 1.05, translateY: -2 }}
                    className={`bg-gradient-to-br ${category.colorClass} bg-opacity-10 
                      rounded-lg p-4 text-sm font-medium text-white text-center
                      hover:bg-opacity-20 transition-all duration-300 shadow-lg
                      border border-white/5 hover:border-white/20
                      backdrop-blur-sm`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};