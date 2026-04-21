"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"

interface ExperienceRole {
  title: string
  period: string
  points: string[]
  technologies: string[]
}

interface ExperienceItem {
  company: string
  overallPeriod: string
  type: "full-time" | "internship"
  roles: ExperienceRole[]
}

function TimelineItem({ experience, index, isLast }: { experience: ExperienceItem; index: number; isLast: boolean }) {
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

      {/* Content - alternating sides on desktop, but internal text is ALWAYS left-aligned */}
      <div className={`${index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"}`}>
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 rounded-2xl glass transition-all duration-300 hover:border-neon-cyan/50"
        >
          {/* Company Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-neon-cyan" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple inline-block">
                {experience.company}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <Calendar size={14} />
                <span>{experience.overallPeriod}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  experience.type === "full-time" 
                    ? "bg-neon-cyan/20 text-neon-cyan" 
                    : "bg-neon-purple/20 text-neon-purple"
                }`}>
                  {experience.type}
                </span>
              </div>
            </div>
          </div>

          {/* Roles Container */}
          <div className="space-y-8">
            {experience.roles.map((role, roleIndex) => (
              <div key={role.period} className="relative">
                {/* Visual separator for multiple roles */}
                {roleIndex > 0 && (
                  <div className="absolute -top-4 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                )}
                
                <div className="pt-2">
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-neon-cyan transition-colors">
                    {role.title}
                  </h4>
                  <p className="text-xs font-mono text-neon-purple mb-3">
                    {role.period}
                  </p>
                  
                  {/* Bullet Points - ALWAYS left aligned */}
                  <ul className="space-y-2 mb-4">
                    {role.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 size={14} className="mt-1 flex-shrink-0 text-neon-cyan" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies for this role - ALWAYS left aligned */}
                  <div className="flex flex-wrap gap-1.5">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-secondary/50 text-secondary-foreground border border-border/50 group-hover:border-neon-cyan/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-24 lg:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/2 h-96 bg-neon-purple/5 rounded-full blur-[128px] hidden dark:block" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/2 h-96 bg-neon-cyan/5 rounded-full blur-[128px] hidden dark:block" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider">
            {t.experience.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            {t.experience.title1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              {t.experience.title2}
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {t.experience.items.map((experience, index) => (
            <TimelineItem
              key={experience.company}
              experience={experience as any} // Casting for simplicity with the updated Translations interface
              index={index}
              isLast={index === t.experience.items.length - 1}
            />
          ))}
        </div>

        {/* Floating decorations */}
        <div className="hidden lg:block absolute top-10 left-10 opacity-10 pointer-events-none">
          <motion.div
            animate={{
              y: [0, 25, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="text-7xl text-neon-cyan font-mono"
          >
            {";"}
          </motion.div>
        </div>
        <div className="hidden lg:block absolute bottom-1/2 right-0 opacity-10 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 9, repeat: Infinity }}
            className="text-6xl text-neon-purple font-mono"
          >
            {"=>"}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

