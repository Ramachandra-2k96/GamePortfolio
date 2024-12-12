import React, { useEffect, useState, useRef } from 'react';
import { PowerButton } from './PowerButton';
import { Taglines } from './Taglines';
import '../styles/animations.css';
import glitchSound from '../assets/glitch-sound.mp3';

export const CinematicEntrance = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);
  const [exit, setExit] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [showPermissionDialog, setShowPermissionDialog] = useState(true);
  const [audioPermission, setAudioPermission] = useState<boolean | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle user's permission choice
  const handlePermissionChoice = (allowed: boolean) => {
    setAudioPermission(allowed);
    setShowPermissionDialog(false);
  };

  // Initialize audio once when component mounts
  useEffect(() => {
    if (audioPermission === null) return; // Wait for user choice

    const audio = new Audio(glitchSound);
    audio.volume = 0.9;
    audio.preload = 'auto';
    
    const handleCanPlay = () => {
      console.log('Audio can play now');
      setAudioLoaded(true);
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audioRef.current = audio;
    audio.load();

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.pause();
      audioRef.current = null;
    };
  }, [audioPermission]);

  // Handle phases separately from audio initialization
  useEffect(() => {
    if (audioPermission === null) return; // Wait for user choice
    if (!audioLoaded && audioPermission) return; // Only wait for audio if permission granted

    const playGlitchSound = async () => {
      const audio = audioRef.current;
      if (!audio || !audioPermission) return;

      try {
        audio.currentTime = 0;
        await audio.play();
        console.log('Audio played successfully');
      } catch (err) {
        console.error('Audio play failed:', err);
      }
    };

    const phases = [
      { delay: 500, action: () => setPhase(1) },
      { 
        delay: 2000, 
        action: () => {
          setPhase(2);
          if (audioPermission) {
            playGlitchSound();
          }
        }
      },
      { delay: 3500, action: () => setPhase(3) },
      { delay: 4500, action: () => setPhase(4) },
      { delay: 6500, action: () => setExit(true)},
      { delay: 8000, action: onComplete }
    ];

    const timeouts = phases.map(({ delay, action }) => 
      setTimeout(action, delay)
    );

    // Spark effect
    const createSpark = () => {
      const container = document.querySelector('.spark-container');
      if (!container) return;

      const spark = document.createElement('div');
      spark.className = 'spark';
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.top = `${Math.random() * 100}%`;
      container.appendChild(spark);

      spark.addEventListener('animationend', () => spark.remove());
    };

    const sparkInterval = setInterval(createSpark, 200);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(sparkInterval);
    };
  }, [onComplete, audioLoaded, audioPermission]);

  if (showPermissionDialog) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div className="bg-gray-800 p-6 rounded-lg max-w-sm mx-4 text-center">
          <h2 className="text-white text-xl mb-4">Would you like to enable sound effects?</h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handlePermissionChoice(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              Yes
            </button>
            <button
              onClick={() => handlePermissionChoice(false)}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 bg-black transition-all duration-1500 
      ${phase > 0 ? 'opacity-100' : 'opacity-0'}
      ${exit ? 'exit-animation' : ''}`}>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(157,0,255,0.15)_0%,_rgba(0,0,0,0.9)_70%)]" />
      <div className="spark-container absolute inset-0 overflow-hidden" />
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Power Button */}
        <div className="mb-12">
          <PowerButton active={phase >= 1} />
        </div>

        {/* Main Title */}
        <div className={`overflow-hidden transition-all duration-1000
          ${phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1
            data-text="CODE QUANTUM"
            className={`text-7xl md:text-9xl text-white ${phase === 2 ? 'glitch-text' : ''}`}
          >
            CODE QUANTUM
          </h1>
        </div>

        {/* Taglines */}
        <div className="mt-8">
          <Taglines phase={phase} />
        </div>
      </div>
    </div>
  );
};