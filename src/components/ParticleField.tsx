import React, { useEffect, useRef } from 'react';

export const ParticleField = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'quantum-particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${3 + Math.random() * 4}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(particle);

      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    };

    const interval = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        createParticle();
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden" />;
};