import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FloatingElement {
  id: number
  emoji: string
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function AnimatedBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  const foodEmojis = ['🍎', '🥕', '🌾', '🌶️', '🥜', '🍇', '🥔', '🌽', '🍊', '🥬', '🫐', '🍌']

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = []
      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          emoji: foodEmojis[Math.floor(Math.random() * foodEmojis.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 30 + 20,
          duration: Math.random() * 10 + 15,
          delay: Math.random() * 5
        })
      }
      setElements(newElements)
    }

    generateElements()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute opacity-10"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.size}px`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  )
}
