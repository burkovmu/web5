'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { locales, LocaleType, TranslationsType } from '../../../locales';

type LocaleContextType = {
  locale: LocaleType;
  translations: TranslationsType;
  changeLocale: (newLocale: LocaleType) => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  // Получение сохраненной локали или использование ru по умолчанию
  const [locale, setLocale] = useState<LocaleType>('ru');
  
  // Загружаем сохраненную локаль при инициализации (только на клиенте)
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as LocaleType | null;
    if (savedLocale && (savedLocale === 'ru' || savedLocale === 'en')) {
      setLocale(savedLocale);
    }
  }, []);

  // Функция для изменения локали
  const changeLocale = (newLocale: LocaleType) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  // Получение переводов для текущей локали
  const translations = locales[locale];

  return (
    <LocaleContext.Provider value={{ locale, translations, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

// Хук для использования локализации в компонентах
export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}; 