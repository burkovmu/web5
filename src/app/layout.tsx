import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from '@/components/Navigation';

const bounded = localFont({
  src: './fonts/Bounded-ExtraLight.ttf',
  variable: '--font-bounded'
});

export const metadata: Metadata = {
  title: 'Web3 Development',
  description: 'Professional Web3 Development Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bounded.variable} font-bounded`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
