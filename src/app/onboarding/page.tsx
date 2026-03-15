'use client'
import { useState } from 'react'
import Link from 'next/link'
import { BovoLogo } from '@/components/BovoLogo'

const STEPS = ['Account', 'Profile', 'Interests', 'Health info', 'Done']

const INTERESTS = [
  'Fitness & gym', 'Supplements', 'Blood testing',
  'Preventive care', 'Mental wellness', 'Nutrition',
]

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState<string[]>(['Fitness & gym', 'Supplements'])

  const toggle = (i: string) =>
    setSelected(p => p.includes(i) ? p.filter(x => x !== i) : [...p, i])

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--offwhite)', minHeight: '100vh', color: 'var(--ink)' }}>

      {/* Nav */}
      <nav style={{ background: 'white', borderBottom: '0.5px solid var(--border)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <BovoLogo />
        {/* Step track */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {STEPS.map((label, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: i < step ? 'var(--slate)' : i === step ? 'var(--slate-xpale)' : 'white',
                  border: `2px solid ${i < step ? 'var(--slate)' : i === step ? 'var(--slate-light)' : 'var(--border)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.7rem', fontWeight: 600,
                  color: i < step ? 'white' : i === step ? 'var(--slate)' : 'var(--muted)',
                }}>
                  {i < step ? '✓' : i + 1}
                </div>
                <div style={{ fontSize: '0.6rem', color: i === step ? 'var(--slate)' : 'var(--muted)', fontWeight: i === step ? 600 : 400, whiteSpace: 'nowrap' }}>{label}</div>
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ width: 48, height: 1, background: i < step ? 'var(--slate)' : 'var(--border)', margin: '0 4px 12px' }} />
              )}
            </div>
          ))}
        </div>
        <div style={{ width: 100 }} />
      </nav>

      {/* Body */}
      <div style={{ maxWidth: 680, margin: '3rem auto', padding: '0 1.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>

        {/* Form card */}
        <div style={{ background: 'white', borderRadius: 18, border: '0.5px solid var(--border)', padding: '2.5rem', flex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.2rem', letterSpacing: '-0.01em' }}>Tell us about yourself.</h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.6, fontWeight: 300 }}>
            This helps us personalise your Bovo experience and match you with the right wellness resources.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            {[{ label: 'First name', placeholder: 'Jamie' }, { label: 'Last name', placeholder: 'Mercer' }].map(f => (
              <div key={f.label}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, marginBottom: '0.35rem' }}>{f.label}</label>
                <input type="text" placeholder={f.placeholder} style={{ width: '100%', padding: '0.68rem 0.95rem', border: '0.5px solid var(--border)', borderRadius: 10, fontSize: '0.85rem', outline: 'none', fontFamily: 'var(--font-body)' }} />
              </div>
            ))}
          </div>

          {[{ label: 'Work email', type: 'email', placeholder: 'jamie@company.com' }, { label: 'Date of birth', type: 'date', placeholder: '' }].map(f => (
            <div key={f.label} style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, marginBottom: '0.35rem' }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', padding: '0.68rem 0.95rem', border: '0.5px solid var(--border)', borderRadius: 10, fontSize: '0.85rem', outline: 'none', fontFamily: 'var(--font-body)' }} />
            </div>
          ))}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, marginBottom: '0.35rem' }}>Biological sex</label>
              <select style={{ width: '100%', padding: '0.68rem 0.95rem', border: '0.5px solid var(--border)', borderRadius: 10, fontSize: '0.85rem', outline: 'none', fontFamily: 'var(--font-body)', background: 'white' }}>
                <option>Prefer not to say</option><option>Male</option><option>Female</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, marginBottom: '0.35rem' }}>ZIP code</label>
              <input type="text" placeholder="78701" style={{ width: '100%', padding: '0.68rem 0.95rem', border: '0.5px solid var(--border)', borderRadius: 10, fontSize: '0.85rem', outline: 'none', fontFamily: 'var(--font-body)' }} />
            </div>
          </div>

          <div style={{ fontSize: '0.72rem', fontWeight: 600, marginBottom: '0.5rem' }}>Wellness interests</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.55rem', marginBottom: '1.25rem' }}>
            {INTERESTS.map(interest => (
              <button
                key={interest}
                onClick={() => toggle(interest)}
                style={{
                  padding: '0.58rem 0.85rem', borderRadius: 10, fontSize: '0.78rem',
                  border: `0.5px solid ${selected.includes(interest) ? 'var(--slate-light)' : 'var(--border)'}`,
                  background: selected.includes(interest) ? 'var(--slate-xpale)' : 'white',
                  color: selected.includes(interest) ? 'var(--slate)' : 'var(--muted)',
                  fontWeight: selected.includes(interest) ? 600 : 400,
                  cursor: 'pointer', fontFamily: 'var(--font-body)', textAlign: 'left',
                }}
              >
                {interest}
              </button>
            ))}
          </div>

          {/* Privacy notice */}
          <div style={{ background: 'var(--slate-xpale)', border: '0.5px solid var(--slate-pale)', borderRadius: 10, padding: '1rem', marginBottom: '1.5rem', display: 'flex', gap: '0.7rem' }}>
            <div style={{ fontSize: '0.76rem', color: 'var(--slate)', lineHeight: 1.6, fontWeight: 300 }}>
              🛡️ Your personal health data is always anonymised and never shared with your employer. Bovo uses it only to personalise your experience.
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={() => setStep(s => Math.max(0, s - 1))} style={{ background: 'transparent', border: '0.5px solid var(--border)', padding: '0.68rem 1.4rem', borderRadius: '2rem', fontSize: '0.84rem', color: 'var(--muted)', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>← Back</button>
            {step < STEPS.length - 1
              ? <button onClick={() => setStep(s => s + 1)} style={{ background: 'var(--slate)', color: 'white', padding: '0.72rem 1.85rem', borderRadius: '2rem', fontSize: '0.86rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Save & continue →</button>
              : <Link href="/dashboard"><button style={{ background: 'var(--coral)', color: 'white', padding: '0.72rem 1.85rem', borderRadius: '2rem', fontSize: '0.86rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Go to dashboard →</button></Link>
            }
          </div>
        </div>

        {/* Side card */}
        <div style={{ background: 'white', borderRadius: 16, border: '0.5px solid var(--border)', padding: '1.4rem', width: 220, flexShrink: 0 }}>
          <h4 style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem' }}>Why we ask</h4>
          {[
            ['❤️', 'Personalised marketplace', 'We surface the most relevant products for your goals.'],
            ['📦', 'Better recommendations', 'Your interests shape what you see first.'],
            ['🛡️', 'Always private', 'Your employer only sees anonymous aggregate data — never your personal profile.'],
          ].map(([ico, title, body]) => (
            <div key={title as string} style={{ display: 'flex', gap: '0.55rem', marginBottom: '0.85rem' }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--slate-xpale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 13 }}>{ico}</div>
              <div>
                <div style={{ fontSize: '0.76rem', fontWeight: 600, marginBottom: '0.1rem' }}>{title}</div>
                <p style={{ fontSize: '0.73rem', color: 'var(--muted)', lineHeight: 1.5, fontWeight: 300 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
