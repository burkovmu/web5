'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from '../context/LocaleContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, changeLocale, translations } = useLocale();

  // Отслеживание скролла для изменения стиля шапки
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Переключение локали
  const toggleLocale = () => {
    changeLocale(locale === 'ru' ? 'en' : 'ru');
  };

  // Получаем навигационные ссылки из переводов
  const navigationLinks = translations.footer.links;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1d1e22]/80 backdrop-blur-md py-3' : 'bg-[#1d1e22]/40 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" className="z-20">
          <div
            className="text-[#feda6a] text-3xl tracking-wider font-marvel"
            style={{
              textShadow: '0 0 15px rgba(254, 218, 106, 0.3)'
            }}
          >
            MISHLEN
          </div>
        </Link>

        {/* Правая часть: переключатель языка и кнопка бургер */}
        <div className="flex items-center space-x-6">
          {/* Переключатель языка */}
          <button 
            onClick={toggleLocale}
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#393f4d]/30 text-[#d4d4dc] hover:bg-[#393f4d]/50 transition-colors"
            aria-label={locale === 'ru' ? 'Переключить на английский' : 'Switch to Russian'}
          >
            <span className="text-sm font-medium uppercase">{locale === 'ru' ? 'EN' : 'RU'}</span>
          </button>

          {/* Кнопка бургер-меню */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-20 flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            aria-label={locale === 'ru' ? 'Меню' : 'Menu'}
          >
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-7 bg-[#feda6a] transition-all"
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-7 bg-[#feda6a] transition-all"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-7 bg-[#feda6a] transition-all"
            />
          </button>
        </div>
      </div>

      {/* Выпадающее меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-[#1d1e22]/95 backdrop-blur-lg z-10"
          >
            <div className="container mx-auto px-4 pt-28 pb-10 h-full flex flex-col">
              <nav className="flex-1 flex flex-col justify-center items-center">
                <ul className="space-y-8 text-center">
                  {navigationLinks.map((item, index) => (
                    <motion.li 
                      key={item.url}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link 
                        href={item.url}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-4xl md:text-5xl text-[#d4d4dc] hover:text-[#feda6a] font-bold transition-colors"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              {/* Социальные сети в мобильном меню */}
              <div className="mt-auto flex justify-center space-x-6">
                <a 
                  href="https://t.me/mishlenteam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#d4d4dc] hover:text-[#feda6a] transition-colors"
                >
                  <span className="sr-only">Telegram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.065-1.225-.461-1.9-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.178.121.13.156.305.165.472.009.167-.018.371-.027.522z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/message/YWPQD6DCDXBPA1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#d4d4dc] hover:text-[#feda6a] transition-colors"
                >
                  <span className="sr-only">WhatsApp</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.419-.1.824z M20.52 3.449C12.831-3.984.521 1.66.001 11.65c-.152 2.9.423 5.731 1.67 8.228L0 24l4.254-1.615c2.395 1.18 5.083 1.801 7.807 1.803 9.426 0 14.844-7.92 14.843-15.425.001-2.087-.566-4.108-1.64-5.868-1-1.659-2.388-3.048-4.066-4.05-1.677-1.001-3.589-1.529-5.558-1.527-.29 0-.58.012-.87.037z" stroke="none" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/burkovmu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#d4d4dc] hover:text-[#feda6a] transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 