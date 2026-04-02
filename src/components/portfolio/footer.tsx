"use client"

import { motion } from "framer-motion"
import { Heart, Code2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl font-bold text-neon-cyan"
          >
            {"<Dev />"}
          </motion.div>

          {/* Made with */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-neon-pink fill-neon-pink" />
            <span>and</span>
            <Code2 className="w-4 h-4 text-neon-cyan" />
          </motion.div>

          {/* Year */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
