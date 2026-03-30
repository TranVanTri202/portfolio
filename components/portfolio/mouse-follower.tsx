"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function MouseFollower() {
  const [isVisible, setIsVisible] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Fast follower (the center dot)
  const dotX = useSpring(mouseX, { damping: 30, stiffness: 200 })
  const dotY = useSpring(mouseY, { damping: 30, stiffness: 200 })

  // Slow follower (the outer glow - more "laggy" feel)
  const glowX = useSpring(mouseX, { damping: 20, stiffness: 80 })
  const glowY = useSpring(mouseY, { damping: 20, stiffness: 80 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [mouseX, mouseY, isVisible])

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* 1. Large Outer Glow (Very smooth) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 0.15 : 0,
        }}
        className="w-[500px] h-[500px] rounded-full blur-[120px] bg-neon-cyan/80 transition-opacity duration-300"
      />
      
      {/* 2. Middle Vibrant Core (Purple) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 0.2 : 0,
          scale: [1, 1.1, 1],
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="w-[250px] h-[250px] rounded-full blur-[80px] bg-neon-purple/90 transition-opacity duration-300"
      />

      {/* 3. Small Tracking Circle (Ghost Ring) */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 0.6 : 0,
        }}
        className="w-8 h-8 rounded-full border border-neon-cyan ring-1 ring-neon-purple/30 blur-[1px] transition-opacity duration-300"
      />

      {/* 4. The Main Sharp Cursor Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#00D8FF] mix-blend-difference z-50 transition-opacity duration-500"
      />
    </div>
  )
}
