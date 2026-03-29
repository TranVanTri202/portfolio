"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Server, Bot, Code2 } from "lucide-react"

const highlights = [
  { text: "backend architecture", color: "text-neon-cyan" },
  { text: "performance optimization", color: "text-neon-purple" },
  { text: "AI-powered solutions", color: "text-neon-pink" },
]

const specialties = [
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Designing scalable, maintainable systems with clean code principles",
  },
  {
    icon: Zap,
    title: "API Design & Optimization",
    description: "Building RESTful APIs with optimal performance and security",
  },
  {
    icon: Code2,
    title: "System Performance Tuning",
    description: "Profiling and optimizing for maximum efficiency",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Implementing chatbots, RAG systems, and intelligent automation",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            {"// About Me"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Who I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Am
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
              I&apos;m a{" "}
              <span className="text-foreground font-semibold">logic-first developer</span>{" "}
              with 2 years of experience crafting robust backend systems. My approach 
              combines analytical thinking with creative problem-solving to build 
              solutions that don&apos;t just work—they{" "}
              <span className="text-neon-cyan">scale</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From architecting{" "}
              <motion.span
                className="text-neon-cyan font-semibold cursor-pointer"
                whileHover={{ textShadow: "0 0 10px rgba(80, 200, 220, 0.8)" }}
              >
                CRM systems
              </motion.span>{" "}
              to building intelligent{" "}
              <motion.span
                className="text-neon-purple font-semibold cursor-pointer"
                whileHover={{ textShadow: "0 0 10px rgba(168, 85, 247, 0.8)" }}
              >
                chatbot automation
              </motion.span>{" "}
              and implementing cutting-edge{" "}
              <motion.span
                className="text-neon-pink font-semibold cursor-pointer"
                whileHover={{ textShadow: "0 0 10px rgba(236, 72, 153, 0.8)" }}
              >
                RAG AI systems
              </motion.span>
              , I thrive on complex challenges that push the boundaries of what&apos;s 
              possible.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m passionate about{" "}
              <span className="text-foreground font-semibold">clean architecture</span>,{" "}
              obsessed with <span className="text-foreground font-semibold">performance</span>,{" "}
              and always exploring new ways to leverage AI to create smarter systems.
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
