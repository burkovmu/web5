import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

const marvel = localFont({
  src: [
    {
      path: '../app/fonts/Marvel-Regular.ttf',
      weight: 'normal',
      style: 'normal',
    }
  ],
  variable: '--font-marvel'
});

const tryClother = localFont({
  src: '../app/fonts/try_clother_light.ttf',
  variable: '--font-tryclother',
  preload: true,
  display: 'swap'
});

const rostov = localFont({
  src: '../app/fonts/rostov.ttf',
  variable: '--font-rostov',
  preload: true,
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Mishlen - Создаем достойные звезд',
  description: 'Создаем сайты, интернет-магазины, лендинги, мобильные и веб-приложения',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${tryClother.variable} ${marvel.variable} ${rostov.variable} font-tryclother`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
