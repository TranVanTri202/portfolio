"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"

// Tech icons with colors
const techIcons = [
  { name: "Node.js", icon: "N", color: "#68A063" },
  { name: "NestJS", icon: "Nest", color: "#E0234E" },
  { name: "PostgreSQL", icon: "PG", color: "#336791" },
  { name: "Redis", icon: "R", color: "#DC382D" },
  { name: "React", icon: "Re", color: "#61DAFB" },
  { name: "Firebase", icon: "F", color: "#FFCA28" },
]

// Replace this URL with your avatar
const AVATAR_URL = "https://s240-ava-talk.zadn.vn/8/0/1/9/8/240/fe74feab54b0a516a0a6aaf1e7f38839.jpg"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] animate-pulse hidden dark:block" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] animate-pulse hidden dark:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            {/* Animated gradient border */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-1 rounded-full bg-background" />
              </motion.div>

              {/* Floating animation */}
              <motion.div
                className="absolute inset-2 rounded-full overflow-hidden"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={AVATAR_URL}
                  alt="Developer Avatar"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-neon-cyan/20 blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-neon-cyan font-mono text-sm md:text-base tracking-wider">
                {t.hero.greeting}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2 mb-4"
            >
              <span className="text-foreground">{t.hero.title1}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink">
                {t.hero.title2}
              </span>
            </motion.h1>

            <div
              className="mb-8"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-mono">
                {t.hero.taglines[0]}
              </p>
            </div>

            {/* Tech icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="group relative"
                >
                  <div
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center font-mono text-sm font-bold cursor-pointer transition-all duration-300 group-hover:shadow-lg"
                    style={{
                      color: tech.color,
                    }}
                  >
                    {tech.icon}
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-muted-foreground whitespace-nowrap">
                    {tech.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-12 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground font-semibold text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(80,200,220,0.5)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.viewWork}
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-xl border border-neon-cyan/50 text-neon-cyan font-semibold text-center transition-all duration-300 hover:bg-neon-cyan/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.getInTouch}
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
