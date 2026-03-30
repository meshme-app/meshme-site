"use client"

import { useEffect, useRef } from "react"

export default function CGGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrid()
    }

    // Draw the grid
    const drawGrid = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background - Red color for Corporate Games
      ctx.fillStyle = "#B91C1C"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = 1

      const cellSize = 50
      const distortion = 5

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += cellSize) {
        ctx.beginPath()
        for (let y = 0; y <= canvas.height; y += 10) {
          const offsetX = x + (Math.random() - 0.5) * distortion
          if (y === 0) {
            ctx.moveTo(offsetX, y)
          } else {
            ctx.lineTo(offsetX, y)
          }
        }
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += cellSize) {
        ctx.beginPath()
        for (let x = 0; x <= canvas.width; x += 10) {
          const offsetY = y + (Math.random() - 0.5) * distortion
          if (x === 0) {
            ctx.moveTo(x, offsetY)
          } else {
            ctx.lineTo(x, offsetY)
          }
        }
        ctx.stroke()
      }
    }

    // Initial setup
    updateSize()

    // Handle resize
    window.addEventListener("resize", updateSize)

    return () => {
      window.removeEventListener("resize", updateSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" style={{ pointerEvents: "none" }} />
}
