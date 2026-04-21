"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Element {
  id: number
  char: string
  x: string
  y: string
  duration: number
  delay: number
  scale: number
  rotate: number
  moveX: number
  moveY: number
}

const symbols = ["{", "}", "</>", "=>", ";", "(", ")", "[]", "&&", "||", "++", "?", ":", "!", "=>", "const", "let"]

export function FloatingElements() {
  const [elements, setElements] = useState<Element[]>([])

  useEffect(() => {
    // Tăng số lượng phần tử lên 30 để phong phú hơn
    const newElements = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      char: symbols[Math.floor(Math.random() * symbols.length)],
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      duration: 20 + Math.random() * 30, // Chuyển động chậm và mượt hơn
      delay: Math.random() * -30,
      scale: 0.5 + Math.random() * 1.5,
      rotate: Math.random() * 360,
      moveX: (Math.random() - 0.5) * 200, // Di chuyển ngang ngẫu nhiên
      moveY: (Math.random() - 0.5) * 200, // Di chuyển dọc ngẫu nhiên
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          // Tăng độ đậm nhạt (opacity) để dễ nhìn thấy hơn
          className="absolute font-mono text-neon-cyan/20 dark:text-neon-cyan/15 select-none"
          initial={{ 
            left: el.x, 
            top: el.y, 
            rotate: el.rotate, 
            scale: el.scale,
            opacity: 0 
          }}
          animate={{ 
            x: [0, el.moveX, 0],
            y: [0, el.moveY, 0],
            rotate: el.rotate + 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear",
          }}
          style={{
            fontSize: `${16 + Math.random() * 30}px`,
            filter: "blur(0.5px)",
          }}
        >
          {el.char}
        </motion.div>
      ))}
    </div>
  )
}
