import React, { useEffect, useRef } from 'react';
import mainAudio from '../assets/main.mp3';

interface BackgroundAudioProps {
  isPlaying: boolean;
}

export const BackgroundAudio: React.FC<BackgroundAudioProps> = ({ isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.17;
      
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log("Audio autoplay failed:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      src={mainAudio}
      loop
      preload="auto"
    />
  );
}; 