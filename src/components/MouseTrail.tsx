import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  dx: number;
  dy: number;
  age: number;
  size: number;
  color: string;
  rotation: number;
}

export const MouseTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>();
  const isMobileDevice = useRef(false);

  useEffect(() => {
    // Check if device is mobile/tablet
    isMobileDevice.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.matchMedia("(max-width: 768px)").matches;

    // If mobile device, don't initialize the effect
    if (isMobileDevice.current) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = [
      'rgba(236, 72, 153, var)', // pink-500
      'rgba(167, 139, 250, var)', // violet-400
      'rgba(244, 114, 182, var)', // pink-400
      'rgba(139, 92, 246, var)', // violet-500
      'rgba(219, 39, 119, var)', // pink-600
    ];

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const addPoint = (x: number, y: number) => {
      const lastPoint = points.current[points.current.length - 1];
      
      if (lastPoint) {
        const dx = x - lastPoint.x;
        const dy = y - lastPoint.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 3) return;
      }

      // Add multiple points with different properties
      for (let i = 0; i < 2; i++) { // Reduced number of particles
        const size = Math.random() * 3 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        points.current.push({
          x: x + (Math.random() - 0.5) * 15,
          y: y + (Math.random() - 0.5) * 15,
          dx: (Math.random() - 0.5) * 3,
          dy: (Math.random() - 0.5) * 3,
          age: 0,
          size,
          color,
          rotation: Math.random() * Math.PI * 2,
        });
      }
    };

    const updatePoints = () => {
      for (let i = 0; i < points.current.length; i++) {
        const point = points.current[i];
        point.age += 1.5; // Faster aging

        // More dynamic movement
        point.dx += (Math.random() - 0.5) * 0.5;
        point.dy += (Math.random() - 0.5) * 0.5;
        point.rotation += 0.05;

        // Apply velocity with damping
        point.x += point.dx * 0.3;
        point.y += point.dy * 0.3;
        point.dx *= 0.92;
        point.dy *= 0.92;
      }

      points.current = points.current.filter(point => point.age < 35); // Shorter lifespan
    };

    const drawPoints = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines with improved style
      points.current.forEach((point, i) => {
        points.current.slice(i + 1).forEach(otherPoint => {
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 40) { // Reduced connection distance
            const opacity = (1 - distance / 40) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(236, 72, 153, ${opacity})`;
            ctx.lineWidth = (1 - distance / 40);
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });
      });

      // Draw points with enhanced effects
      points.current.forEach(point => {
        const opacity = Math.max(0, 1 - point.age / 35);
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.size * 3
        );
        gradient.addColorStop(0, point.color.replace('var', `${opacity * 0.5}`));
        gradient.addColorStop(1, point.color.replace('var', '0'));
        
        // Save context for rotation
        ctx.save();
        ctx.translate(point.x, point.y);
        ctx.rotate(point.rotation);

        // Draw particle shape
        ctx.beginPath();
        ctx.fillStyle = gradient;
        // Draw a star shape
        for (let i = 0; i < 4; i++) {
          const angle = (i * Math.PI) / 2;
          const x = Math.cos(angle) * point.size * 2;
          const y = Math.sin(angle) * point.size * 2;
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();

        // Inner glow
        ctx.beginPath();
        ctx.fillStyle = point.color.replace('var', `${opacity}`);
        ctx.arc(0, 0, point.size * 0.8, 0, Math.PI * 2);
        ctx.fill();

        // Bloom effect
        ctx.shadowColor = point.color.replace('var', '1');
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.beginPath();
        ctx.arc(0, 0, point.size * 0.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });
    };

    const animate = () => {
      updatePoints();
      drawPoints();
      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mousePos.current = { x, y };
      addPoint(x, y);
    };

    // Initialize only mouse events, remove touch events
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Don't render canvas on mobile devices
  if (isMobileDevice.current) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[90]"
      style={{ 
        mixBlendMode: 'screen',
      }}
    />
  );
}; 