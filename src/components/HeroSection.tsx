'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import AnimatedBackground from './AnimatedBackground';
import SectionWrapper from './SectionWrapper';
import { useLocale } from '../context/LocaleContext';

// Предопределенные значения для анимированных точек
const staticDots = [
  { x: 20, y: 80, opacity: 0.5, duration: 15 },
  { x: 40, y: 30, opacity: 0.4, duration: 18 },
  { x: 60, y: 70, opacity: 0.6, duration: 20 },
  { x: 80, y: 40, opacity: 0.7, duration: 22 },
  { x: 30, y: 10, opacity: 0.5, duration: 25 },
  { x: 70, y: 90, opacity: 0.6, duration: 19 },
  { x: 90, y: 50, opacity: 0.7, duration: 17 },
  { x: 50, y: 20, opacity: 0.3, duration: 21 },
  { x: 45, y: 85, opacity: 0.4, duration: 24 },
  { x: 35, y: 60, opacity: 0.5, duration: 16 }
];

export default function HeroSection() {
  const { translations } = useLocale();
  const { heroSection } = translations;
  
  // Используем варианты слов из переводов
  const headingVariants = heroSection.variants;
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentVariant, setCurrentVariant] = useState(0);
  const [typeText, setTypeText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80); // Начальная скорость печати (меньше = быстрее)
  const [isMobile, setIsMobile] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLSpanElement>(null);
  
  // Определение типа устройства
  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      setIsMobile(isMobileDevice || window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Эффект печатающегося текста (автоматический)
  useEffect(() => {
    const currentWord = headingVariants[currentVariant];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypeText(currentWord.substring(0, typeText.length + 1));
        
        // Текст полностью напечатан
        if (typeText.length === currentWord.length) {
          // Пауза перед удалением
          setTypingSpeed(isMobile ? 1000 : 700);
          setIsDeleting(true);
        } else {
          // Скорость печати (замедляем для мобильных)
          setTypingSpeed(isMobile ? 80 + Math.random() * 40 : 30 + Math.random() * 40);
        }
      } else {
        setTypeText(currentWord.substring(0, typeText.length - 1));
        
        // Текст полностью удален
        if (typeText.length === 0) {
          setIsDeleting(false);
          setCurrentVariant((currentVariant + 1) % headingVariants.length);
          // Короткая пауза перед печатью нового слова
          setTypingSpeed(isMobile ? 300 : 150);
        } else {
          // Удаление (замедляем для мобильных)
          setTypingSpeed(isMobile ? 30 + Math.random() * 20 : 5 + Math.random() * 10);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [typeText, isDeleting, currentVariant, isMobile, headingVariants]);
  
  // Обработка движений мыши для интерактивного эффекта
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <SectionWrapper className="relative w-full overflow-hidden min-h-screen">
      <AnimatedBackground variant="hero" />
      
      {/* Сетка с анимированными точками */}
      <div className="absolute inset-0 z-0">
        {staticDots.map((dot, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#d4d4dc]/30"
            initial={{ 
              x: `${dot.x}%`, 
              y: `${dot.y}%`, 
              opacity: dot.opacity
            }}
            animate={{ 
              x: `${(dot.x + 20) % 100}%`, 
              y: `${(dot.y + 15) % 100}%`
            }}
            transition={{ 
              duration: dot.duration, 
              repeat: Infinity, 
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center" ref={heroRef}>
        <div className="w-full max-w-5xl mx-auto text-center px-4">
          {/* Основной заголовок с анимацией появления букв */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
            }}
          >
            <motion.h1 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 100 }}
              className="whitespace-pre-line text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#d4d4dc] to-[#6a6a74] leading-tight mb-6"
            >
              {heroSection.title1} <span className="relative text-[#feda6a]" ref={typingRef}>
                {typeText}
                <span className="absolute right-[-8px] h-full w-[4px] bg-[#feda6a] animate-blink"></span>
              </span>,{'\n'}{heroSection.title2}
            </motion.h1>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1.8, ease: "anticipate" }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#feda6a] to-transparent max-w-3xl mx-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Нижняя прокрутка с анимацией */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })}
        >
          <span className="text-[#d4d4dc]/70 text-sm mb-2">{heroSection.scrollDown}</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#feda6a]"
          >
            <polyline points="7 13 12 18 17 13"></polyline>
            <polyline points="7 6 12 11 17 6"></polyline>
          </motion.svg>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
} 