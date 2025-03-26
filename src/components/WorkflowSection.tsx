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

export default function WorkflowSection() {
  return (
    <SectionWrapper className="relative w-full overflow-x-hidden">
      <AnimatedBackground variant="workflow" />
      <div className="w-[80%] mx-auto px-4 md:px-8 relative z-10">
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