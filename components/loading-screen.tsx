"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const text = "AB Classes"

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative flex gap-1 text-6xl md:text-8xl font-serif font-bold tracking-tight">
        {text.split("").map((char, index) => {
          const charProgress = Math.max(0, Math.min(100, (progress - index * 8) * 1.5))

          return (
            <span key={index} className="relative inline-block" style={{ minWidth: char === " " ? "0.5em" : "auto" }}>
              {/* Background text (gray) */}
              <span className="text-muted-foreground/20">{char}</span>

              {/* Foreground text with clip animation */}
              <span
                className="absolute inset-0 text-primary"
                style={{
                  clipPath: `inset(${100 - charProgress}% 0 0 0)`,
                  transition: "clip-path 0.1s ease-out",
                }}
              >
                {char}
              </span>
            </span>
          )
        })}
      </div>

      <div className="mt-8 w-64 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-100 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-muted-foreground animate-pulse">Loading your learning journey...</p>
    </div>
  )
}
