'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import SectionWrapper from "./SectionWrapper";

const services = [
  {
    id: 1,
    title: 'Веб-разработка',
    description: 'Создаем современные веб-приложения с использованием передовых технологий',
    features: ['React/Next.js', 'Node.js/Express', 'MongoDB/PostgreSQL']
  },
  {
    id: 2,
    title: 'UI/UX Дизайн',
    description: 'Разрабатываем интуитивно понятные и привлекательные интерфейсы',
    features: ['Figma/Sketch', 'Прототипирование', 'Анимации']
  },
  {
    id: 3,
    title: 'Мобильная разработка',
    description: 'Создаем нативные и кроссплатформенные мобильные приложения',
    features: ['React Native', 'iOS/Android', 'PWA']
  },
  {
    id: 4,
    title: 'DevOps',
    description: 'Настраиваем и оптимизируем инфраструктуру проектов',
    features: ['CI/CD', 'Docker/K8s', 'AWS/GCP']
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative overflow-hidden p-6 md:p-12 h-full border border-[#393f4d]/5 transition-all duration-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            x: isHovered ? 0 : -20
          }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-1 bg-[#feda6a]"
        />

        <div className="relative z-10">
          <motion.div 
            className="text-xl md:text-2xl font-stolzl text-[#d4d4dc]/20 mb-4"
            animate={{ 
              x: isHovered ? 20 : 0,
              opacity: isHovered ? 0.4 : 0.2
            }}
            transition={{ duration: 0.3 }}
          >
            0{index + 1}
          </motion.div>

          <motion.h3 
            className="text-3xl md:text-5xl font-stolzl text-[#d4d4dc] mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            {service.title}
          </motion.h3>

          <motion.p 
            className="text-[#d4d4dc]/60 font-stolzl mb-8 md:mb-12 text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {service.description}
          </motion.p>

          <div className="space-y-3 md:space-y-4">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    delay: index * 0.2 + 0.6 + i * 0.1
                  }
                }}
                className="flex items-center space-x-2 md:space-x-3 group"
              >
                <div className="w-[1px] h-3 md:h-4 bg-[#feda6a]/20 group-hover:bg-[#feda6a] transition-colors duration-300" />
                <span className="text-sm md:text-base text-[#d4d4dc]/60 font-stolzl group-hover:text-[#feda6a] transition-colors duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <SectionWrapper className="relative w-full overflow-x-hidden">
      <AnimatedBackground variant="services" />
      <div className="w-full md:w-[90%] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-start mb-20">
          <span className="text-[#d4d4dc]/60 uppercase tracking-[0.3em] text-xs font-stolzl mb-6">
            Наши услуги
          </span>
          <h2 className="text-7xl font-stolzl text-[#d4d4dc] mb-6">
            Что мы предлагаем
          </h2>
          <div className="w-[120px] h-[1px] bg-[#feda6a]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 