'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export default function WaveBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Генерируем частицы
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.1
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Основной градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0d] via-[#111113] to-[#141416]" />
      
      {/* Анимированные волны */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, #feda6a 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, #feda6a 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, #feda6a 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Частицы */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-[#feda6a] rounded-full"
          initial={{ x: `${particle.x}%`, y: `${particle.y}%` }}
          animate={{
            x: [`${particle.x}%`, `${particle.x + 10}%`, `${particle.x}%`],
            y: [`${particle.y}%`, `${particle.y + 10}%`, `${particle.y}%`],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
          }}
          transition={{
            duration: particle.speed * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Дополнительный градиент для глубины */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-transparent to-transparent opacity-50" />
    </div>
  );
} 