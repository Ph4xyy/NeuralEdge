"use client"

import { useEffect, useRef } from "react"

export function AuroraLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    let animationFrame: number
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = "rgba(139, 92, 246, 0.15)"
      ctx.lineWidth = 1

      const lineCount = 8
      const spacing = canvas.height / lineCount

      for (let i = 0; i < lineCount; i++) {
        const y = i * spacing + (spacing / 2)
        ctx.beginPath()
        ctx.moveTo(0, y)

        const segments = 50
        for (let j = 0; j <= segments; j++) {
          const x = (canvas.width / segments) * j
          const wave = Math.sin((x / canvas.width) * Math.PI * 4 + time + i) * 15
          const perlin = Math.sin((x / 200) + time * 0.5 + i) * 8
          ctx.lineTo(x, y + wave + perlin)
        }

        ctx.stroke()
      }

      time += 0.01
      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  )
}

