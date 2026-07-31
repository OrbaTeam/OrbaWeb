import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulse: number
}

const PARTICLE_COUNT = 85
const CONNECTION_DISTANCE = 150
const MOUSE_REPEL_DISTANCE = 130
const MOUSE_REPEL_FORCE = 0.4
const SPEED = 0.4

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const particles = useRef<Particle[]>([])
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current!
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawn = () => {
      particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        radius: Math.random() * 1.5 + 0.8,
        pulse: Math.random() * Math.PI * 2,
      }))
    }
    spawn()

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    const onMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 }
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const pts = particles.current

      // Update positions
      for (const p of pts) {
        p.pulse += 0.02
        // Mouse repulsion physics
        const dx = p.x - mouse.current.x
        const dy = p.y - mouse.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_REPEL_DISTANCE && dist > 0) {
          const force = ((MOUSE_REPEL_DISTANCE - dist) / MOUSE_REPEL_DISTANCE) * MOUSE_REPEL_FORCE
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        const cap = SPEED * 2.8
        if (speed > cap) {
          p.vx = (p.vx / speed) * cap
          p.vy = (p.vy / speed) * cap
        }

        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
        if (p.y < -10) p.y = canvas.height + 10
        if (p.y > canvas.height + 10) p.y = -10
      }

      // Draw particle-to-particle mesh links
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.35
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`
            ctx.lineWidth = 0.75
            ctx.stroke()
          }
        }
      }

      // Draw mouse connection links
      for (const p of pts) {
        const dx = p.x - mouse.current.x
        const dy = p.y - mouse.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CONNECTION_DISTANCE * 1.3) {
          const alpha = (1 - dist / (CONNECTION_DISTANCE * 1.3)) * 0.55
          ctx.beginPath()
          ctx.moveTo(mouse.current.x, mouse.current.y)
          ctx.lineTo(p.x, p.y)
          ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`
          ctx.lineWidth = 0.95
          ctx.stroke()
        }
      }

      // Draw particles with subtle glow
      for (const p of pts) {
        const currentRadius = p.radius + Math.sin(p.pulse) * 0.3
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(0.5, currentRadius), 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(186, 230, 253, 0.85)'
        ctx.fill()
      }

      // Draw mouse cursor glowing aura
      if (mouse.current.x > -100) {
        const grad = ctx.createRadialGradient(
          mouse.current.x, mouse.current.y, 0,
          mouse.current.x, mouse.current.y, 90
        )
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.25)')
        grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.08)')
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.beginPath()
        ctx.arc(mouse.current.x, mouse.current.y, 90, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Background Gradient Base */}
      <div 
        className="absolute inset-0 bg-[#05070d] transition-colors duration-700" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(56, 189, 248, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.07) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.05) 0%, transparent 60%)
          `
        }}
      />

      {/* Grid line texture overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Dynamic Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  )
}
