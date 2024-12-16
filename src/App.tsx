import React, { useState, useEffect } from 'react';
import { CinematicEntrance } from './components/CinematicEntrance';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { StoryGuide } from './components/StoryGuide';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';
import { BackgroundAudio } from './components/BackgroundAudio';
import { MouseTrail } from './components/MouseTrail';

function App() {
  const [showMain, setShowMain] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [previousSection, setPreviousSection] = useState('');
  const [showStoryGuide, setShowStoryGuide] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleEntranceComplete = () => {
    setShowMain(true);
    setShowStoryGuide(true);
    setIsAudioPlaying(true); // Start playing audio after entrance
  };

  const toggleAudio = () => {
    setIsAudioPlaying(prev => !prev);
  };

  // Scroll detection for other sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            if (activeSection !== section) {
              setPreviousSection(activeSection);
              setActiveSection(section);
              setShowStoryGuide(true);
            }
            break;
          }
        }
      }
    };

    if (showMain) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [activeSection, showMain]);

  return (
    <>
      <MouseTrail />
      <BackgroundAudio isPlaying={isAudioPlaying} />
      
      {/* Story Guide - Moved outside main content flow */}
      {showMain && showStoryGuide && (
        <div className="fixed inset-0 pointer-events-none z-[100]">
          <StoryGuide activeSection={activeSection} key={activeSection} />
        </div>
      )}

      <div className="relative">
        {!showMain && <CinematicEntrance onComplete={handleEntranceComplete} />}
        
        <div className={`transition-all duration-1500 ease-in-out transform
          ${showMain ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Navbar />
          
          <main className="relative">
            <section id="hero" className="relative min-h-screen">
              <Hero />
            </section>

            <section id="about" className="relative min-h-screen">
              <AboutMe />
            </section>

            <section id="skills" className="relative min-h-screen">
              <Skills />
            </section>

            <section id="projects" className="relative min-h-screen">
              <Projects />
            </section>

            <section id="resume" className="relative min-h-screen">
              <Resume />
            </section>

            <section id="contact" className="relative min-h-screen">
              <Contact />
            </section>
          </main>

          <Footer />
        </div>
      </div>

      <button 
        onClick={toggleAudio}
        className="fixed bottom-4 right-4 z-[1000] bg-black/80 text-white p-2 rounded-full"
      >
        {isAudioPlaying ? '🔊' : '🔈'}
      </button>
    </>
  );
}

export default App;