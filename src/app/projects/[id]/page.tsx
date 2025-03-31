'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = {
  'project1': {
    title: 'Аренда автомобилей в Дубае',
    description: 'Разработка современного веб-сайта для аренды автомобилей премиум-класса в Дубае с удобной системой бронирования и оплаты.',
    url: 'https://dubai-cars.rent',
    fullDescription: `Проект представляет собой комплексное решение для аренды автомобилей премиум-класса в Дубае. 
    Сайт разработан с учетом специфики рынка и потребностей клиентов, предоставляя удобный интерфейс для выбора и бронирования автомобилей.
    
    Особенности проекта:
    • Интеграция с платежными системами
    • Многоязычный интерфейс (русский, английский, арабский)
    • Система управления автопарком
    • Интеграция с CRM-системой
    • Мобильная версия с адаптивным дизайном`,
    images: [
      '/project1.jpg',
      '/project1-detail1.jpg',
      '/project1-detail2.jpg'
    ],
    features: [
      'Онлайн бронирование автомобилей',
      'Многоязычный интерфейс',
      'Интеграция с платежными системами',
      'Система управления автопарком',
      'CRM-интеграция',
      'Мобильная версия'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    stats: {
      users: '5,000+',
      bookings: '1,000+',
      cars: '50+',
      uptime: '99.9%'
    },
    challenges: [
      'Интеграция с различными платежными системами',
      'Обработка множественных валют',
      'Синхронизация с CRM-системой'
    ],
    solutions: [
      'Разработка универсального API для платежей',
      'Внедрение системы конвертации валют',
      'Создание надежного механизма синхронизации данных'
    ]
  },
  'project2': {
    title: 'Аренда Спец Техники',
    description: 'Создание специализированной платформы для аренды строительной и специальной техники с расширенным каталогом и системой управления заказами.',
    url: 'https://spec-tech.rent',
    fullDescription: `Платформа для аренды специальной техники разработана с учетом специфики строительной отрасли. 
    Сайт предоставляет удобный интерфейс для выбора и аренды различных типов спецтехники, включая экскаваторы, бульдозеры и краны.
    
    Ключевые возможности:
    • Каталог с фильтрацией по типам техники
    • Система расчета стоимости аренды
    • Управление заказами и доставкой
    • Интеграция с системами учета
    • Личный кабинет клиента`,
    images: [
      '/project2.jpg',
      '/project2-detail1.jpg',
      '/project2-detail2.jpg'
    ],
    features: [
      'Каталог спецтехники с фильтрами',
      'Калькулятор стоимости аренды',
      'Система управления заказами',
      'Интеграция с 1С',
      'Личный кабинет',
      'Мобильная версия'
    ],
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    stats: {
      users: '3,000+',
      orders: '800+',
      equipment: '100+',
      uptime: '99.8%'
    },
    challenges: [
      'Интеграция с 1С',
      'Расчет сложных тарифов',
      'Управление большим каталогом'
    ],
    solutions: [
      'Разработка API для 1С',
      'Создание гибкой системы тарифов',
      'Оптимизация работы с базой данных'
    ]
  },
  'project3': {
    title: 'Сервисный центр техники Apple',
    description: 'Разработка современного сайта для сервисного центра по ремонту техники Apple с системой отслеживания статуса ремонта.',
    url: 'https://apple-service.center',
    fullDescription: `Сайт сервисного центра Apple разработан для удобства клиентов и оптимизации работы сервиса. 
    Платформа предоставляет возможность отслеживать статус ремонта, записываться на диагностику и получать уведомления о готовности устройства.
    
    Особенности проекта:
    • Система отслеживания статуса ремонта
    • Онлайн-запись на диагностику
    • Интеграция с SMS-сервисом
    • Личный кабинет клиента
    • Административная панель`,
    images: [
      '/project3.jpg',
      '/project3-detail1.jpg',
      '/project3-detail2.jpg'
    ],
    features: [
      'Отслеживание статуса ремонта',
      'Онлайн-запись на диагностику',
      'SMS-уведомления',
      'Личный кабинет',
      'Админ-панель',
      'Мобильная версия'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    stats: {
      users: '10,000+',
      repairs: '5,000+',
      devices: '1,000+',
      uptime: '99.95%'
    },
    challenges: [
      'Интеграция с SMS-сервисом',
      'Безопасность данных клиентов',
      'Управление очередью'
    ],
    solutions: [
      'Разработка надежного API для SMS',
      'Внедрение системы шифрования',
      'Создание умной системы очередей'
    ]
  },
  'project4': {
    title: 'Сайт для ресторана',
    description: 'Создание современного сайта для ресторана с системой онлайн-бронирования столиков и доставки еды.',
    url: 'https://restaurant.example',
    fullDescription: `Сайт ресторана разработан с учетом современных трендов в сфере общественного питания. 
    Платформа предоставляет удобный интерфейс для просмотра меню, бронирования столиков и заказа доставки.
    
    Ключевые возможности:
    • Онлайн-бронирование столиков
    • Система доставки еды
    • Электронное меню с фотографиями
    • Программа лояльности
    • Интеграция с кухней`,
    images: [
      '/project4.jpg',
      '/project4-detail1.jpg',
      '/project4-detail2.jpg'
    ],
    features: [
      'Онлайн-бронирование',
      'Система доставки',
      'Электронное меню',
      'Программа лояльности',
      'Интеграция с кухней',
      'Мобильная версия'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    stats: {
      users: '15,000+',
      orders: '3,000+',
      dishes: '200+',
      uptime: '99.7%'
    },
    challenges: [
      'Синхронизация с кухней',
      'Управление доставкой',
      'Система лояльности'
    ],
    solutions: [
      'Разработка API для кухни',
      'Интеграция с сервисами доставки',
      'Создание системы бонусов'
    ]
  }
};

export default function ProjectPage() {
  const params = useParams();
  const project = projects[params.id as keyof typeof projects];

  if (!project) {
    return <div>Проект не найден</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Заголовок с описанием для Desktop версии */}
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 py-16 hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">{project.title}</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-2 md:gap-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-xs md:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Заголовок с описанием для мобильной версии */}
      <div className="md:hidden w-full bg-black px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-300 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-invert max-w-none mb-12"
            >
              <p className="text-xl whitespace-pre-line">{project.fullDescription}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Основные функции</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-4 bg-white/5 rounded-lg">
                      <span className="w-2 h-2 bg-[#feda6a] rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Вызовы и решения</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Вызовы</h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Решения</h3>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Детали проекта</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-md mt-1">
                      <svg className="w-5 h-5 text-[#feda6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-white">Срок выполнения</div>
                      <div className="text-gray-400">3 месяца</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-md mt-1">
                      <svg className="w-5 h-5 text-[#feda6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-white">Команда</div>
                      <div className="text-gray-400">5 специалистов</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-md mt-1">
                      <svg className="w-5 h-5 text-[#feda6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-white">Тип проекта</div>
                      <div className="text-gray-400">Коммерческий</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-md mt-1">
                      <svg className="w-5 h-5 text-[#feda6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-white">Статус</div>
                      <div className="text-gray-400">Завершен</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Технологии</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Link 
                  href="/#projects" 
                  className="block w-full"
                >
                  <button className="w-full px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                    <span>Назад к проектам</span>
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                      />
                    </svg>
                  </button>
                </Link>

                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full px-6 py-3 bg-[#feda6a] text-black font-semibold rounded-lg hover:bg-[#feda6a]/90 transition-colors flex items-center justify-center gap-2">
                    <span>Перейти на сайт</span>
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 