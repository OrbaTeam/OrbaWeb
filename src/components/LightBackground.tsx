import { useEffect, useRef, useState } from 'react'

const SHAPES = [
  // Layer 1 — large, slow, back
  { id: 1, type: 'circle', x: 8, y: 10, size: 320, color: 'rgba(37, 99, 235, 0.04)', blur: 0, speed: 0.012, phase: 0 },
  { id: 2, type: 'rect', x: 72, y: 5, size: 200, color: 'rgba(59, 130, 246, 0.04)', blur: 0, speed: 0.009, phase: 1.2, rotate: 22 },
  { id: 3, type: 'circle', x: 85, y: 70, size: 260, color: 'rgba(147, 197, 253, 0.06)', blur: 0, speed: 0.011, phase: 2.4 },
  { id: 4, type: 'triangle', x: 45, y: 80, size: 180, color: 'rgba(219, 234, 254, 0.3)', blur: 0, speed: 0.008, phase: 0.8 },

  // Layer 2 — medium, mid-depth
  { id: 5, type: 'ring', x: 20, y: 55, size: 160, color: 'rgba(37, 99, 235, 0.08)', blur: 0, speed: 0.016, phase: 3.1 },
  { id: 6, type: 'rect', x: 60, y: 30, size: 120, color: 'rgba(96, 165, 250, 0.06)', blur: 0, speed: 0.014, phase: 1.7, rotate: -15 },
  { id: 7, type: 'circle', x: 38, y: 20, size: 90, color: 'rgba(191, 219, 254, 0.25)', blur: 0, speed: 0.018, phase: 4.0 },
  { id: 8, type: 'ring', x: 78, y: 50, size: 130, color: 'rgba(59, 130, 246, 0.10)', blur: 0, speed: 0.013, phase: 2.0 },
  { id: 9, type: 'triangle', x: 15, y: 78, size: 100, color: 'rgba(147, 197, 253, 0.2)', blur: 0, speed: 0.017, phase: 5.1 },

  // Layer 3 — small, fast, front
  { id: 10, type: 'dot', x: 50, y: 45, size: 16, color: 'rgba(37, 99, 235, 0.18)', blur: 0, speed: 0.022, phase: 0.3 },
  { id: 11, type: 'dot', x: 30, y: 35, size: 12, color: 'rgba(59, 130, 246, 0.20)', blur: 0, speed: 0.025, phase: 1.5 },
  { id: 12, type: 'dot', x: 70, y: 65, size: 14, color: 'rgba(96, 165, 250, 0.18)', blur: 0, speed: 0.020, phase: 3.3 },

  // Panel cards — glassy mid-layer
  { id: 15, type: 'panel', x: 5, y: 30, size: 220, color: 'rgba(255, 255, 255, 0.55)', blur: 12, speed: 0.007, phase: 1.0 },
  { id: 16, type: 'panel', x: 65, y: 55, size: 180, color: 'rgba(240, 246, 255, 0.50)', blur: 10, speed: 0.009, phase: 3.5 },
]

function useAnimLoop() {
  const t = useRef(0)
  const [, setTick] = useState(0)
  useEffect(() => {
    let raf: number
    const loop = (ts: number) => {
      t.current = ts * 0.001
      setTick(v => v + 1)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])
  return t
}

function floatY(t: number, speed: number, phase: number, amplitude = 14) {
  return Math.sin(t * speed * 60 + phase) * amplitude
}

function floatX(t: number, speed: number, phase: number, amplitude = 8) {
  return Math.cos(t * speed * 60 + phase * 1.3) * amplitude
}

export default function LightBackground() {
  const t = useAnimLoop()

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
      {/* Grid pattern underlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(226, 232, 240, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 232, 240, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          zIndex: 0,
        }}
      />

      {/* Soft radial glow pools */}
      <div className="absolute inset-0 z-1">
        <div
          className="absolute rounded-full"
          style={{
            left: '12%',
            top: '10%',
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            right: '5%',
            top: '35%',
            width: 520,
            height: 520,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
            filter: 'blur(35px)',
          }}
        />
      </div>

      {/* Animated shapes SVG */}
      <svg
        className="absolute inset-0 w-full h-full z-2 overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {SHAPES.filter(s => !['panel', 'dot'].includes(s.type)).map(shape => {
          const dy = floatY(t.current, shape.speed, shape.phase)
          const dx = floatX(t.current, shape.speed, shape.phase)
          const cx = shape.x + dx * 0.3
          const cy = shape.y + dy * 0.3
          const s = shape.size * 0.1

          if (shape.type === 'circle') return (
            <circle key={shape.id} cx={`${cx}%`} cy={`${cy}%`} r={`${s * 0.5}%`} fill={shape.color} />
          )
          if (shape.type === 'ring') return (
            <circle
              key={shape.id}
              cx={`${cx}%`}
              cy={`${cy}%`}
              r={`${s * 0.45}%`}
              fill="none"
              stroke={shape.color}
              strokeWidth={`${s * 0.08}%`}
            />
          )
          if (shape.type === 'rect') {
            const rot = (shape as unknown as { rotate?: number }).rotate ?? 0
            return (
              <rect
                key={shape.id}
                x={`${cx - s * 0.5}%`}
                y={`${cy - s * 0.5}%`}
                width={`${s}%`}
                height={`${s}%`}
                fill={shape.color}
                transform={`rotate(${rot}, ${cx}, ${cy})`}
              />
            )
          }
          if (shape.type === 'triangle') {
            const px = cx, py = cy
            const half = s * 0.5
            const pts = `${px},${py - half * 0.9} ${px - half},${py + half * 0.7} ${px + half},${py + half * 0.7}`
            return <polygon key={shape.id} points={pts} fill={shape.color} />
          }
          return null
        })}
      </svg>

      {/* Animated dots */}
      {SHAPES.filter(s => s.type === 'dot').map(shape => {
        const dy = floatY(t.current, shape.speed, shape.phase, 16)
        const dx = floatX(t.current, shape.speed, shape.phase, 10)
        return (
          <div
            key={shape.id}
            className="absolute rounded-full z-5 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${shape.x + dx * 0.5}%`,
              top: `${shape.y + dy * 0.5}%`,
              width: shape.size,
              height: shape.size,
              background: shape.color,
            }}
          />
        )
      })}

      {/* Soft floating panels */}
      {SHAPES.filter(s => s.type === 'panel').map(shape => {
        const dy = floatY(t.current, shape.speed, shape.phase, 10)
        const dx = floatX(t.current, shape.speed, shape.phase, 5)
        return (
          <div
            key={shape.id}
            className="absolute rounded-2xl z-4 -translate-x-1/2 -translate-y-1/2 border border-slate-200/50 shadow-2xs"
            style={{
              left: `${shape.x + dx * 0.4}%`,
              top: `${shape.y + dy * 0.4}%`,
              width: shape.size,
              height: shape.size * 0.65,
              background: shape.color,
              backdropFilter: `blur(${shape.blur}px)`,
              WebkitBackdropFilter: `blur(${shape.blur}px)`,
            }}
          />
        )
      })}
    </div>
  )
}
