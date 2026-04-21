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
      company: string
      overallPeriod: string
      type: "full-time" | "internship"
      roles: {
        title: string
        period: string
        points: string[]
        technologies: string[]
      }[]
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
      greeting: "// Hello, I'm Trần Văn Trí",
      title1: "Junior",
      title2: "Backend",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
      taglines: [
        "Backend Developer with nearly 2 years of experience in CRM systems, multi-platform chatbots, and AI-powered applications.",
        "Developing AI chatbot systems for Zalo, Messenger, WhatsApp, and more.",
        "Building RAG-based systems and optimizing backend architecture for scalability.",
      ],
    },
    about: {
      label: "// About Me",
      title: "Who I",
      titleHighlight: "Am",
      description1: "I'm a Backend Developer with nearly 2 years of experience specialized in CRM systems, multi-platform chatbots, and AI-powered applications. I possess strong logical thinking and a focus on system optimization to build robust solutions.",
      description2: "I've successfully built RAG-based chatbot systems for document retrieval and intelligent responses. My experience ranges from developing CRM modules to architecting real-time messaging features and caching mechanisms.",
      description3: "I'm looking to further grow in backend development, system architecture, and real-world AI applications. I thrive on solving complex problems that require a combination of analytical skills and modern technology.",
      highlights: ["CRM Systems", "Multi-platform Chatbots", "AI & RAG Integration"],
      specialties: [
        { title: "Backend Development", description: "Building scalable APIs with Node.js, NestJS, and PHP" },
        { title: "AI & Chatbots", description: "Developing multi-platform chatbot systems and RAG solutions" },
        { title: "Database Systems", description: "Optimizing PostgreSQL, MySQL, and MongoDB for performance" },
        { title: "Modern Tools", description: "Leveraging Docker, Google Cloud, and Prisma ORM" },
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
      subtitle: "A showcase of projects that demonstrate my expertise in backend development, chatbot systems, and AI integration",
      viewDetails: "View Details",
      items: [
        { title: "AI Chatbot Systems", description: "Developing AI chatbot systems for Zalo, Messenger, WhatsApp, and other platforms with automatic response features based on internal knowledge." },
        { title: "RAG-based Retrieval Bot", description: "Advanced chatbot systems for document retrieval and intelligent responses using vector search and contextual understanding." },
        { title: "Ticketing Dashboards", description: "Administrative dashboards for ticketing systems with complex state management and real-time data synchronization." },
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
        {
          company: "INNOCOM",
          overallPeriod: "06/2024 - Present",
          type: "full-time",
          roles: [
            {
              title: "Backend Developer",
              period: "03/2025 – Present",
              points: [
                "Develop AI chatbot systems for Zalo, Messenger, WhatsApp, and other platforms",
                "Build automatic response features based on company documents and internal knowledge",
                "Develop backend APIs, real-time messaging features, and caching mechanisms",
                "Build RAG-based chatbot systems for document retrieval and intelligent responses",
                "Process and chunk documents to improve search accuracy and answer quality",
                "Optimize backend architecture for scalability and performance"
              ],
              technologies: ["Node.js", "Express", "NestJS", "PostgreSQL", "Prisma ORM", "Redis", "Socket.IO", "PM2", "pgvector"]
            },
            {
              title: "Backend Developer",
              period: "06/2024 – 02/2025",
              points: [
                "Maintain and enhance CRM system features",
                "Fix bugs, debug system issues, and support daily operations",
                "Develop new modules based on business requirements",
                "Customize and optimize SQL queries to improve system performance"
              ],
              technologies: ["PHP", "jQuery", "MySQL"]
            }
          ]
        },
        {
          company: "ALTA SOFTWARE",
          overallPeriod: "02/2024 - 05/2024",
          type: "internship",
          roles: [
            {
              title: "Intern Frontend Developer",
              period: "02/2024 - 05/2024",
              points: [
                "Developed administrative dashboards for ticketing systems (managing ticket types, purchase dates, and statuses)",
                "Utilized ReactJS, TypeScript, and Redux to manage complex application states, ensuring seamless and accurate data flow",
                "Integrated Firebase for real-time data synchronization and user authentication"
              ],
              technologies: ["ReactJS", "TypeScript", "Redux", "Firebase"]
            }
          ]
        }
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
      greeting: "// Xin chào, tôi là Trần Văn Trí",
      title1: "Junior",
      title2: "Backend",
      viewWork: "Xem Dự Án",
      getInTouch: "Liên Hệ",
      taglines: [
        "Lập trình viên Backend với gần 2 năm kinh nghiệm trong các hệ thống CRM, chatbot đa nền tảng và các ứng dụng AI.",
        "Phát triển hệ thống AI chatbot cho Zalo, Messenger, WhatsApp...",
        "Xây dựng hệ thống chatbot dựa trên RAG và tối ưu hóa kiến trúc backend.",
      ],
    },
    about: {
      label: "// Về Tôi",
      title: "Tôi Là",
      titleHighlight: "Ai",
      description1: "Tôi là một Backend Developer với gần 2 năm kinh nghiệm thực chiến trong việc xây dựng các hệ thống CRM, chatbot đa nền tảng và các ứng dụng tích hợp AI. Tôi luôn đề cao tư duy logic và khả năng tối ưu hóa hệ thống.",
      description2: "Tôi đã trực tiếp tham gia phát triển các hệ thống AI chatbot thông minh, xây dựng tính năng phản hồi tự động dựa trên tri thức nội bộ và triển khai các hệ thống RAG (Retrieval-Augmented Generation) tiên tiến.",
      description3: "Tôi đam mê thiết kế kiến trúc backend có khả năng mở rộng tốt, am hiểu về cơ chế caching và tin nhắn thời gian thực. Tôi luôn không ngừng học hỏi để áp dụng công nghệ AI mới nhất vào thực tế.",
      highlights: ["hệ thống CRM", "AI chatbot đa nền tảng", "tích hợp RAG & LLM"],
      specialties: [
        { title: "Phát triển Backend", description: "Xây dựng APIs mạnh mẽ với Node.js, NestJS và PHP" },
        { title: "AI & Chatbots", description: "Phát triển hệ thống chatbot đa nền tảng và giải pháp RAG" },
        { title: "Hệ thống Cơ sở dữ liệu", description: "Tối ưu hóa PostgreSQL, MySQL và MongoDB" },
        { title: "Công cụ hiện đại", description: "Sử dụng thành thạo Docker, Google Cloud và Prisma ORM" },
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
      label: "// Dự Án Nổi Bật",
      title1: "Dự Án",
      title2: "Tiêu Biểu",
      subtitle: "Giới thiệu các dự án thể hiện chuyên môn của tôi trong phát triển backend, hệ thống chatbot, và tích hợp AI",
      viewDetails: "Xem Chi Tiết",
      items: [
        { title: "Hệ thống AI Chatbot", description: "Phát triển hệ thống AI chatbot cho Zalo, Messenger, WhatsApp với tính năng phản hồi tự động dựa trên tri thức công ty." },
        { title: "Bot RAG Truy xuất tài liệu", description: "Hệ thống chatbot nâng cao cho truy xuất tài liệu và phản hồi thông minh sử dụng tìm kiếm vector và hiểu ngữ cảnh." },
        { title: "Dashboard Quản lý Vé", description: "Dashboard quản trị cho hệ thống bán vé với quản lý trạng thái phức tạp và đồng bộ dữ liệu thời gian thực." },
      ],
    },
    experience: {
      label: "// Hành Trình Nghề Nghiệp",
      title1: "Kinh Nghiệm",
      title2: "Làm Việc",
      subtitle: "Hành trình nghề nghiệp của tôi trong phát triển phần mềm",
      fullTime: "Toàn thời gian",
      internship: "Thực tập",
      items: [
        {
          company: "INNOCOM",
          overallPeriod: "06/2024 - Hiện tại",
          type: "full-time",
          roles: [
            {
              title: "Backend Developer",
              period: "03/2025 – Hiện tại",
              points: [
                "Phát triển hệ thống AI chatbot cho các nền tảng Zalo, Messenger, WhatsApp",
                "Xây dựng tính năng phản hồi tự động dựa trên tài liệu công ty và kho tri thức nội bộ",
                "Phát triển Backend APIs, tính năng tin nhắn thời gian thực và cơ chế caching",
                "Xây dựng hệ thống chatbot dựa trên RAG để truy xuất tài liệu và phản hồi thông minh",
                "Xử lý và chunk tài liệu để cải thiện độ chính xác tìm kiếm và chất lượng câu trả lời",
                "Tối ưu hóa kiến trúc backend cho khả năng mở rộng và hiệu suất"
              ],
              technologies: ["Node.js", "Express", "NestJS", "PostgreSQL", "Prisma ORM", "Redis", "Socket.IO", "PM2", "pgvector"]
            },
            {
              title: "Backend Developer",
              period: "06/2024 – 02/2025",
              points: [
                "Duy trì và nâng cấp các tính năng của hệ thống CRM",
                "Sửa lỗi, gỡ lỗi các vấn đề của hệ thống và hỗ trợ vận hành hàng ngày",
                "Phát triển các module mới dựa trên yêu cầu kinh doanh",
                "Thử nghiệm và tối ưu hóa các truy vấn SQL để cải thiện hiệu suất hệ thống"
              ],
              technologies: ["PHP", "jQuery", "MySQL"]
            }
          ]
        },
        {
          company: "ALTA SOFTWARE",
          overallPeriod: "02/2024 - 05/2024",
          type: "internship",
          roles: [
            {
              title: "Intern Frontend Developer",
              period: "02/2024 - 05/2024",
              points: [
                "Phát triển bảng điều khiển quản trị cho hệ thống bán vé (quản lý loại vé, ngày mua và trạng thái)",
                "Sử dụng ReactJS, TypeScript và Redux để quản lý các trạng thái ứng dụng phức tạp, đảm bảo luồng dữ liệu mượt mà và chính xác",
                "Tích hợp Firebase để đồng bộ hóa dữ liệu thời gian thực và xác thực người dùng"
              ],
              technologies: ["ReactJS", "TypeScript", "Redux", "Firebase"]
            }
          ]
        }
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
