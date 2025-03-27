'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import AnimatedBackground from './AnimatedBackground';

const projectTypes = [
  'Лендинг',
  'Корпоративный сайт',
  'Интернет-магазин',
  'Веб-приложение',
  'Мобильное приложение',
  'Другое'
];

const budgets = [
  '50 000 – 200 000 ₽',
  '200 000 – 500 000 ₽',
  '500 000 – 1 000 000 ₽',
  'от 1 000 000 ₽'
];

const ContactSection = () => {
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
                  Свяжитесь с нами
              </h2>
                <p className="text-[#d4d4dc] text-lg max-w-2xl mx-auto">
                  Расскажите о вашем проекте, и мы поможем воплотить его в жизнь
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
                    <h3 className="text-2xl font-bold text-[#feda6a] mb-6">Контактная информация</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-[#feda6a]/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-[#feda6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-[#feda6a] text-sm uppercase tracking-wider mb-1">Email</div>
                          <a href="mailto:info@web3dev.com" className="text-[#d4d4dc] text-lg hover:text-[#feda6a] transition-colors">
                            info@web3dev.com
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
                          <div className="text-[#feda6a] text-sm uppercase tracking-wider mb-1">Телефон</div>
                          <a href="tel:+79991234567" className="text-[#d4d4dc] text-lg hover:text-[#feda6a] transition-colors">
                            +7 (999) 123-45-67
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex flex-row space-x-4 mt-6">
                        <a href="https://t.me/mishlenteam" target="_blank" rel="noopener noreferrer" 
                           className="w-10 h-10 rounded-full bg-[#feda6a]/20 flex items-center justify-center hover:bg-[#feda6a]/40 transition-colors">
                          <svg className="w-5 h-5 text-[#feda6a]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.065-1.225-.461-1.9-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.178.121.13.156.305.165.472.009.167-.018.371-.027.522z"/>
                          </svg>
                        </a>
                        <a href="https://wa.me/message/YWPQD6DCDXBPA1" target="_blank" rel="noopener noreferrer"
                           className="w-10 h-10 rounded-full bg-[#feda6a]/20 flex items-center justify-center hover:bg-[#feda6a]/40 transition-colors">
                          <svg className="w-5 h-5 text-[#feda6a]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.419-.1.824z M20.52 3.449C12.831-3.984.521 1.66.001 11.65c-.152 2.9.423 5.731 1.67 8.228L0 24l4.254-1.615c2.395 1.18 5.083 1.801 7.807 1.803 9.426 0 14.844-7.92 14.843-15.425.001-2.087-.566-4.108-1.64-5.868-1-1.659-2.388-3.048-4.066-4.05-1.677-1.001-3.589-1.529-5.558-1.527-.29 0-.58.012-.87.037z" stroke="none" />
                          </svg>
                        </a>
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
                  <h3 className="text-2xl font-bold text-[#feda6a] mb-8">Оставьте заявку</h3>
                  <form className="space-y-8">
              {/* Основная информация */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[#feda6a] text-sm uppercase tracking-wider">Имя</label>
                  <input 
                    type="text" 
                    placeholder="Как к вам обращаться" 
                          className="w-full p-3 bg-[#1d1e22]/50 text-[#d4d4dc] placeholder-[#d4d4dc]/30 border border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors rounded-[2px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[#feda6a] text-sm uppercase tracking-wider">Компания</label>
                  <input 
                    type="text" 
                    placeholder="Название вашей компании" 
                          className="w-full p-3 bg-[#1d1e22]/50 text-[#d4d4dc] placeholder-[#d4d4dc]/30 border border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors rounded-[2px]"
                  />
                </div>
              </div>

              {/* Тип проекта */}
              <div className="space-y-3">
                <label className="block text-[#feda6a] text-sm uppercase tracking-wider">Тип проекта</label>
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
                <label className="block text-[#feda6a] text-sm uppercase tracking-wider">Планируемый бюджет</label>
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

              {/* Контакты */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[#feda6a] text-sm uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                          className="w-full p-3 bg-[#1d1e22]/50 text-[#d4d4dc] placeholder-[#d4d4dc]/30 border border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors rounded-[2px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[#feda6a] text-sm uppercase tracking-wider">Телефон</label>
                  <div className="flex">
                          <span className="p-3 bg-[#1d1e22]/50 text-[#d4d4dc] border border-[#393f4d] rounded-[2px]">+7</span>
                    <input 
                      type="tel" 
                      placeholder="(999) 999-99-99" 
                            className="flex-1 p-3 bg-[#1d1e22]/50 text-[#d4d4dc] placeholder-[#d4d4dc]/30 border border-l-0 border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors rounded-[2px]"
                    />
                  </div>
                </div>
              </div>

              {/* Описание проекта */}
              <div className="space-y-2">
                <label className="block text-[#feda6a] text-sm uppercase tracking-wider">О вашем проекте</label>
                <textarea 
                  rows={4}
                  placeholder="Расскажите о ваших целях, задачах и ожиданиях от проекта"
                        className="w-full p-3 bg-[#1d1e22]/50 text-[#d4d4dc] placeholder-[#d4d4dc]/30 border border-[#393f4d] focus:border-[#feda6a] outline-none transition-colors rounded-[2px] resize-none"
                ></textarea>
              </div>

              {/* Кнопка отправки */}
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-3 bg-[#feda6a] text-[#1d1e22] font-medium hover:bg-[#feda6a]/90 transition-colors rounded-lg"
              >
                Отправить заявку
              </motion.button>
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