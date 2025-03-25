'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState, useMemo, useRef } from 'react';

export default function HeroBackground() {
  const [isClient, setIsClient] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Создаем refs для хранения значений
  const particleRefs = useRef<Array<{
    x: number;
    y: number;
    randomOffset: number;
    duration: number;
    delay: number;
  }>>([]);

  const lineRefs = useRef<Array<{
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    angle: number;
    length: number;
    duration: number;
  }>>([]);

  const hexRefs = useRef<Array<{
    left: number;
    top: number;
    rotation: number;
    code: string;
  }>>([]);

  // Инициализируем значения один раз при монтировании
  useEffect(() => {
    particleRefs.current = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      randomOffset: Math.random() * 50 - 25,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 2
    }));

    lineRefs.current = Array.from({ length: 12 }, () => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const endX = Math.random() * 100;
      const endY = Math.random() * 100;
      const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
      const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)) * 10;
      const duration = 10 + Math.random() * 10;

      return {
        startX,
        startY,
        endX,
        endY,
        angle,
        length,
        duration
      };
    });

    hexRefs.current = Array.from({ length: 100 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      rotation: Math.random() * 360,
      code: Math.random().toString(16).slice(2, 8)
    }));
  }, []);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Основной градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0d] via-[#111113] to-[#141416]" />
      
      {/* Цифровая сетка */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4f46e5 1px, transparent 1px),
            linear-gradient(to bottom, #4f46e5 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
        }}
      />

      {/* Шестнадцатеричный код */}
      <div className="absolute inset-0 opacity-5 font-mono text-[8px] text-[#4f46e5] select-none">
        {hexRefs.current.map((hex, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${hex.left}%`,
              top: `${hex.top}%`,
              transform: `rotate(${hex.rotation}deg)`
            }}
          >
            {hex.code}
          </div>
        ))}
      </div>

      {/* Анимированные линии данных */}
      <div className="absolute inset-0">
        {lineRefs.current.map((line, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#4f46e5]/30 to-transparent"
            style={{
              width: `${line.length}px`,
              left: `${line.startX}%`,
              top: `${line.startY}%`,
              transform: `rotate(${line.angle}deg)`
            }}
            animate={isClient ? {
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            } : {}}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Интерактивные частицы */}
      <div className="absolute inset-0">
        {particleRefs.current.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-[#4f46e5] rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`
            }}
            animate={isClient ? {
              y: [0, -100, 0],
              x: [0, particle.randomOffset, 0]
            } : {}}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Интерактивный эффект притяжения */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full bg-[#4f46e5]/5 blur-3xl"
        style={{
          x: springX,
          y: springY,
          translateX: -100,
          translateY: -100
        }}
      />

      {/* Дополнительный слой затемнения */}
      <div className="absolute inset-0 bg-[#111113]/3" />
    </div>
  );
} 