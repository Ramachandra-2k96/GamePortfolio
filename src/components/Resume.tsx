import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Code2, Brain } from 'lucide-react';
import resumePDF from '../assets/resume.pdf';
const experiences = [
  {
    title: "Intern",
    company: "SangamOne Connected Services Pvt. Ltd.",
    duration: "Nov 2023 - Apr 2024",
    description: [
      "Enhanced Java and Python skills through hands-on project development",
      "Contributed to solving real-world problems, improving coding and problem-solving abilities",
      "Successfully completed and showcased projects on a personal portfolio website"
    ],
    icon: Code2,
    color: "purple"
  },
  {
    title: "Intern",
    company: "Threat Prism",
    duration: "Oct 2022 - Dec 2022", 
    description: [
      "Conducted vulnerability assessments and proposed comprehensive remediation strategies",
      "Developed expertise in ethical hacking tools such as Metasploit",
      "Gained practical experience in identifying and mitigating security vulnerabilities"
    ],
    icon: Brain,
    color: "pink"
  }
];

const education = [
  {
    degree: "BE in AI & DS",
    institution: "SMVITM Bantakal",
    duration: "2021 - Present",
    description: "Specializing in Artificial Intelligence and Data Science",
    icon: GraduationCap,
    color: "cyan"
  }
];

export const Resume = () => {
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
            Resume
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full"
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="text-pink-500" />
              Experience
            </h3>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-black/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 hover:border-pink-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <exp.icon className={`text-${exp.color}-500 w-6 h-6`} />
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <p className="text-pink-400">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-2">{exp.duration}</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="text-purple-500" />
              Education
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <edu.icon className={`text-${edu.color}-500 w-6 h-6`} />
                  <div>
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-purple-400">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.duration}</p>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href={resumePDF}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 
              rounded-full text-white font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-shadow"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}; 