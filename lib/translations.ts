export type Lang = "ru" | "en";

export const translations = {
  ru: {
    nav: {
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет, я",
      name: "Dmitry",
      role: "Fullstack-разработчик",
      subtitle: "Разработка от идеи до рабочего продукта: Telegram-боты, веб-приложения, автоматизация бизнес-процессов. Быстро и качественно.",
      cta_github: "GitHub",
      cta_contact: "Связаться",
    },
    skills: {
      title: "Навыки",
      subtitle: "Стек и технологии, с которыми я работаю",
      items: {
        nextjs: { name: "Next.js", desc: "Полноценные веб-приложения и SSR-сайты" },
        react: { name: "React", desc: "Компонентный подход к UI" },
        tailwind: { name: "Tailwind CSS", desc: "Быстрая стилизация без компромиссов" },
        nodejs: { name: "Node.js", desc: "Серверная часть и API" },
        telegram: { name: "Telegram API", desc: "Боты и Mini Apps" },
        ai: { name: "AI / Prompt Engineering", desc: "LLM-интеграции и RAG-системы" },
        typescript: { name: "TypeScript", desc: "Типобезопасный код" },
        supabase: { name: "Supabase", desc: "БД, авторизация, realtime" },
      },
    },
    projects: {
      title: "Проекты",
      subtitle: "Работы, которые демонстрируют мои навыки",
      items: {
        portfolio: {
          title: "Портфолио-сайт",
          desc: "Персональный сайт с двуязычным интерфейсом, тёмной темой и AI-эстетикой",
          tags: ["Next.js", "Tailwind", "i18n"],
        },
        tgbot: {
          title: "Telegram-бот записи",
          desc: "Бот для записи на услуги с напоминаниями и интеграцией с базой данных",
          tags: ["Telegram API", "Node.js", "Supabase"],
          status: "В разработке",
        },
        dashboard: {
          title: "SaaS-дашборд",
          desc: "Аналитический дашборд с графиками, таблицами и фильтрами",
          tags: ["Next.js", "Recharts", "shadcn/ui"],
          status: "В разработке",
        },
        aichat: {
          title: "AI-чатбот",
          desc: "Умный ассистент с RAG: загружаешь документ — бот отвечает по контексту",
          tags: ["OpenAI", "Embeddings", "Next.js"],
          status: "В разработке",
        },
        twa: {
          title: "Telegram Mini App",
          desc: "Каталог товаров с корзиной и оформлением заказа внутри Telegram",
          tags: ["TWA SDK", "Next.js", "Tailwind"],
          status: "В разработке",
        },
      },
    },
    contact: {
      title: "Контакты",
      subtitle: "Свяжитесь со мной для обсуждения проекта",
      telegram: "Telegram",
      email: "Email",
      github: "GitHub",
      form_name: "Ваше имя",
      form_message: "Опишите ваш проект или задачу",
      form_send: "Написать в Telegram",
    },
    footer: {
      built_with: "Сделано на",
      by: "Zadirox",
    },
  },
  en: {
    nav: {
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Dmitry",
      role: "Fullstack Developer",
      subtitle: "End-to-end development: Telegram bots, web applications, business automation. Fast and high-quality.",
      cta_github: "GitHub",
      cta_contact: "Contact Me",
    },
    skills: {
      title: "Skills",
      subtitle: "Tech stack and technologies I work with",
      items: {
        nextjs: { name: "Next.js", desc: "Full-stack web apps and SSR sites" },
        react: { name: "React", desc: "Component-driven UI development" },
        tailwind: { name: "Tailwind CSS", desc: "Rapid styling without compromises" },
        nodejs: { name: "Node.js", desc: "Server-side and API development" },
        telegram: { name: "Telegram API", desc: "Bots and Mini Apps" },
        ai: { name: "AI / Prompt Engineering", desc: "LLM integrations and RAG systems" },
        typescript: { name: "TypeScript", desc: "Type-safe code" },
        supabase: { name: "Supabase", desc: "Database, auth, realtime" },
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Work that showcases my skills",
      items: {
        portfolio: {
          title: "Portfolio Site",
          desc: "Personal website with bilingual UI, dark theme and AI aesthetics",
          tags: ["Next.js", "Tailwind", "i18n"],
        },
        tgbot: {
          title: "Telegram Booking Bot",
          desc: "Service booking bot with reminders and database integration",
          tags: ["Telegram API", "Node.js", "Supabase"],
          status: "In progress",
        },
        dashboard: {
          title: "SaaS Dashboard",
          desc: "Analytics dashboard with charts, tables and filters",
          tags: ["Next.js", "Recharts", "shadcn/ui"],
          status: "In progress",
        },
        aichat: {
          title: "AI Chatbot",
          desc: "Smart RAG assistant: upload a document — bot answers from context",
          tags: ["OpenAI", "Embeddings", "Next.js"],
          status: "In progress",
        },
        twa: {
          title: "Telegram Mini App",
          desc: "Product catalog with cart and checkout inside Telegram",
          tags: ["TWA SDK", "Next.js", "Tailwind"],
          status: "In progress",
        },
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Get in touch to discuss your project",
      telegram: "Telegram",
      email: "Email",
      github: "GitHub",
      form_name: "Your name",
      form_message: "Describe your project or task",
      form_send: "Message on Telegram",
    },
    footer: {
      built_with: "Built with",
      by: "Zadirox",
    },
  },
};

export type Translations = (typeof translations)[Lang];
