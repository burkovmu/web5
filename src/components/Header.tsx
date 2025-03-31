'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from '../app/context/LocaleContext';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, changeLocale, translations } = useLocale();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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
        isScrolled 
          ? 'bg-[#1d1e22]/80 backdrop-blur-md py-3' 
          : isHomePage 
            ? 'bg-transparent py-5' 
            : 'bg-[#1d1e22]/40 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" className="z-20">
          <div
            className="text-[#feda6a] text-3xl tracking-wider font-marvel flex items-center pt-1"
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
            className="relative overflow-hidden group"
            aria-label={locale === 'ru' ? 'Переключить на английский' : 'Switch to Russian'}
          >
            <div className="flex items-center bg-white/5 px-3 py-1 rounded-full border border-[#feda6a]/20 hover:border-[#feda6a]/50 transition-all">
              <span className="text-sm font-medium uppercase text-[#d4d4dc] group-hover:text-[#feda6a] transition-colors">
                {locale === 'ru' ? 'EN' : 'RU'}
              </span>
              <motion.div 
                initial={false}
                animate={{ rotate: locale === 'ru' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                <svg className="w-4 h-4 text-[#feda6a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 