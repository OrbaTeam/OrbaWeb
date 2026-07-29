import { motion } from 'framer-motion'

export default function HeroSvgArtwork() {
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto flex items-center justify-center select-none">
      {/* Back glow ambient aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />

      {/* Main Container SVG */}
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_20px_50px_rgba(56,189,248,0.15)]"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="orbGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="strokeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="panelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0.6" />
          </linearGradient>

          <radialGradient id="centerCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#030712" stopOpacity="0" />
          </radialGradient>

          {/* Filter for SVG drop shadow */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Orbit Path 1 */}
        <motion.circle
          cx="300"
          cy="300"
          r="240"
          stroke="url(#strokeGrad1)"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          opacity="0.4"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '300px 300px' }}
        />

        {/* Outer Orbit Path 2 - Reverse */}
        <motion.circle
          cx="300"
          cy="300"
          r="190"
          stroke="#38bdf8"
          strokeWidth="1"
          strokeDasharray="4 8 12 8"
          opacity="0.3"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '300px 300px' }}
        />

        {/* Wave Morphing Flow Lines */}
        <motion.path
          d="M 100 300 Q 200 200, 300 300 T 500 300"
          stroke="url(#strokeGrad1)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.75"
          filter="url(#glow)"
          animate={{
            d: [
              "M 100 300 Q 200 200, 300 300 T 500 300",
              "M 100 300 Q 200 400, 300 300 T 500 300",
              "M 100 300 Q 200 200, 300 300 T 500 300"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.path
          d="M 120 250 Q 250 380, 300 250 T 480 350"
          stroke="#818cf8"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
          animate={{
            d: [
              "M 120 250 Q 250 380, 300 250 T 480 350",
              "M 120 350 Q 250 180, 300 350 T 480 250",
              "M 120 250 Q 250 380, 300 250 T 480 350"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating Geometric Node Structure */}
        {/* Diamond Node 1 */}
        <motion.polygon
          points="300,140 330,170 300,200 270,170"
          fill="url(#panelGrad)"
          stroke="#38bdf8"
          strokeWidth="1.5"
          opacity="0.85"
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Diamond Node 2 */}
        <motion.polygon
          points="430,270 460,300 430,330 400,300"
          fill="url(#panelGrad)"
          stroke="#818cf8"
          strokeWidth="1.5"
          opacity="0.85"
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Diamond Node 3 */}
        <motion.polygon
          points="170,270 200,300 170,330 140,300"
          fill="url(#panelGrad)"
          stroke="#c084fc"
          strokeWidth="1.5"
          opacity="0.85"
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Diamond Node 4 */}
        <motion.polygon
          points="300,400 330,430 300,460 270,430"
          fill="url(#panelGrad)"
          stroke="#38bdf8"
          strokeWidth="1.5"
          opacity="0.85"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Center Infrastructure Core Glow */}
        <circle cx="300" cy="300" r="90" fill="url(#centerCoreGlow)" />
        
        {/* Core Node Glass Disk */}
        <motion.circle
          cx="300"
          cy="300"
          r="45"
          fill="#0a0f1d"
          stroke="#38bdf8"
          strokeWidth="2"
          opacity="0.9"
          animate={{ scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '300px 300px' }}
        />

        {/* Inner Pulsing Core Ring */}
        <motion.circle
          cx="300"
          cy="300"
          r="22"
          fill="url(#orbGradient1)"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Ray Lines Connecting Core to Satellites */}
        <line x1="300" y1="255" x2="300" y2="200" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
        <line x1="345" y1="300" x2="400" y2="300" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
        <line x1="300" y1="345" x2="300" y2="400" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
        <line x1="255" y1="300" x2="200" y2="300" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />

        {/* Orbiting Satellite Data Nodes */}
        <g>
          <motion.circle
            cx="300"
            cy="60"
            r="5"
            fill="#38bdf8"
            filter="url(#glow)"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '300px 300px' }}
          />
          <motion.circle
            cx="490"
            cy="300"
            r="4"
            fill="#c084fc"
            filter="url(#glow)"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '300px 300px' }}
          />
          <motion.circle
            cx="300"
            cy="540"
            r="6"
            fill="#818cf8"
            filter="url(#glow)"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '300px 300px' }}
          />
        </g>
      </svg>
    </div>
  )
}
