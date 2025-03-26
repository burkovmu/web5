'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import AnimatedBackground from './AnimatedBackground';

const workflowSteps = [
  {
    number: "01",
    title: "Анализ и планирование",
    description: "Изучаем ваши требования, анализируем рынок и создаем детальный план разработки",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Дизайн и прототипирование",
    description: "Создаем уникальный дизайн и интерактивный прототип для вашего проекта",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Разработка",
    description: "Реализуем проект с использованием передовых технологий и лучших практик",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Тестирование и запуск",
    description: "Проводим тщательное тестирование и запускаем проект в эксплуатацию",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function WorkflowSection() {
  return (
    <SectionWrapper className="relative w-full overflow-x-hidden">
      <AnimatedBackground variant="workflow" />
      <div className="w-full md:w-[90%] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-start mb-20">
          <span className="text-[#feda6a] uppercase tracking-[0.3em] text-xs font-stolzl mb-6">
            Как мы работаем
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Процесс разработки
          </h2>
          <p className="text-[#d4d4dc] text-lg md:text-xl max-w-3xl">
            Мы следуем четкому процессу разработки, чтобы гарантировать качество и эффективность
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative p-8 border border-[#393f4d] hover:border-[#feda6a] transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-full bg-[#feda6a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#feda6a]/10 flex items-center justify-center group-hover:bg-[#feda6a]/20 transition-colors duration-300">
                      <div className="text-[#feda6a] group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <span className="text-[#feda6a] text-2xl font-bold">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#feda6a] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#d4d4dc] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 