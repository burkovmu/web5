'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import SectionWrapper from "./SectionWrapper";

const services = [
  {
    title: "Веб-разработка",
    description: "Создание современных веб-приложений с использованием передовых технологий",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Мобильная разработка",
    description: "Разработка нативных и кроссплатформенных мобильных приложений",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Блокчейн",
    description: "Разработка смарт-контрактов и децентрализованных приложений",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function ServicesSection() {
  return (
    <SectionWrapper className="relative w-full overflow-x-hidden">
      <AnimatedBackground variant="services" />
      <div className="w-full md:w-[90%] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-start mb-20">
          <span className="text-[#d4d4dc]/60 uppercase tracking-[0.3em] text-xs font-stolzl mb-6">
            Наши услуги
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Комплексные решения для вашего бизнеса
          </h2>
          <p className="text-[#d4d4dc] text-lg md:text-xl max-w-3xl">
            Мы предлагаем широкий спектр услуг по разработке программного обеспечения, 
            помогая бизнесу расти и развиваться в цифровую эпоху.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative p-8 border border-[#393f4d] hover:border-[#feda6a] transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-full bg-[#feda6a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#feda6a]/10 flex items-center justify-center mb-6 group-hover:bg-[#feda6a]/20 transition-colors duration-300">
                    <div className="text-[#feda6a] group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#feda6a] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#d4d4dc] leading-relaxed">
                    {service.description}
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