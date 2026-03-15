import Link from 'next/link'
import { BovoLogo } from './BovoLogo'

const navStyle: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  zIndex: 100,
  background: 'rgba(246,249,252,0.94)',
  backdropFilter: 'blur(12px)',
  borderBottom: '0.5px solid var(--border)',
  padding: '1rem 3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const linkStyle: React.CSSProperties = {
  fontSize: '0.84rem',
  fontWeight: 400,
  color: 'var(--muted)',
  textDecoration: 'none',
}

const ctaStyle: React.CSSProperties = {
  background: 'var(--coral)',
  color: 'white',
  padding: '0.45rem 1.2rem',
  borderRadius: '2rem',
  fontWeight: 600,
  fontSize: '0.82rem',
  textDecoration: 'none',
}

export function PublicNav() {
  return (
    <nav style={navStyle}>
      <BovoLogo />
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="/about" style={linkStyle}>For employers</Link>
        <Link href="/about" style={linkStyle}>For employees</Link>
        <Link href="/about" style={linkStyle}>Clinic fund</Link>
        <Link href="/pricing" style={linkStyle}>Pricing</Link>
        <Link href="/about" style={linkStyle}>About</Link>
        <Link href="/login" style={ctaStyle}>Request a demo</Link>
      </div>
    </nav>
  )
}
