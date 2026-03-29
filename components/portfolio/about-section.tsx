"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Server, Bot, Code2 } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"

const specialtyIcons = [Server, Zap, Code2, Bot]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const highlights = t.about.highlights.map((text, index) => ({
    text,
    color: index === 0 ? "text-neon-cyan" : index === 1 ? "text-neon-purple" : "text-neon-pink"
  }))

  const specialties = t.about.specialties.map((specialty, index) => ({
    ...specialty,
    icon: specialtyIcons[index]
  }))

  return (
    <section id="about" className="py-24 lg:py-32 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider">
            {t.about.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            {t.about.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              {t.about.titleHighlight}
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description1}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description2}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description3}
            </p>

            {/* Animated highlights */}
            <div className="flex flex-wrap gap-3 pt-4">
              {highlights.map((highlight, index) => (
                <motion.span
                  key={highlight.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-full glass ${highlight.color} font-mono text-sm cursor-default`}
                >
                  {highlight.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Specialties Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl glass group cursor-pointer transition-all duration-300 hover:border-neon-cyan/50"
              >
                <specialty.icon className="w-10 h-10 text-neon-cyan mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
                  {specialty.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
