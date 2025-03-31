'use client';

import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import SectionWrapper from './SectionWrapper';
import { useLocale } from '../app/context/LocaleContext';

export default function AboutSection() {
  const { translations } = useLocale();
  const { aboutSection } = translations;

  // Используем переводы из контекста
  const stats = aboutSection.stats;
  const achievements = aboutSection.achievements;

  // Функция для плавной прокрутки к разделу контактов
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <SectionWrapper className="relative w-full overflow-x-hidden">
      <AnimatedBackground variant="about" />
      <div className="w-full md:w-[90%] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-start mb-20">
          <span className="text-[#feda6a] uppercase tracking-[0.3em] text-xs font-stolzl mb-6">
            {aboutSection.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {aboutSection.heading}
          </h2>
          <p className="text-[#d4d4dc] text-lg md:text-xl max-w-3xl">
            {aboutSection.description1}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-[2px] h-full bg-[#feda6a]/20" />
              <div className="pl-8">
                <p className="text-xl leading-relaxed text-[#d4d4dc] mb-6">
                  {aboutSection.description2}
                </p>
                <p className="text-lg leading-relaxed text-[#d4d4dc]/80">
                  {aboutSection.description3}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <div className="text-4xl font-stolzl text-[#feda6a] mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-[#d4d4dc]/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 w-[1px] h-full bg-[#feda6a]/20" />
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="relative pl-8 group"
                >
                  <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] rounded-full bg-[#feda6a]/20 group-hover:bg-[#feda6a] transition-colors" />
                  <div className="text-[#feda6a] text-sm mb-2">{achievement.year}</div>
                  <div className="text-xl font-stolzl text-[#d4d4dc] mb-2">{achievement.title}</div>
                  <div className="text-[#d4d4dc]/60">{achievement.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="relative"
        >
          <div className="relative backdrop-blur-sm border border-[#feda6a]/10 rounded-lg group">
            {/* Декоративный фон */}
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <div className="absolute left-0 top-0 w-48 h-48 bg-[#feda6a]/5 rounded-full blur-3xl opacity-30" />
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#feda6a]/5 rounded-full blur-2xl opacity-30" />
            </div>

            {/* Основной контент */}
            <div className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-0 p-6 md:p-12">
              {/* Левая часть */}
              <div className="col-span-1 md:col-span-8 flex items-center">
                <div className="flex-1 md:pr-16 md:border-r border-[#feda6a]/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#feda6a]/10 flex items-center justify-center group-hover:bg-[#feda6a]/20 transition-colors duration-500">
                      <svg className="w-5 h-5 text-[#feda6a]" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[#feda6a] text-sm uppercase tracking-[0.2em] font-medium">
                      {aboutSection.nextProject}
                    </span>
                  </div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-3xl md:text-4xl text-[#d4d4dc] font-stolzl leading-tight mb-4"
                  >
                    {aboutSection.realizingIdeas}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="text-base md:text-lg text-[#d4d4dc]/70 max-w-xl leading-relaxed mb-8 md:mb-0"
                  >
                    {aboutSection.fromConcept}
                  </motion.p>
                </div>
              </div>

              {/* Правая часть */}
              <div className="col-span-1 md:col-span-4 flex items-center justify-center md:justify-end md:pl-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 }}
                  className="relative w-full md:w-auto"
                >
                  <button 
                    className="group/button relative inline-flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-[#feda6a] text-[#111113] font-medium rounded-lg overflow-hidden w-full md:w-auto"
                    onClick={scrollToContact}
                  >
                    {/* Текст и иконка */}
                    <span className="relative z-10 text-base font-medium whitespace-nowrap">
                      {aboutSection.startProject}
                    </span>
                    <svg 
                      className="w-5 h-5 relative z-10 transform group-hover/button:translate-x-1 transition-transform duration-300"
                      viewBox="0 0 24 24" 
                      fill="none" 
                    >
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    {/* Декоративные углы */}
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#111113]/20 rounded-tr-lg" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#111113]/20 rounded-bl-lg" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
} 