import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FallingFruit {
  id: number
  emoji: string
  x: number
  delay: number
  duration: number
}

export default function FallingFruits() {
  const [fruits, setFruits] = useState<FallingFruit[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const fruitEmojis = ['🍎','🥦','🍇','🍓','🥑','🫐','🥭','🍑','🍒','🌽','🧄','🥝','🧅','🍊','🫛','🍅']

  useEffect(() => {
    const generateFruits = () => {
      const newFruits: FallingFruit[] = []
      for (let i = 0; i < 8; i++) {
        newFruits.push({
          id: i,
          emoji: fruitEmojis[Math.floor(Math.random() * fruitEmojis.length)],
          x: Math.random() * 100,
          delay: Math.random() * 3,
          duration: Math.random() * 3 + 4
        })
      }
      setFruits(newFruits)
    }

    generateFruits()
    
    // Trigger animation on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 100 && !isVisible) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {fruits.map((fruit) => (
        <motion.div
          key={fruit.id}
          className="absolute text-4xl"
          style={{ left: `${fruit.x}%` }}
          initial={{ y: -100, rotate: 0, opacity: 0 }}
          animate={{ 
            y: window.innerHeight + 100, 
            rotate: 360,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: fruit.duration,
            delay: fruit.delay,
            ease: "easeIn",
            repeat: Infinity,
            repeatDelay: 8
          }}
        >
          {fruit.emoji}
        </motion.div>
      ))}
    </div>
  )
}
