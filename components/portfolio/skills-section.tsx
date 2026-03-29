"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface Skill {
  name: string
  icon: string
  color: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "⬡", color: "#68A063" },
      { name: "NestJS", icon: "◈", color: "#E0234E" },
      { name: "PHP", icon: "◇", color: "#777BB4" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "ReactJS", icon: "⚛", color: "#61DAFB" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: "◎", color: "#336791" },
      { name: "MySQL", icon: "◉", color: "#4479A1" },
      { name: "Redis", icon: "◆", color: "#DC382D" },
      { name: "MongoDB", icon: "◐", color: "#47A248" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Prisma", icon: "△", color: "#2D3748" },
      { name: "Firebase", icon: "◈", color: "#FFCA28" },
      { name: "Git", icon: "◇", color: "#F05032" },
    ],
  },
]

function SkillBadge({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.1, 
        rotate: [0, -5, 5, 0],
        boxShadow: `0 0 20px ${skill.color}40`
      }}
      className="relative group cursor-pointer"
    >
      <div 
        className="px-4 py-3 rounded-xl glass flex items-center gap-3 transition-all duration-300"
        style={{ 
          borderColor: `${skill.color}30`,
        }}
      >
        <span 
          className="text-xl"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </span>
        <span className="text-sm font-medium text-foreground group-hover:text-neon-cyan transition-colors">
          {skill.name}
        </span>
      </div>
      
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
        style={{ backgroundColor: `${skill.color}20` }}
      />
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 lg:py-32 relative" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider">
            {"// Technical Stack"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Technologies
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A curated set of tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-neon-cyan font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-cyan" />
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge 
                    key={skill.name} 
                    skill={skill} 
                    index={categoryIndex * 4 + skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech decorations */}
        <div className="hidden lg:block absolute top-1/4 right-10 opacity-20">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="text-6xl text-neon-cyan"
          >
            {"</>"}
          </motion.div>
        </div>
        <div className="hidden lg:block absolute bottom-1/4 left-10 opacity-20">
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-6xl text-neon-purple font-mono"
          >
            {"{ }"}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
