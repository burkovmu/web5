'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import AnimatedBackground from './AnimatedBackground';
import { useLocale } from '../app/context/LocaleContext';

const projects = [
  {
    id: 'project1',
    title: 'Аренда автомобилей в Дубае',
    description: 'Разработка современного веб-сайта для аренды автомобилей премиум-класса в Дубае с удобной системой бронирования и оплаты.',
    image: '/project1.jpg',
    category: 'Web Development',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    link: '/projects/project1'
  },
  {
    id: 'project2',
    title: 'Аренда Спец Техники',
    description: 'Создание специализированной платформы для аренды строительной и специальной техники с расширенным каталогом и системой управления заказами.',
    image: '/project2.jpg',
    category: 'Full Stack',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    link: '/projects/project2'
  },
  {
    id: 'project3',
    title: 'Сервисный центр техники Apple',
    description: 'Разработка современного сайта для сервисного центра по ремонту техники Apple с системой отслеживания статуса ремонта.',
    image: '/project3.jpg',
    category: 'Web App',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    link: '/projects/project3'
  },
  {
    id: 'project4',
    title: 'Сайт для ресторана',
    description: 'Создание современного сайта для ресторана с системой онлайн-бронирования столиков и доставки еды.',
    image: '/project4.jpg',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    link: '/projects/project4'
  }
];

export default function ProjectsSection() {
  const { translations } = useLocale();
  const { projectsSection } = translations;

  return (
    <SectionWrapper className="relative w-full overflow-x-hidden">
      <AnimatedBackground variant="projects" />
      <div className="w-full md:w-[90%] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-start mb-20">
          <span className="text-[#feda6a] uppercase tracking-[0.3em] text-xs font-stolzl mb-6">
            {projectsSection.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {projectsSection.heading}
          </h2>
          <p className="text-[#d4d4dc] text-lg md:text-xl max-w-3xl">
            {projectsSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={project.link} className="block">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Изображение проекта */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#feda6a]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Мобильный оверлей для улучшения читаемости текста */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 lg:hidden" />
                  </div>

                  {/* Информация о проекте */}
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-[2px] h-full bg-[#feda6a]/20 group-hover:bg-[#feda6a] transition-colors duration-500" />
                    <div className="pl-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#feda6a] text-sm font-stolzl tracking-wider">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[#feda6a]/60 text-sm uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-stolzl text-[#d4d4dc] mb-4 md:mb-6 group-hover:text-[#feda6a] transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-[#d4d4dc]/80 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 md:px-4 md:py-2 bg-[#1d1e22]/40 backdrop-blur-sm rounded-full text-xs md:text-sm text-[#d4d4dc]/60 border border-[#393f4d]/20 group-hover:border-[#feda6a]/20 group-hover:text-[#feda6a]/80 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-3 text-[#feda6a] group-hover:translate-x-2 transition-transform duration-300">
                        <span className="text-sm uppercase tracking-wider">{projectsSection.viewCase}</span>
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 