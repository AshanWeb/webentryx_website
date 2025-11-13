// components/reusable/HeroWithBubbles.tsx
"use client";

import React, { useEffect, useRef } from 'react';

interface Bubble {
  radius: number;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface HeroWithBubblesProps {
  minSize?: number;
  maxSize?: number;
  bubbleCount?: number;
  opacity?: number;
  blendMode?: 'screen' | 'overlay' | 'lighten' | 'normal';
  // Speed controls
  minSpeedX?: number;
  maxSpeedX?: number;  
  minSpeedY?: number;
  maxSpeedY?: number;
  movementVariation?: number;
}

const HeroWithBubbles: React.FC<HeroWithBubblesProps> = ({
  minSize = 2,
  maxSize = 4,
  bubbleCount = 10,
  opacity = 0.7,
  blendMode = 'lighten',
  // Speed defaults - SLOW
  minSpeedX = -0.15,
  maxSpeedX = 0.15,  
  minSpeedY = -0.6,
  maxSpeedY = -0.3,
  movementVariation = 0.01,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match parent container
    const resizeCanvas = (): void => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create bubbles array
    const bubbles: Bubble[] = [];
    
    // Initialize bubbles
    const initializeBubbles = () => {
      for (let i = 0; i < bubbleCount; i++) {
        bubbles.push({
          radius: Math.random() * (maxSize - minSize) + minSize,
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 100,
          speedX: Math.random() * (maxSpeedX - minSpeedX) + minSpeedX,
          speedY: Math.random() * (maxSpeedY - minSpeedY) + minSpeedY,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };
    
    // Reset a bubble
    const resetBubble = (bubble: Bubble) => {
      bubble.radius = Math.random() * (maxSize - minSize) + minSize;
      bubble.x = Math.random() * canvas.width;
      bubble.y = canvas.height + bubble.radius;
      bubble.speedX = Math.random() * (maxSpeedX - minSpeedX) + minSpeedX;
      bubble.speedY = Math.random() * (maxSpeedY - minSpeedY) + minSpeedY;
      bubble.opacity = Math.random() * 0.3 + 0.1;
    };
    
    // Update bubble position
    const updateBubble = (bubble: Bubble) => {
      bubble.x += bubble.speedX;
      bubble.y += bubble.speedY;
      
      // Add very subtle random movement variation
      bubble.speedX += (Math.random() - 0.5) * movementVariation;
      bubble.speedY += (Math.random() - 0.5) * movementVariation;
      
      // Constrain speed to keep movements very slow
      bubble.speedX = Math.max(minSpeedX * 1.5, Math.min(maxSpeedX * 1.5, bubble.speedX));
      bubble.speedY = Math.max(minSpeedY * 1.5, Math.min(maxSpeedY * 1.5, bubble.speedY));
      
      // Reset if off screen
      if (bubble.y < -bubble.radius || 
          bubble.x < -bubble.radius || 
          bubble.x > canvas.width + bubble.radius) {
        resetBubble(bubble);
      }
    };
    
    // Draw a bubble - SIMPLE WHITE CIRCLE
    const drawBubble = (bubble: Bubble) => {
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity})`;
      ctx.fill();
    };
    
    initializeBubbles();
    
    // Animation loop
    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bubbles.forEach(bubble => {
        updateBubble(bubble);
        drawBubble(bubble);
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [minSize, maxSize, bubbleCount, minSpeedX, maxSpeedX, minSpeedY, maxSpeedY, movementVariation]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ 
        mixBlendMode: blendMode,
        opacity: opacity
      }}
    />
  );
};

export default HeroWithBubbles;