import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface StoryGuideProps {
  activeSection: string;
}

interface DialogueType {
  character: string;
  name: string;
  messages: string[];
  position: 'left' | 'right';
}

export const StoryGuide: React.FC<StoryGuideProps> = ({ activeSection }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [showDialog, setShowDialog] = useState(true);
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);

  const dialogues: Record<string, DialogueType> = {
    hero: {
      character: "🧙‍♂️",
      name: "Guide",
      messages: [
        "Welcome! I'm excited to introduce you to Ramachandra Udupa's digital realm!",
        "He's a talented BE student specializing in AI & DS at SMVITM Bantakal.",
        "With expertise in Full Stack Development, AI/ML, and Deep Learning, he's ready to turn ideas into reality.",
        "Shall we explore his journey together?"
      ],
      position: 'left'
    },
    about: {
      character: "👨‍💻",
      name: "Ramachandra",
      messages: [
        "Let me share my story with you...",
        "My journey in tech began with a passion for solving complex problems.",
        "At SMVITM Bantakal, I've been honing my skills in AI, DS, and Full Stack Development.",
        "Every project is an opportunity to learn and create something meaningful."
      ],
      position: 'right'
    },
    projects: {
      character: "⚡",
      name: "Tech Explorer",
      messages: [
        "Welcome to my project showcase!",
        "Each project here represents a unique challenge and solution.",
        "From AI-powered applications to full-stack platforms, these projects demonstrate my technical versatility.",
        "Feel free to explore the live demos and code repositories!"
      ],
      position: 'left'
    },
    resume: {
      character: "📄",
      name: "Career Guide",
      messages: [
        "Let me walk you through my professional journey!",
        "I've had the opportunity to work on exciting projects in both AI and Full Stack Development.",
        "My education in AI & DS at SMVITM has provided a strong foundation for my work.",
        "Feel free to download my resume for more details about my experience and skills!"
      ],
      position: 'right'
    },
    contact: {
      character: "📬",
      name: "Connection Guide",
      messages: [
        "Ready to connect? You're in the right place!",
        "Feel free to reach out through the contact form or social media.",
        "Whether it's a project idea, collaboration, or just to say hi.",
        "I'm always excited to connect with fellow tech enthusiasts!"
      ],
      position: 'left'
    },
    skills: {
      character: "🚀",
      name: "Tech Mentor",
      messages: [
        "Let me walk you through my technical arsenal!",
        "From Python and Java to cutting-edge AI technologies, I've developed a diverse skill set.",
        "I specialize in AI/ML development while maintaining strong full-stack capabilities.",
        "My journey also includes game development, cybersecurity, and cloud technologies."
      ],
      position: 'left'
    }
  };

  // Reset states when section changes
  useEffect(() => {
    setShowDialog(true);
    setCurrentMessage(0);
    setIsTyping(true);
    setDisplayedText('');
  }, [activeSection]);

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, []);

  // Speech synthesis function
  const speak = useCallback((text: string) => {
    if (speechSynthesis) {
      // Cancel any ongoing speech
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      // You can customize the voice if needed
      // const voices = speechSynthesis.getVoices();
      // utterance.voice = voices[0];

      speechSynthesis.speak(utterance);
    }
  }, [speechSynthesis]);

  // Modify the typing effect to speak the full message
  useEffect(() => {
    if (!dialogues[activeSection]) return;
    
    const currentText = dialogues[activeSection].messages[currentMessage];
    if (!currentText) return;
    
    let index = 0;
    setIsTyping(true);
    setDisplayedText('');

    // Speak the full message when starting to type
    speak(currentText);

    const typingInterval = setInterval(() => {
      if (index < currentText.length) {
        setDisplayedText(currentText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 30);

    return () => {
      clearInterval(typingInterval);
      // Cancel speech when component unmounts or text changes
      if (speechSynthesis) {
        speechSynthesis.cancel();
      }
    };
  }, [currentMessage, activeSection, speak]);

  // Modify handleClick to handle speech
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentDialog = dialogues[activeSection];
    if (!currentDialog) return;

    if (isTyping) {
      setDisplayedText(currentDialog.messages[currentMessage]);
      setIsTyping(false);
      // Speak the full message immediately when skipping typing
      speak(currentDialog.messages[currentMessage]);
      return;
    }

    if (currentMessage < currentDialog.messages.length - 1) {
      setCurrentMessage(prev => prev + 1);
      setIsTyping(true);
    } else {
      setShowDialog(false);
      // Cancel any ongoing speech when hiding dialog
      if (speechSynthesis) {
        speechSynthesis.cancel();
      }
    }
  };

  if (!dialogues[activeSection] || !showDialog) return null;

  const dialogue = dialogues[activeSection];
  const isLeft = dialogue.position === 'left';

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] pointer-events-none"
      >
        {/* Message Box Container */}
        <div className="relative h-full w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={`absolute bottom-4 md:bottom-10 w-[calc(100%-2rem)] md:w-auto ${
              isLeft 
                ? 'left-4 md:left-8 md:max-w-[60%]' 
                : 'right-4 md:right-8 md:max-w-[60%]'
            }`}
          >
            <div className="relative">
              {/* Character Icon */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  y: [0, -5, 0],
                }}
                transition={{
                  y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                className={`absolute -top-16 ${isLeft ? 'left-0' : 'right-0'}`}
              >
                <div className="text-4xl md:text-6xl filter drop-shadow-lg">
                  {dialogue.character}
                </div>
              </motion.div>

              {/* Message Box */}
              <motion.div 
                onClick={handleClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pointer-events-auto bg-black/95 border-2 border-pink-500/50 
                  rounded-lg p-4 md:p-6 shadow-lg backdrop-blur-sm cursor-pointer 
                  transition-all duration-200 hover:border-pink-500/75 
                  hover:shadow-pink-500/20 hover:shadow-lg"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-pink-500 font-bold mb-2 text-lg md:text-xl"
                >
                  {dialogue.name}
                </motion.div>

                <motion.div 
                  className="text-white text-sm md:text-lg min-h-[48px] md:min-h-[60px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {displayedText}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1"
                    >
                      ▊
                    </motion.span>
                  )}
                </motion.div>

                {!isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-pink-400 text-xs md:text-sm mt-2 md:mt-4 
                      flex items-center gap-1"
                  >
                    <span className="hidden md:inline">Click to continue</span>
                    <span className="md:hidden">Tap to continue</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}; 