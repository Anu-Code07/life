"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.6 + 0.1,
          speed: Math.random() * 0.02 + 0.005,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.opacity += Math.sin(Date.now() * star.speed) * 0.01;
        star.opacity = Math.max(0.1, Math.min(0.7, star.opacity));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 165, 116, ${star.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    initStars();
    animate();

    window.addEventListener("resize", () => {
      resize();
      initStars();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
