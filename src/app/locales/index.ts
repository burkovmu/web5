import { ru } from './ru';
import { en } from './en';

export const locales = {
  ru,
  en
};

export type LocaleType = 'ru' | 'en';
export type TranslationsType = typeof ru; 