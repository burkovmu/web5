'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import AnimatedBackground from './AnimatedBackground';
import { useState } from 'react';

const workflowSteps = [
  {
    number: '01',
    title: 'Анализ и планирование',
    description: 'Детально изучаем ваш бизнес, цели и потребности. Разрабатываем стратегию и план реализации проекта.'
  },
  {
    number: '02',
    title: 'Дизайн и прототипирование',
    description: 'Создаем уникальный дизайн и интерактивные прототипы, учитывая современные тенденции и ваши пожелания.'
  },
  {
    number: '03',
    title: 'Разработка',
    description: 'Воплощаем проект в жизнь, используя передовые технологии и следуя лучшим практикам программирования.'
  },
  {
    number: '04',
    title: 'Тестирование и запуск',
    description: 'Проводим тщательное тестирование, оптимизируем производительность и запускаем проект.'
  }
];

const WorkflowCard = ({ step, index }: { step: typeof workflowSteps[0], index: number }) => {
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
            {step.title}
          </motion.h3>

          <motion.p 
            className="text-[#d4d4dc]/60 font-stolzl mb-8 md:mb-12 text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {step.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default function WorkflowSection() {
  return (
    <SectionWrapper className="relative pb-48">
      <AnimatedBackground variant="workflow" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start mb-20">
          <span className="text-[#feda6a] uppercase tracking-[0.3em] text-xs font-stolzl mb-6">
            Процесс
          </span>
          <h2 className="text-7xl font-stolzl text-[#d4d4dc] mb-6">
            Как мы работаем
          </h2>
          <div className="w-[120px] h-[1px] bg-[#feda6a]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="relative group"
            >
              <div className="relative p-8 h-full">
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#feda6a] group-hover:h-full transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-[#feda6a] group-hover:h-full transition-all duration-300" />
                
                <div className="text-[#feda6a] text-5xl font-stolzl mb-6">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-stolzl text-[#d4d4dc] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#d4d4dc]/60">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 