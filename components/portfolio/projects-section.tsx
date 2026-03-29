"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Server, Bot, FileText, MessageSquare } from "lucide-react"

interface Project {
  title: string
  description: string
  techStack: string[]
  icon: React.ElementType
  gradient: string
  links: {
    details?: string
    github?: string
  }
}

const projects: Project[] = [
  {
    title: "CRM System",
    description: "Enterprise-grade customer relationship management system with advanced analytics, automated workflows, and multi-tenant architecture.",
    techStack: ["PHP", "MySQL", "Redis", "REST API"],
    icon: Server,
    gradient: "from-blue-500/20 to-cyan-500/20",
    links: {
      details: "#",
      github: "#",
    },
  },
  {
    title: "Multi-platform Chatbot",
    description: "Intelligent chatbot system supporting multiple platforms with natural language processing, context awareness, and seamless integration.",
    techStack: ["Node.js", "PostgreSQL", "Redis", "WebSocket"],
    icon: MessageSquare,
    gradient: "from-purple-500/20 to-pink-500/20",
    links: {
      details: "#",
      github: "#",
    },
  },
  {
    title: "RAG AI Bot",
    description: "Advanced retrieval-augmented generation system for intelligent document Q&A with vector search and contextual understanding.",
    techStack: ["NestJS", "Prisma", "Vector DB", "OpenAI"],
    icon: Bot,
    gradient: "from-green-500/20 to-emerald-500/20",
    links: {
      details: "#",
      github: "#",
    },
  },
  {
    title: "Invoice OCR Bot",
    description: "Automated invoice processing system using OCR technology to extract, validate, and store invoice data with high accuracy.",
    techStack: ["NestJS", "Supabase", "OCR", "TypeScript"],
    icon: FileText,
    gradient: "from-orange-500/20 to-amber-500/20",
    links: {
      details: "#",
      github: "#",
    },
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full p-6 rounded-2xl glass overflow-hidden transition-all duration-500 hover:border-neon-cyan/50">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-6"
          >
            <Icon className="w-7 h-7 text-neon-cyan" />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.links.details && (
              <motion.a
                href={project.links.details}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-cyan/80 transition-colors"
              >
                <ExternalLink size={16} />
                View Details
              </motion.a>
            )}
            {project.links.github && (
              <motion.a
                href={project.links.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={16} />
                GitHub
              </motion.a>
            )}
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 to-transparent" />
        </div>
      </div>

      {/* Border glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500 -z-10" />
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 lg:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.02] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider">
            {"// Selected Work"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of projects that demonstrate my expertise in backend development, 
            AI integration, and system architecture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
