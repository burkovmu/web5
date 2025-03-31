'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import AnimatedBackground from './AnimatedBackground';
import { useLocale } from '../app/context/LocaleContext';

export default function WorkflowSection() {
  const { translations } = useLocale();
  const { workflowSection } = translations;

  return (
    <SectionWrapper className="relative w-full overflow-x-hidden">
      <AnimatedBackground variant="workflow" />
      <div className="w-full md:w-[90%] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-start mb-20">
          <span className="text-[#feda6a] uppercase tracking-[0.3em] text-xs font-stolzl mb-6">
            {workflowSection.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {workflowSection.heading}
          </h2>
          <p className="text-[#d4d4dc] text-lg md:text-xl max-w-3xl">
            {workflowSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workflowSection.steps.map((step, index) => (
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
                        {getStepIcon(index)}
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

// Вспомогательная функция для получения иконок
function getStepIcon(index: number) {
  const icons = [
    <svg key="icon1" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>,
    <svg key="icon2" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>,
    <svg key="icon3" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
    <svg key="icon4" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg key="icon5" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ];
  
  return icons[index % icons.length];
} 