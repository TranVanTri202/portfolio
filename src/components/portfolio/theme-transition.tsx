"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/providers/theme-provider"

export function ThemeTransition() {
  const { theme, isTransitioning } = useTheme()

  // During transition, we need to know what the TARGET theme background is
  // But since the theme state switches halfway, we can just use the current theme
  // combined with the timing of the clip-path.
  const overlayBg = theme === "dark" ? "#0a0a12" : "#ffffff"

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* The Wipe Layer: Needs to be OPAQUE so we don't see the underlying change until reveal */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            style={{ backgroundColor: overlayBg }}
            className="absolute inset-0"
          >
            {/* The Leading Line (Magic Wand) */}
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              className="absolute top-0 bottom-0 w-[2px] flex items-center justify-center translate-x-[-100%]"
            >
              <div className="h-full w-full bg-neon-cyan shadow-[0_0_40px_rgba(0,216,255,1)]" />
              <div className="absolute h-48 w-1 bg-white blur-[2px]" />
              {/* Optional: Glow trail */}
              <div className="absolute top-0 bottom-0 left-[-100px] w-48 bg-gradient-to-r from-transparent to-neon-cyan/20 blur-xl" />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
