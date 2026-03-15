import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  white?: boolean
  href?: string
}

export function BovoLogo({ size = 'md', white = false, href = '/' }: LogoProps) {
  const iconSize = size === 'sm' ? 22 : size === 'lg' ? 36 : 28
  const fontSize = size === 'sm' ? '1rem' : size === 'lg' ? '1.5rem' : '1.2rem'

  return (
    <Link
      href={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: 'none',
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="13" cy="16" r="9" fill="#3D6A96" opacity="0.9" />
        <ellipse cx="21" cy="13" rx="7" ry="9" fill="#E8603C" opacity="0.85" />
        <path
          d="M17 10.5C17.8 12 18.2 14 17.8 16C16.8 15.5 15.5 15 14 14.8C14.2 12.8 15.2 11.2 17 10.5Z"
          fill="white"
          opacity="0.25"
        />
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize,
          fontWeight: 700,
          color: white ? 'white' : 'var(--slate)',
          letterSpacing: '-0.02em',
        }}
      >
        Bov<span style={{ color: 'var(--coral-mid)' }}>o</span>
      </span>
    </Link>
  )
}
