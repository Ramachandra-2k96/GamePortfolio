import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Globe, Server, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Globe,
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 85 },
      { name: "C++", level: 80 },
      { name: "C#", level: 75 },
      { name: "JavaScript", level: 90 }
    ],
    colorClass: "from-pink-500 to-pink-400"
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "Django", level: 90 },
      { name: "Full Stack", level: 85 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "HTML/CSS", level: 90 }
    ],
    colorClass: "from-purple-500 to-purple-400"
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Neural Networks", level: 85 },
      { name: "TensorFlow/Keras", level: 85 },
      { name: "RAG", level: 80 },
      { name: "Computer Vision", level: 85 }
    ],
    colorClass: "from-cyan-500 to-cyan-400"
  },
  {
    title: "Mobile & Game Dev",
    icon: Server,
    skills: [
      { name: "Flutter", level: 85 },
      { name: "Android Java", level: 80 },
      { name: "Pygame", level: 85 },
      { name: "Unity/C#", level: 75 },
      { name: "Mobile UI/UX", level: 80 }
    ],
    colorClass: "from-pink-500 to-pink-400"
  },
  {
    title: "Cloud & DevOps",
    icon: Database,
    skills: [
      { name: "Google Cloud", level: 75 },
      { name: "Azure", level: 70 },
      { name: "Docker", level: 80 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 75 }
    ],
    colorClass: "from-purple-500 to-purple-400"
  },
  {
    title: "Cybersecurity",
    icon: Terminal,
    skills: [
      { name: "Ethical Hacking", level: 85 },
      { name: "Malware Analysis", level: 80 },
      { name: "Network Security", level: 75 },
      { name: "Penetration Testing", level: 80 },
      { name: "Security Tools", level: 85 }
    ],
    colorClass: "from-cyan-500 to-cyan-400"
  }
];

export const Skills = () => {
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
            Skills & Expertise
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full"
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 
                hover:border-pink-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`text-${category.colorClass} w-6 h-6`} />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-pink-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) }}
                        className={`h-full bg-gradient-to-r ${category.colorClass} rounded-full`}
                      />
                    </div>
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