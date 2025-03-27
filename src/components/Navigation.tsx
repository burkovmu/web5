'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const menuItems = [
  { name: 'Главная', href: '#hero', number: '01' },
  { name: 'О нас', href: '#about', number: '02' },
  { name: 'Услуги', href: '#services', number: '03' },
  { name: 'Кейсы', href: '#cases', number: '04' },
  { name: 'Контакты', href: '#contact', number: '05' }
];

const socialLinks = [
  { name: 'Telegram', href: '#', icon: 'M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-12 1.5c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm3.5-8.5c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5zm-7 0c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5zm3.5 6.5c-2.03 0-3.5-1.47-3.5-3.5s1.47-3.5 3.5-3.5 3.5 1.47 3.5 3.5-1.47 3.5-3.5 3.5z' },
  { name: 'WhatsApp', href: '#', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' },
  { name: 'Email', href: '#', icon: 'M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* Кнопка меню */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 w-12 h-12 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative w-8 h-8">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-2 left-0 w-full h-0.5 bg-white"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-1/2 left-0 w-full h-0.5 bg-white -translate-y-1/2"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute bottom-2 left-0 w-full h-0.5 bg-white"
          />
        </div>
      </motion.button>

      {/* Меню */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            transition={{ 
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.2 }
            }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40"
          >
            <div className="relative h-full max-w-7xl mx-auto px-8 py-24">
              {/* Основное меню */}
              <div className="h-full flex flex-col justify-between">
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="group"
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.href);
                        }}
                        className="flex items-baseline gap-4 py-2"
                      >
                        <span className="text-[#feda6a] font-light text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          {item.number}
                        </span>
                        <span className="text-4xl sm:text-6xl font-light text-white group-hover:text-[#feda6a] transition-all duration-300">
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Контакты и соц. сети */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-12 border-t border-white/10"
                >
                  <div className="flex gap-8">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white/60 hover:text-[#feda6a] transition-all duration-300"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d={link.icon} />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                  <div className="text-white/60 text-center sm:text-right">
                    <p className="text-lg">info@web3dev.com</p>
                    <p className="text-lg">+7 (999) 123-45-67</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 