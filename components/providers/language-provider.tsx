"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "vi"

interface Translations {
  nav: {
    about: string
    skills: string
    projects: string
    experience: string
    contact: string
  }
  hero: {
    greeting: string
    title1: string
    title2: string
    viewWork: string
    getInTouch: string
    taglines: string[]
  }
  about: {
    label: string
    title: string
    titleHighlight: string
    description1: string
    description2: string
    description3: string
    highlights: string[]
    specialties: {
      title: string
      description: string
    }[]
  }
  skills: {
    label: string
    title1: string
    title2: string
    subtitle: string
    categories: {
      backend: string
      frontend: string
      database: string
      tools: string
    }
  }
  projects: {
    label: string
    title1: string
    title2: string
    subtitle: string
    viewDetails: string
    items: {
      title: string
      description: string
    }[]
  }
  experience: {
    label: string
    title1: string
    title2: string
    subtitle: string
    fullTime: string
    internship: string
    items: {
      role: string
      description: string
    }[]
  }
  contact: {
    label: string
    title1: string
    title2: string
    subtitle: string
    cta: string
    sendEmail: string
    copied: string
  }
  footer: {
    builtWith: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "// Hello, I'm",
      title1: "Backend",
      title2: "Developer",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
      taglines: [
        "Logic-first developer building scalable systems & AI solutions",
        "Crafting robust APIs and optimizing performance",
        "Architecting backend systems that scale",
      ],
    },
    about: {
      label: "// About Me",
      title: "Who I",
      titleHighlight: "Am",
      description1: "I'm a logic-first developer with 2 years of experience crafting robust backend systems. My approach combines analytical thinking with creative problem-solving to build solutions that don't just work—they scale.",
      description2: "From architecting CRM systems to building intelligent chatbot automation and implementing cutting-edge RAG AI systems, I thrive on complex challenges that push the boundaries of what's possible.",
      description3: "I'm passionate about clean architecture, obsessed with performance, and always exploring new ways to leverage AI to create smarter systems.",
      highlights: ["backend architecture", "performance optimization", "AI-powered solutions"],
      specialties: [
        { title: "Backend Architecture", description: "Designing scalable, maintainable systems with clean code principles" },
        { title: "API Design & Optimization", description: "Building RESTful APIs with optimal performance and security" },
        { title: "System Performance Tuning", description: "Profiling and optimizing for maximum efficiency" },
        { title: "AI Integration", description: "Implementing chatbots, RAG systems, and intelligent automation" },
      ],
    },
    skills: {
      label: "// Technical Stack",
      title1: "Skills &",
      title2: "Technologies",
      subtitle: "A curated set of tools and technologies I use to bring ideas to life",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Database",
        tools: "Tools",
      },
    },
    projects: {
      label: "// Selected Work",
      title1: "Featured",
      title2: "Projects",
      subtitle: "A showcase of projects that demonstrate my expertise in backend development, AI integration, and system architecture",
      viewDetails: "View Details",
      items: [
        { title: "CRM System", description: "Enterprise-grade customer relationship management system with advanced analytics, automated workflows, and multi-tenant architecture." },
        { title: "Multi-platform Chatbot", description: "Intelligent chatbot system supporting multiple platforms with natural language processing, context awareness, and seamless integration." },
        { title: "RAG AI Bot", description: "Advanced retrieval-augmented generation system for intelligent document Q&A with vector search and contextual understanding." },
        { title: "Invoice OCR Bot", description: "Automated invoice processing system using OCR technology to extract, validate, and store invoice data with high accuracy." },
      ],
    },
    experience: {
      label: "// Career Journey",
      title1: "Work",
      title2: "Experience",
      subtitle: "My professional journey in software development",
      fullTime: "Full-time",
      internship: "Internship",
      items: [
        { role: "Backend Developer", description: "Leading backend development for enterprise applications, designing scalable architectures, implementing AI-powered features, and optimizing system performance. Working with cross-functional teams to deliver high-quality solutions." },
        { role: "Frontend Intern", description: "Contributed to frontend development projects, learned modern web development practices, and collaborated with senior developers to build responsive user interfaces." },
      ],
    },
    contact: {
      label: "// Let's Connect",
      title1: "Get In",
      title2: "Touch",
      subtitle: "Have a project in mind or want to discuss opportunities? I'd love to hear from you!",
      cta: "Or reach out directly for a quick chat",
      sendEmail: "Send me an email",
      copied: "Copied to clipboard!",
    },
    footer: {
      builtWith: "Built with",
    },
  },
  vi: {
    nav: {
      about: "Gioi Thieu",
      skills: "Ky Nang",
      projects: "Du An",
      experience: "Kinh Nghiem",
      contact: "Lien He",
    },
    hero: {
      greeting: "// Xin chao, toi la",
      title1: "Backend",
      title2: "Developer",
      viewWork: "Xem Du An",
      getInTouch: "Lien He",
      taglines: [
        "Lap trinh vien logic-first xay dung he thong co kha nang mo rong & giai phap AI",
        "Tao API manh me va toi uu hoa hieu suat",
        "Kien truc he thong backend co the mo rong",
      ],
    },
    about: {
      label: "// Ve Toi",
      title: "Toi La",
      titleHighlight: "Ai",
      description1: "Toi la mot lap trinh vien logic-first voi 2 nam kinh nghiem xay dung cac he thong backend vung chac. Cach tiep can cua toi ket hop tu duy phan tich voi giai quyet van de sang tao de xay dung cac giai phap khong chi hoat dong ma con co kha nang mo rong.",
      description2: "Tu kien truc he thong CRM den xay dung chatbot automation thong minh va trien khai cac he thong RAG AI tien tien, toi phat trien tot voi nhung thach thuc phuc tap.",
      description3: "Toi dam me kien truc sach, am anh voi hieu suat, va luon kham pha nhung cach moi de tan dung AI tao ra he thong thong minh hon.",
      highlights: ["kien truc backend", "toi uu hoa hieu suat", "giai phap AI"],
      specialties: [
        { title: "Kien Truc Backend", description: "Thiet ke he thong co kha nang mo rong, de bao tri voi nguyen tac clean code" },
        { title: "Thiet Ke & Toi Uu API", description: "Xay dung RESTful APIs voi hieu suat va bao mat toi uu" },
        { title: "Toi Uu Hieu Suat He Thong", description: "Profiling va toi uu hoa de dat hieu qua toi da" },
        { title: "Tich Hop AI", description: "Trien khai chatbot, he thong RAG, va tu dong hoa thong minh" },
      ],
    },
    skills: {
      label: "// Cong Nghe Su Dung",
      title1: "Ky Nang &",
      title2: "Cong Nghe",
      subtitle: "Tap hop cac cong cu va cong nghe toi su dung de hien thuc hoa y tuong",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Co So Du Lieu",
        tools: "Cong Cu",
      },
    },
    projects: {
      label: "// Du An Noi Bat",
      title1: "Du An",
      title2: "Tieu Bieu",
      subtitle: "Gioi thieu cac du an the hien chuyen mon cua toi trong phat trien backend, tich hop AI, va kien truc he thong",
      viewDetails: "Xem Chi Tiet",
      items: [
        { title: "He Thong CRM", description: "He thong quan ly quan he khach hang cap doanh nghiep voi phan tich nang cao, quy trinh tu dong hoa, va kien truc da nguoi thue." },
        { title: "Chatbot Da Nen Tang", description: "He thong chatbot thong minh ho tro nhieu nen tang voi xu ly ngon ngu tu nhien, nhan thuc ngu canh, va tich hop lien mach." },
        { title: "RAG AI Bot", description: "He thong RAG tien tien cho hoi dap tai lieu thong minh voi tim kiem vector va hieu ngu canh." },
        { title: "Bot OCR Hoa Don", description: "He thong xu ly hoa don tu dong su dung cong nghe OCR de trich xuat, xac thuc, va luu tru du lieu hoa don voi do chinh xac cao." },
      ],
    },
    experience: {
      label: "// Hanh Trinh Nghe Nghiep",
      title1: "Kinh Nghiem",
      title2: "Lam Viec",
      subtitle: "Hanh trinh nghe nghiep cua toi trong phat trien phan mem",
      fullTime: "Toan thoi gian",
      internship: "Thuc tap",
      items: [
        { role: "Backend Developer", description: "Dan dat phat trien backend cho cac ung dung doanh nghiep, thiet ke kien truc co kha nang mo rong, trien khai cac tinh nang AI, va toi uu hoa hieu suat he thong. Lam viec voi cac nhom chuc nang cheo de cung cap cac giai phap chat luong cao." },
        { role: "Frontend Intern", description: "Dong gop vao cac du an phat trien frontend, hoc cac thuc hanh phat trien web hien dai, va cong tac voi cac lap trinh vien cao cap de xay dung giao dien nguoi dung dap ung." },
      ],
    },
    contact: {
      label: "// Ket Noi",
      title1: "Lien",
      title2: "He",
      subtitle: "Ban co du an trong dau hoac muon thao luan ve co hoi? Toi rat mong nhan duoc phan hoi tu ban!",
      cta: "Hoac lien he truc tiep de tro chuyen nhanh",
      sendEmail: "Gui email cho toi",
      copied: "Da sao chep!",
    },
    footer: {
      builtWith: "Xay dung voi",
    },
  },
}

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "vi" : "en"))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
