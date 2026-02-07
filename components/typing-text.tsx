"use client"

import { useEffect, useState } from "react"

interface TypingTextProps {
  text: string
  className?: string
  duration?: number
  onComplete?: () => void
}

export function TypingText({ text, className = "", duration = 1500, onComplete }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    
    if (prefersReducedMotion) {
      // If reduced motion is preferred, show full text immediately
      setDisplayedText(text)
      setIsComplete(true)
      onComplete?.()
      return
    }

    // Calculate delay per character for smooth typing
    const chars = text.length
    const delayPerChar = duration / chars
    
    let currentIndex = 0
    let animationFrameId: number
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - lastTime

      if (elapsed >= delayPerChar) {
        currentIndex++
        setDisplayedText(text.slice(0, currentIndex))
        lastTime = currentTime

        if (currentIndex >= chars) {
          setIsComplete(true)
          onComplete?.()
          return
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [text, duration, onComplete])

  return (
    <span className={className}>
      {displayedText}
      <span 
        className={`inline-block w-[2px] h-[1.1em] bg-current align-text-bottom ml-[1px] ${
          isComplete ? 'opacity-0' : 'animate-cursor-blink'
        } transition-opacity duration-200`}
        aria-hidden="true"
      />
    </span>
  )
}
