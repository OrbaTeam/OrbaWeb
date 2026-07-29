export default function OrbaLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer White Background Circle */}
      <circle cx="50" cy="50" r="48" fill="#FFFFFF" />
      
      {/* Blue Ring with Stylized Right Slits matching ORBA Logo */}
      <path
        d="
          M 50 18
          A 32 32 0 1 0 50 82
          A 32 32 0 0 0 72.6 72.6
          L 65.5 65.5
          A 22 22 0 0 1 50 72
          A 22 22 0 1 1 50 28
          A 22 22 0 0 1 65.5 34.5
          L 72.6 27.4
          A 32 32 0 0 0 50 18
          Z
        "
        fill="#0052FF"
      />
      
      {/* Right Segment Piece */}
      <path
        d="
          M 75.5 30.3
          L 68.4 37.4
          A 22 22 0 0 1 68.4 62.6
          L 75.5 69.7
          A 32 32 0 0 0 75.5 30.3
          Z
        "
        fill="#0052FF"
      />
    </svg>
  )
}
