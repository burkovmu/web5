import type { Metadata } from 'next'; import { Inter } from 'next/font/google'; import localFont from 'next/font/local'; import './globals.css'; import Navigation from '@/components/Navigation'; const inter = Inter({ subsets: ['latin'] }); const bounded = localFont({ src: [ { path: '../../public/fonts/Bounded-ExtraLight.ttf', weight: '200', style: 'normal', }, { path: '../../public/fonts/Bounded-Regular.ttf', weight: 'normal', style: 'normal', }, { path: '../../public/fonts/Bounded-Black.ttf', weight: 'bold', style: 'normal', } ], variable: '--font-bounded' }); export const metadata: Metadata = { title: 'Mishlen - Создаем достойные звезд', description: 'Создаем сайты, интернет-магазины, лендинги, мобильные и веб-приложения', }; export default function RootLayout({ children, }: { children: React.ReactNode; }) { return ( <html lang="ru"> <body className={`${bounded.variable} font-bounded`}> <Navigation /> {children} </body> </html> ); }
