'use client'
import { useState } from 'react'
import Link from 'next/link'
import { BovoLogo } from '@/components/BovoLogo'

export default function LoginPage() {
  const [role, setRole] = useState<'employee' | 'employer'>('employee')

  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--offwhite)' }}>

      {/* Left panel */}
      <div style={{ background: 'var(--slate)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: 'var(--coral)', opacity: 0.12, top: -80, right: -80 }} />
        <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'var(--slate-mid)', opacity: 0.3, bottom: -40, left: -40 }} />
        <BovoLogo white size="lg" />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
            Your health, <em style={{ fontStyle: 'italic', color: 'var(--coral-mid)' }}>funded</em> by your employer.
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 340, fontWeight: 300 }}>
            A wellness marketplace, a virtual card, and a clinic fund that turns your everyday spending into free cancer screenings for people who need it most.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
          {[['1,240+', 'Active employees'], ['340', 'Screenings funded'], ['72%', 'Utilization rate']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.07em', marginTop: '0.2rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem' }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.2rem', letterSpacing: '-0.01em' }}>Welcome back.</h3>
          <p style={{ fontSize: '0.84rem', color: 'var(--muted)', marginBottom: '2rem', fontWeight: 300 }}>Sign in to your Bovo account</p>

          {/* Role tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.75rem' }}>
            {(['employee', 'employer'] as const).map(r => (
              <button
                key={r}
                onClick={() => setRole(r)}
                style={{
                  padding: '0.6rem',
                  borderRadius: 10,
                  border: `0.5px solid ${role === r ? 'var(--slate-light)' : 'var(--border)'}`,
                  background: role === r ? 'var(--slate-xpale)' : 'white',
                  color: role === r ? 'var(--slate)' : 'var(--muted)',
                  fontWeight: role === r ? 600 : 400,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {r === 'employee' ? 'Employee' : 'Employer / HR'}
              </button>
            ))}
          </div>

          {/* Fields */}
          {[{ label: 'Work email', type: 'email', placeholder: 'you@company.com' }, { label: 'Password', type: 'password', placeholder: '••••••••' }].map(field => (
            <div key={field.label} style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.4rem' }}>{field.label}</label>
              <input type={field.type} placeholder={field.placeholder} style={{ width: '100%', padding: '0.75rem 1rem', border: '0.5px solid var(--border)', borderRadius: 10, fontSize: '0.86rem', color: 'var(--ink)', outline: 'none' }} />
            </div>
          ))}

          <div style={{ textAlign: 'right', fontSize: '0.73rem', color: 'var(--slate-mid)', marginTop: '-0.5rem', marginBottom: '1.25rem', cursor: 'pointer' }}>Forgot password?</div>

          <Link href={role === 'employee' ? '/dashboard' : '/hr-dashboard'}>
            <button style={{ width: '100%', padding: '0.85rem', background: 'var(--slate)', color: 'white', border: 'none', borderRadius: '2rem', fontSize: '0.88rem', fontWeight: 600, marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
              Sign in
            </button>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0.75rem 0', fontSize: '0.72rem', color: 'var(--muted)' }}>
            <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />or<div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
          </div>

          <button style={{ width: '100%', padding: '0.72rem', background: 'white', border: '0.5px solid var(--border)', borderRadius: '2rem', fontSize: '0.84rem', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)' }}>
            Sign in with SSO
          </button>

          <p style={{ textAlign: 'center', fontSize: '0.76rem', color: 'var(--muted)', marginTop: '1.5rem' }}>
            Don&apos;t have an account? <Link href="/onboarding" style={{ color: 'var(--coral)', fontWeight: 600 }}>Request access</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
