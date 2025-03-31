'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/app/context/LocaleContext';
import Link from 'next/link';

export default function TermsOfUse() {
  const { locale } = useLocale();

  const content = {
    ru: {
      title: "Условия использования",
      lastUpdated: "Последнее обновление: 1 июня 2024 г.",
      intro: "Пожалуйста, внимательно прочитайте настоящие Условия использования перед использованием веб-сайта и услуг Mishlen Team.",
      sections: [
        {
          title: "1. Принятие условий",
          content: "Используя наш веб-сайт и услуги, вы подтверждаете, что прочитали, поняли и согласны соблюдать настоящие Условия использования. Если вы не согласны с какой-либо частью этих условий, вы не должны использовать наш веб-сайт или услуги."
        },
        {
          title: "2. Изменения условий",
          content: "Мы оставляем за собой право по своему усмотрению изменять, добавлять или удалять части настоящих Условий использования в любое время. Проверяйте эту страницу периодически для ознакомления с изменениями. Ваше продолжение использования веб-сайта после публикации изменений означает, что вы принимаете и соглашаетесь с изменениями."
        },
        {
          title: "3. Использование веб-сайта",
          content: "При использовании нашего веб-сайта вы соглашаетесь:",
          items: [
            "Не нарушать любые применимые законы или постановления.",
            "Не использовать веб-сайт любым способом, который может привести к его повреждению, отключению или ухудшению работы.",
            "Не пытаться получить несанкционированный доступ к любой части веб-сайта, серверу, на котором размещен веб-сайт, или любым другим серверам, компьютерам или базам данных, связанным с веб-сайтом.",
            "Не публиковать, не отправлять и не распространять любой оскорбительный, непристойный, дискриминационный или вредоносный контент."
          ]
        },
        {
          title: "4. Интеллектуальная собственность",
          content: "Весь контент, включая, но не ограничиваясь текстами, изображениями, графикой, логотипами, иконками, аудио- и видеоклипами, компьютерным кодом, размещенный на этом веб-сайте, является собственностью Mishlen Team или наших лицензиаров и защищен международными законами об авторском праве. Несанкционированное использование любой части контента веб-сайта строго запрещено."
        },
        {
          title: "5. Ограничение ответственности",
          content: "Информация на веб-сайте предоставляется «как есть» без каких-либо гарантий, явных или подразумеваемых. Mishlen Team не несет ответственности за любой прямой, косвенный, случайный, специальный или последующий ущерб, возникший в результате доступа к нашему веб-сайту или его использования."
        },
        {
          title: "6. Ссылки на сторонние веб-сайты",
          content: "Наш веб-сайт может содержать ссылки на сторонние веб-сайты, которые не принадлежат или не контролируются Mishlen Team. Мы не несем ответственности за содержание, политику конфиденциальности или практику сторонних веб-сайтов. Мы настоятельно рекомендуем вам ознакомиться с условиями использования и политикой конфиденциальности любого стороннего веб-сайта, который вы посещаете."
        },
        {
          title: "7. Применимое право",
          content: "Настоящие Условия использования регулируются и толкуются в соответствии с законодательством Российской Федерации, и вы безоговорочно подчиняетесь исключительной юрисдикции судов в этой юрисдикции."
        },
        {
          title: "8. Контактная информация",
          content: "Если у вас есть вопросы или предложения относительно наших Условий использования, пожалуйста, свяжитесь с нами:"
        }
      ],
      contactEmail: "info@mishlenteam.ru",
      backToHome: "Вернуться на главную"
    },
    en: {
      title: "Terms of Use",
      lastUpdated: "Last updated: June 1, 2024",
      intro: "Please read these Terms of Use carefully before using the Mishlen Team website and services.",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By using our website and services, you confirm that you have read, understood, and agree to abide by these Terms of Use. If you do not agree to any part of these terms, you should not use our website or services."
        },
        {
          title: "2. Changes to Terms",
          content: "We reserve the right, at our discretion, to modify, add, or remove portions of these Terms of Use at any time. Please check this page periodically for changes. Your continued use of the website after the posting of changes constitutes your acceptance of and agreement to the changes."
        },
        {
          title: "3. Use of Website",
          content: "When using our website, you agree to:",
          items: [
            "Not violate any applicable laws or regulations.",
            "Not use the website in any way that could damage, disable, or impair the website.",
            "Not attempt to gain unauthorized access to any part of the website, the server on which the website is hosted, or any other servers, computers, or databases connected to the website.",
            "Not post, send, or distribute any offensive, obscene, discriminatory, or harmful content."
          ]
        },
        {
          title: "4. Intellectual Property",
          content: "All content, including but not limited to text, images, graphics, logos, icons, audio and video clips, computer code, featured on this website is the property of Mishlen Team or our licensors and is protected by international copyright laws. Unauthorized use of any part of the website content is strictly prohibited."
        },
        {
          title: "5. Limitation of Liability",
          content: "The information on the website is provided 'as is' without any warranties, expressed or implied. Mishlen Team shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from access to or use of our website."
        },
        {
          title: "6. Links to Third-Party Websites",
          content: "Our website may contain links to third-party websites that are not owned or controlled by Mishlen Team. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We strongly advise you to review the terms of use and privacy policy of any third-party website you visit."
        },
        {
          title: "7. Governing Law",
          content: "These Terms of Use shall be governed by and construed in accordance with the laws of the Russian Federation, and you irrevocably submit to the exclusive jurisdiction of the courts in that jurisdiction."
        },
        {
          title: "8. Contact Information",
          content: "If you have any questions or suggestions about our Terms of Use, please contact us:"
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