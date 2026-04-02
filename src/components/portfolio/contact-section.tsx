"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Github, Facebook, Copy, Check, Send } from "lucide-react"

interface ContactLink {
  name: string
  icon: React.ElementType
  href: string
  value: string
  color: string
  copyable?: boolean
}

const contactLinks: ContactLink[] = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:tranvantri270802@gmail.com",
    value: "tranvantri270802@gmail.com",
    color: "#EA4335",
    copyable: true,
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/TranVanTri202",
    value: "github.com/TranVanTri202",
    color: "#ffffff",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/trivan2002",
    value: "facebook.com/trivan2002",
    color: "#1877F2",
  },
]

function ContactCard({ link, index }: { link: ContactLink; index: number }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    if (!link.copyable) return
    e.preventDefault()

    try {
      await navigator.clipboard.writeText(link.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      console.error("Failed to copy")
    }
  }

  const Icon = link.icon

  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative block p-6 rounded-2xl glass transition-all duration-300 hover:border-neon-cyan/50"
      onClick={link.copyable ? handleCopy : undefined}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: link.color }}
      />

      <div className="relative flex items-center gap-4">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${link.color}20` }}
        >
          <Icon
            className="w-7 h-7 transition-colors duration-300"
            style={{ color: link.color }}
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
            {link.name}
          </h3>
          <p className="text-sm text-muted-foreground font-mono">
            {link.value}
          </p>
        </div>

        {/* Copy/External indicator */}
        <div className="flex-shrink-0">
          {link.copyable ? (
            <motion.div
              animate={{ scale: copied ? [1, 1.2, 1] : 1 }}
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
              )}
            </motion.div>
          ) : (
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <Send className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
            </div>
          )}
        </div>
      </div>

      {/* Copy feedback */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-green-500"
        >
          Copied to clipboard!
        </motion.div>
      )}
    </motion.a>
  )
}

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 lg:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/[0.03] to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-purple/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider">
            {"// Let's Connect"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities?
            I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto grid gap-4">
          {contactLinks.map((link, index) => (
            <ContactCard key={link.name} link={link} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Or reach out directly for a quick chat
          </p>
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-background font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(80,200,220,0.5)]"
          >
            <Mail size={20} />
            Send me an email
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
