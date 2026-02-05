"use client"

import { useEffect, useState } from "react"

interface Bean {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  blur: number
  opacity: number
}

export function CoffeeBeans() {
  const [beans, setBeans] = useState<Bean[]>([])

  useEffect(() => {
    const newBeans: Bean[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 8,
      size: 12 + Math.random() * 16,
      blur: Math.random() > 0.6 ? 2 + Math.random() * 3 : 0,
      opacity: 0.15 + Math.random() * 0.25,
    }))
    setBeans(newBeans)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {beans.map((bean) => (
        <div
          key={bean.id}
          className="absolute animate-fall"
          style={{
            left: `${bean.left}%`,
            animationDelay: `${bean.delay}s`,
            animationDuration: `${bean.duration}s`,
            filter: bean.blur > 0 ? `blur(${bean.blur}px)` : undefined,
            opacity: bean.opacity,
          }}
        >
          <svg
            width={bean.size}
            height={bean.size * 1.4}
            viewBox="0 0 24 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="12"
              cy="17"
              rx="10"
              ry="14"
              className="fill-[hsl(30,30%,25%)]"
            />
            <path
              d="M12 5C12 5 8 12 8 17C8 22 12 29 12 29"
              className="stroke-[hsl(30,30%,35%)]"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
