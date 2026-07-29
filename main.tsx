import { useEffect, useRef, useState } from 'react'

const SHAPES = [
  // Layer 1 — large, slow, back
  { id: 1, type: 'circle', x: 8, y: 10, size: 320, color: 'rgba(255, 210, 140, 0.18)', blur: 0, speed: 0.012, phase: 0 },
  { id: 2, type: 'rect', x: 72, y: 5, size: 200, color: 'rgba(180, 220, 255, 0.22)', blur: 0, speed: 0.009, phase: 1.2, rotate: 22 },
  { id: 3, type: 'circle', x: 85, y: 70, size: 260, color: 'rgba(220, 180, 255, 0.16)', blur: 0, speed: 0.011, phase: 2.4 },
  { id: 4, type: 'triangle', x: 45, y: 80, size: 180, color: 'rgba(150, 240, 200, 0.18)', blur: 0, speed: 0.008, phase: 0.8 },

  // Layer 2 — medium, mid-depth
  { id: 5, type: 'ring', x: 20, y: 55, size: 160, color: 'rgba(255, 170, 100, 0.28)', blur: 0, speed: 0.016, phase: 3.1 },
  { id: 6, type: 'rect', x: 60, y: 30, size: 120, color: 'rgba(100, 180, 255, 0.20)', blur: 0, speed: 0.014, phase: 1.7, rotate: -15 },
  { id: 7, type: 'circle', x: 38, y: 20, size: 90, color: 'rgba(255, 230, 100, 0.30)', blur: 0, speed: 0.018, phase: 4.0 },
  { id: 8, type: 'ring', x: 78, y: 50, size: 130, color: 'rgba(200, 140, 255, 0.22)', blur: 0, speed: 0.013, phase: 2.0 },
  { id: 9, type: 'triangle', x: 15, y: 78, size: 100, color: 'rgba(120, 220, 180, 0.24)', blur: 0, speed: 0.017, phase: 5.1 },

  // Layer 3 — small, fast, front
  { id: 10, type: 'dot', x: 50, y: 45, size: 24, color: 'rgba(255, 90, 90, 0.55)', blur: 0, speed: 0.022, phase: 0.3 },
  { id: 11, type: 'dot', x: 30, y: 35, size: 16, color: 'rgba(80, 120, 255, 0.60)', blur: 0, speed: 0.025, phase: 1.5 },
  { id: 12, type: 'dot', x: 70, y: 65, size: 20, color: 'rgba(255, 200, 60, 0.65)', blur: 0, speed: 0.020, phase: 3.3 },
  { id: 13, type: 'dot', x: 88, y: 25, size: 12, color: 'rgba(60, 200, 140, 0.70)', blur: 0, speed: 0.028, phase: 2.7 },
  { id: 14, type: 'dot', x: 12, y: 42, size: 18, color: 'rgba(200, 80, 255, 0.55)', blur: 0, speed: 0.023, phase: 4.8 },

  // Panel cards — glassy mid-layer
  { id: 15, type: 'panel', x: 5, y: 30, size: 220, color: 'rgba(255,255,255,0.45)', blur: 12, speed: 0.007, phase: 1.0 },
  { id: 16, type: 'panel', x: 65, y: 55, size: 180, color: 'rgba(230,240,255,0.40)', blur: 10, speed: 0.009, phase: 3.5 },
  { id: 17, type: 'panel', x: 40, y: 60, size: 150, color: 'rgba(255,245,220,0.38)', blur: 8, speed: 0.010, phase: 5.8 },
]

function useAnimLoop() {
  const t = useRef(0)
  const [tick, setTick] = useState(0)
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

function floatY(t: number, speed: number, phase: number, amplitude = 18) {
  return Math.sin(t * speed * 60 + phase) * amplitude
}
function floatX(t: number, speed: number, phase: number, amplitude = 10) {
  return Math.cos(t * speed * 60 + phase * 1.3) * amplitude
}

export default function App() {
  const t = useAnimLoop()

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        background: '#f7f8fc',
      }}
    >
      {/* Grid pattern underlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(180,190,220,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,190,220,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          zIndex: 0,
        }}
      />

      {/* Soft radial glow pools */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <div style={{
          position: 'absolute', left: '10%', top: '15%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,220,160,0.22) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }} />
        <div style={{
          position: 'absolute', right: '5%', top: '40%',
          width: 420, height: 420, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,210,255,0.24) 0%, transparent 70%)',
          filter: 'blur(28px)',
        }} />
        <div style={{
          position: 'absolute', left: '40%', bottom: '10%',
          width: 360, height: 360, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(210,175,255,0.20) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }} />
      </div>

      {/* Animated shapes */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2, overflow: 'visible' }}
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
            <circle key={shape.id} cx={`${cx}%`} cy={`${cy}%`} r={`${s * 0.45}%`}
              fill="none" stroke={shape.color} strokeWidth={`${s * 0.08}%`} />
          )
          if (shape.type === 'rect') {
            const rot = (shape as any).rotate ?? 0
            return (
              <rect key={shape.id}
                x={`${cx - s * 0.5}%`} y={`${cy - s * 0.5}%`}
                width={`${s}%`} height={`${s}%`}
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

      {/* Animated dots (front layer) */}
      {SHAPES.filter(s => s.type === 'dot').map(shape => {
        const dy = floatY(t.current, shape.speed, shape.phase, 22)
        const dx = floatX(t.current, shape.speed, shape.phase, 14)
        return (
          <div
            key={shape.id}
            style={{
              position: 'absolute',
              left: `${shape.x + dx * 0.5}%`,
              top: `${shape.y + dy * 0.5}%`,
              width: shape.size,
              height: shape.size,
              borderRadius: '50%',
              background: shape.color,
              zIndex: 5,
              transform: 'translate(-50%, -50%)',
            }}
          />
        )
      })}

      {/* Glassy panels */}
      {SHAPES.filter(s => s.type === 'panel').map(shape => {
        const dy = floatY(t.current, shape.speed, shape.phase, 12)
        const dx = floatX(t.current, shape.speed, shape.phase, 7)
        return (
          <div
            key={shape.id}
            style={{
              position: 'absolute',
              left: `${shape.x + dx * 0.4}%`,
              top: `${shape.y + dy * 0.4}%`,
              width: shape.size,
              height: shape.size * 0.65,
              borderRadius: 20,
              background: shape.color,
              backdropFilter: `blur(${shape.blur}px)`,
              WebkitBackdropFilter: `blur(${shape.blur}px)`,
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 4px 32px rgba(80,100,180,0.08), 0 1px 0 rgba(255,255,255,0.8) inset',
              zIndex: 4,
              transform: 'translate(-50%, -50%)',
            }}
          />
        )
      })}

      {/* Diagonal stripe accent */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 60px,
            rgba(200, 210, 240, 0.06) 60px,
            rgba(200, 210, 240, 0.06) 61px
          )`,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

    </div>
  )
}
