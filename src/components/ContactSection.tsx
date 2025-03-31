'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import AnimatedBackground from './AnimatedBackground';
import { useLocale } from '../app/context/LocaleContext';

const ContactSection = () => {
  const { translations } = useLocale();
  const { contactSection } = translations;

  // Используем переводы из контекста
  const projectTypes = contactSection.form.projectTypes;
  const budgets = contactSection.form.budgets;

  return (
    <SectionWrapper className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="w-full relative z-10">
        <div className="flex flex-col min-h-screen">
          {/* Верхняя часть с заголовком */}
          <div className="w-full py-16">
            <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
                className="text-center"
            >
                <h2 className="text-4xl lg:text-5xl font-bold text-[#feda6a] mb-6">
                  {contactSection.heading}
              </h2>
                <p className="text-[#d4d4dc] text-lg max-w-2xl mx-auto">
                  {contactSection.description}
              </p>
            </motion.div>
            </div>
          </div>

          {/* Основной контент */}
          <div className="flex-1">
            <div className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Левая колонка с контактами */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-12 lg:col-span-1"
                >
                  <div className="bg-[#393f4d]/10 p-8 rounded-[2px] backdrop-blur-sm border border-[#feda6a]/10">
                    <h3 className="text-2xl font-bold text-[#feda6a] mb-6">{contactSection.contactInfo}</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#feda6a]/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#feda6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[#feda6a] text-sm uppercase tracking-wider mb-1">{contactSection.email}</div>
                          <a href="mailto:burkovmu@gmail.com" className="text-[#d4d4dc] text-lg hover:text-[#feda6a] transition-colors">
                            burkovmu@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#feda6a]/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#feda6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[#feda6a] text-sm uppercase tracking-wider mb-1">{contactSection.phone}</div>
                          <a href="tel:+79939073077" className="text-[#d4d4dc] text-lg hover:text-[#feda6a] transition-colors">
                            +7 (993) 907-30-77
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Правая колонка с формой */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
                  className="bg-[#393f4d]/10 p-8 rounded-[2px] backdrop-blur-sm border border-[#feda6a]/10 lg:col-span-2"
            >
                  <h3 className="text-2xl font-bold text-[#feda6a] mb-8">{contactSection.form.title}</h3>
                  <form className="space-y-8">
              {/* Основная информация */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                        <label className="block text-[#feda6a] text-sm uppercase tracking-wider">{contactSection.form.name}</label>
                  <input 
                    type="text" 
                          placeholder={contactSection.form.namePlaceholder} 
                          className="w-full p-3 bg-[#1d1e22]/50 text-[#d4d4dc] placeholder-[#d4d4dc]/30 border border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors rounded-[2px]"
                  />
                </div>
                <div className="space-y-2">
                        <label className="block text-[#feda6a] text-sm uppercase tracking-wider">{contactSection.form.company}</label>
                  <input 
                    type="text" 
                          placeholder={contactSection.form.companyPlaceholder} 
                          className="w-full p-3 bg-[#1d1e22]/50 text-[#d4d4dc] placeholder-[#d4d4dc]/30 border border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors rounded-[2px]"
                  />
                </div>
              </div>

              {/* Тип проекта */}
              <div className="space-y-3">
                      <label className="block text-[#feda6a] text-sm uppercase tracking-wider">{contactSection.form.projectType}</label>
                      {/* Мобильная версия (выпадающий список) */}
                      <div className="block md:hidden">
                        <select 
                          className="w-full p-3 bg-[#1d1e22]/50 text-[#d4d4dc] border border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors rounded-[2px]"
                          name="projectType"
                          defaultValue=""
                        >
                          <option value="" disabled>Выберите тип проекта</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      {/* Десктопная версия (радио-кнопки) */}
                      <div className="hidden md:grid md:grid-cols-3 gap-3">
                  {projectTypes.map((type) => (
                    <label 
                      key={type}
                      className="relative group cursor-pointer"
                    >
                      <input 
                        type="radio" 
                        className="peer hidden" 
                        name="projectType"
                      />
                            <div className="p-3 text-center bg-[#1d1e22]/50 border border-[#393f4d] text-[#d4d4dc] peer-checked:border-[#feda6a] peer-checked:text-[#feda6a] hover:border-[#feda6a] transition-colors rounded-[2px]">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Бюджет */}
              <div className="space-y-3">
                      <label className="block text-[#feda6a] text-sm uppercase tracking-wider">{contactSection.form.budget}</label>
                      {/* Мобильная версия (выпадающий список) */}
                      <div className="block md:hidden">
                        <select 
                          className="w-full p-3 bg-[#1d1e22]/50 text-[#d4d4dc] border border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors rounded-[2px]"
                          name="budget"
                          defaultValue=""
                        >
                          <option value="" disabled>Выберите бюджет</option>
                          {budgets.map((budget) => (
                            <option key={budget} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                      {/* Десктопная версия (радио-кнопки) */}
                      <div className="hidden md:grid md:grid-cols-2 gap-3">
                  {budgets.map((budget) => (
                    <label 
                      key={budget}
                      className="relative group cursor-pointer"
                    >
                      <input 
                        type="radio" 
                        className="peer hidden" 
                        name="budget"
                      />
                            <div className="p-3 text-center bg-[#1d1e22]/50 border border-[#393f4d] text-[#d4d4dc] peer-checked:border-[#feda6a] peer-checked:text-[#feda6a] hover:border-[#feda6a] transition-colors rounded-[2px]">
                        {budget}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

                    {/* Контактные данные */}
                    <div>
                      <label className="block text-[#feda6a] text-sm uppercase tracking-wider mb-2">{contactSection.form.contactDetails}</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                  <input 
                    type="email" 
                            placeholder={contactSection.form.emailPlaceholder} 
                            className="w-full p-3 bg-[#1d1e22]/50 text-[#d4d4dc] placeholder-[#d4d4dc]/30 border border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors rounded-[2px]"
                  />
                </div>
                        <div>
                    <input 
                      type="tel" 
                            placeholder={contactSection.form.phonePlaceholder} 
                            className="w-full p-3 bg-[#1d1e22]/50 text-[#d4d4dc] placeholder-[#d4d4dc]/30 border border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors rounded-[2px]"
                    />
                  </div>
                </div>
              </div>

                    {/* О проекте */}
              <div className="space-y-2">
                      <label className="block text-[#feda6a] text-sm uppercase tracking-wider">{contactSection.form.project}</label>
                <textarea 
                        placeholder={contactSection.form.projectPlaceholder} 
                        rows={5}
                        className="w-full p-3 bg-[#1d1e22]/50 text-[#d4d4dc] placeholder-[#d4d4dc]/30 border border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors rounded-[2px] resize-none"
                ></textarea>
              </div>

              {/* Кнопка отправки */}
                    <div className="pt-4">
                      <button
                type="submit"
                        className="w-full md:w-auto px-10 py-4 bg-[#feda6a] text-black font-bold rounded-[2px] hover:bg-[#feda6a]/90 transition-colors"
                      >
                        {contactSection.form.submit}
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection; 