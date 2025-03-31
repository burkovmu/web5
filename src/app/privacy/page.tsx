'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/app/context/LocaleContext';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const { locale } = useLocale();

  const content = {
    ru: {
      title: "Политика конфиденциальности",
      lastUpdated: "Последнее обновление: 1 июня 2024 г.",
      intro: "Настоящая Политика конфиденциальности описывает, как Mishlen Team собирает, использует и раскрывает вашу информацию при использовании нашего веб-сайта и услуг.",
      sections: [
        {
          title: "Собираемая информация",
          content: "Мы можем собирать различные типы информации, включая:",
          items: [
            "Личную информацию: имя, электронную почту, номер телефона, которые вы предоставляете при заполнении форм на нашем сайте.",
            "Информацию об использовании: данные о том, как вы взаимодействуете с нашим сайтом, включая посещенные страницы, время посещения и другие действия.",
            "Техническую информацию: IP-адрес, тип браузера, устройство, операционная система и другие технические данные."
          ]
        },
        {
          title: "Использование информации",
          content: "Мы используем собранную информацию для:",
          items: [
            "Предоставления запрошенных вами услуг и выполнения наших договорных обязательств.",
            "Улучшения и персонализации пользовательского опыта на нашем сайте.",
            "Связи с вами по вопросам, связанным с нашими услугами.",
            "Анализа и улучшения наших услуг и маркетинговых стратегий."
          ]
        },
        {
          title: "Защита информации",
          content: "Мы принимаем разумные меры для защиты вашей личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако, ни один метод передачи через Интернет или метод электронного хранения не является на 100% безопасным, поэтому мы не можем гарантировать абсолютную безопасность."
        },
        {
          title: "Раскрытие информации третьим лицам",
          content: "Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам без вашего согласия, за исключением случаев, когда это необходимо для выполнения запрошенной услуги или когда это требуется по закону."
        },
        {
          title: "Cookie-файлы",
          content: "Мы используем файлы cookie для улучшения пользовательского опыта. Вы можете настроить свой браузер так, чтобы отказаться от всех или некоторых файлов cookie, или получать уведомления, когда файлы cookie отправляются."
        },
        {
          title: "Изменения в политике конфиденциальности",
          content: "Мы можем обновлять нашу Политику конфиденциальности время от времени. Мы уведомим вас о любых изменениях, разместив новую Политику конфиденциальности на этой странице."
        },
        {
          title: "Контактная информация",
          content: "Если у вас есть вопросы по поводу нашей Политики конфиденциальности, пожалуйста, свяжитесь с нами:"
        }
      ],
      contactEmail: "info@mishlenteam.ru",
      backToHome: "Вернуться на главную"
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: June 1, 2024",
      intro: "This Privacy Policy describes how Mishlen Team collects, uses, and discloses your information when you use our website and services.",
      sections: [
        {
          title: "Information We Collect",
          content: "We may collect various types of information, including:",
          items: [
            "Personal information: name, email, phone number that you provide when filling out forms on our site.",
            "Usage information: data about how you interact with our site, including pages visited, time of visit, and other actions.",
            "Technical information: IP address, browser type, device, operating system, and other technical data."
          ]
        },
        {
          title: "How We Use Information",
          content: "We use the collected information to:",
          items: [
            "Provide the services you have requested and fulfill our contractual obligations.",
            "Improve and personalize your experience on our website.",
            "Communicate with you regarding matters related to our services.",
            "Analyze and improve our services and marketing strategies."
          ]
        },
        {
          title: "Information Protection",
          content: "We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, so we cannot guarantee absolute security."
        },
        {
          title: "Disclosure to Third Parties",
          content: "We do not sell, trade, or transfer your personal information to third parties without your consent, except as necessary to provide a requested service or when required by law."
        },
        {
          title: "Cookies",
          content: "We use cookies to enhance the user experience. You can configure your browser to refuse all or some cookies, or to alert you when cookies are being sent."
        },
        {
          title: "Changes to Privacy Policy",
          content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
        },
        {
          title: "Contact Information",
          content: "If you have any questions about our Privacy Policy, please contact us:"
        }
      ],
      contactEmail: "info@mishlenteam.ru",
      backToHome: "Back to Home"
    }
  };

  const currentContent = locale === 'ru' ? content.ru : content.en;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{currentContent.title}</h1>
          <p className="text-gray-400 mb-8">{currentContent.lastUpdated}</p>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-12">{currentContent.intro}</p>
            
            {currentContent.sections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="mb-4">{section.content}</p>
                
                {section.items && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
                
                {index === currentContent.sections.length - 1 && (
                  <p className="mt-4">
                    <a href={`mailto:${currentContent.contactEmail}`} className="text-[#feda6a] hover:underline">
                      {currentContent.contactEmail}
                    </a>
                  </p>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800">
            <Link 
              href="/"
              className="inline-flex items-center text-[#feda6a] hover:underline"
            >
              <svg 
                className="w-5 h-5 mr-2" 
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
              {currentContent.backToHome}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 