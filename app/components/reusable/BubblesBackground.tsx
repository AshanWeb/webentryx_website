"use client";

import { useEffect, useState } from "react";

type Bubble = {
  left: string;
  size: string;
  animationDelay: string;
  animationDuration: string;
};

export default function BubblesBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 10 }).map(() => {
      const sizeValue = Math.random() * 6 + 4; // Between 4px and 10px
      return {
        left: `${Math.random() * 100}%`,
        size: `${sizeValue}px`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${5 + Math.random() * 150}s`,
      };
    });
    setBubbles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDelay: bubble.animationDelay,
            animationDuration: bubble.animationDuration,
          }}
        />
      ))}
    </div>
  );
}
