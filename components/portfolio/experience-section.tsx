"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"

interface Experience {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
  type: "full-time" | "internship"
}

const experiences: Experience[] = [
  {
    company: "Innocom",
    role: "Backend Developer",
    period: "06/2024 - Present",
    description: "Leading backend development for enterprise applications, designing scalable architectures, implementing AI-powered features, and optimizing system performance. Working with cross-functional teams to deliver high-quality solutions.",
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Jquery", "MySQL", "PHP","AI/ML", "Google Cloud Storage"],
    type: "full-time",
  },
  {
    company: "Alta Software",
    role: "Frontend Intern",
    period: "2022 - 2023",
    description: "Contributed to frontend development projects, learned modern web development practices, and collaborated with senior developers to build responsive user interfaces.",
    technologies: ["React", "TypeScript", "Antd Design", "Firebase"],
    type: "internship",
  },
]

function TimelineItem({ experience, index, isLast }: { experience: Experience; index: number; isLast: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 gap-8 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-neon-cyan to-neon-purple"
          />
        )}
      </div>

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-background border-2 border-neon-cyan z-10"
      >
        <div className="absolute inset-0 rounded-full bg-neon-cyan/50 animate-ping" />
      </motion.div>

      {/* Content - alternating sides on desktop */}
      <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 rounded-2xl glass transition-all duration-300 hover:border-neon-cyan/50"
        >
          {/* Header */}
          <div className={`flex items-start gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-neon-cyan" />
            </div>
            <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
              <h3 className="text-xl font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                {experience.role}
              </h3>
              <p className="text-neon-purple font-semibold">{experience.company}</p>
            </div>
          </div>

          {/* Period */}
          <div className={`flex items-center gap-2 text-sm text-muted-foreground mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
            <Calendar size={14} />
            <span>{experience.period}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              experience.type === "full-time" 
                ? "bg-neon-cyan/20 text-neon-cyan" 
                : "bg-neon-purple/20 text-neon-purple"
            }`}>
              {experience.type === "full-time" ? "Full-time" : "Internship"}
            </span>
          </div>

          {/* Description */}
          <p className={`text-muted-foreground text-sm leading-relaxed mt-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
            {experience.description}
          </p>

          {/* Technologies */}
          <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Empty column for alternating layout */}
      {index % 2 === 0 && <div className="hidden md:block" />}
    </motion.div>
  )
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 lg:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/2 h-96 bg-neon-purple/5 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/2 h-96 bg-neon-cyan/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider">
            {"// Career Journey"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.company}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
