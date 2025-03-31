'use client';

import { useLocale } from '../app/context/LocaleContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { locale, translations, changeLocale } = useLocale();

  const toggleLanguage = () => {
    changeLocale(locale === 'ru' ? 'en' : 'ru');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-8 right-24 z-50 px-3 py-1 flex items-center justify-center 
                text-white rounded-md bg-[#393f4d]/30 backdrop-blur-md 
                border border-[#feda6a]/20 hover:border-[#feda6a]/40
                transition-colors duration-300"
    >
      <div className="text-sm font-medium">
        {locale === 'ru' ? translations.languageSwitch.en : translations.languageSwitch.ru}
      </div>
    </motion.button>
  );
} 