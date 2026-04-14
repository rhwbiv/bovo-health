'use client'
import Link from 'next/link'
import { PublicNav } from '@/components/PublicNav'

export default function HomePage() {
  return (
    <>
      <PublicNav />

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '6rem 3rem 4rem', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '5rem', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--coral)', fontWeight: 600, border: '1px solid var(--coral-light)', padding: '0.3rem 0.85rem', borderRadius: '2rem', marginBottom: '1.5rem', background: 'var(--coral-pale)' }}>
            Employer-sponsored wellness
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3.6rem', fontWeight: 700, lineHeight: 1.1, color: 'var(--ink)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Strong teams.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--slate-mid)' }}>Stronger</em> communities.
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 420, lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
            Bovo funds your employees&apos; wellness — gym memberships, supplements, diagnostics — and routes 3% of every purchase toward free cancer screenings for underserved patients.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link href="/login" style={{ background: 'var(--slate)', color: 'white', padding: '0.85rem 2rem', borderRadius: '2rem', fontWeight: 600, fontSize: '0.88rem' }}>
              Get started free
            </Link>
            <Link href="/about" style={{ background: 'transparent', color: 'var(--slate)', padding: '0.85rem 2rem', borderRadius: '2rem', fontWeight: 500, fontSize: '0.88rem', border: '1.5px solid var(--slate-light)' }}>
              See how it works
            </Link>
          </div>
        </div>

        {/* Hero stats cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
          <div style={{ background: 'var(--slate)', borderRadius: 18, padding: '1.4rem 1.2rem', gridRow: 'span 2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Active employees</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>1,240</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.35rem' }}>across 18 companies</div>
            </div>
            <div style={{ display: 'flex', marginTop: '0.85rem' }}>
              {['JM', 'PK', 'SA'].map((init, i) => (
                <div key={i} style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '2px solid var(--slate)', marginLeft: i === 0 ? 0 : -6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: 'white', fontWeight: 600 }}>
                  {init}
                </div>
              ))}
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--coral)', border: '2px solid var(--slate)', marginLeft: -6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: 'white', fontWeight: 600 }}>+9</div>
            </div>
          </div>
          <div style={{ background: 'white', borderRadius: 18, border: '0.5px solid var(--border)', padding: '1.4rem 1.2rem' }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Benefits utilized</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1 }}>72%</div>
            <div style={{ height: 4, background: 'var(--slate-pale)', borderRadius: 2, marginTop: '0.85rem', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'var(--slate-mid)', borderRadius: 2, width: '72%' }} />
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.5rem' }}>vs. 14% industry avg</div>
          </div>
          <div style={{ background: 'var(--coral-pale)', borderRadius: 18, border: '0.5px solid rgba(232,96,60,0.15)', padding: '1.4rem 1.2rem' }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Screenings funded</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 700, color: 'var(--coral)', lineHeight: 1 }}>340</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '0.35rem' }}>preventive cancer screenings</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '5rem 3rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--coral)', fontWeight: 600, marginBottom: '0.6rem' }}>How it works</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '1rem', lineHeight: 1.15, letterSpacing: '-0.01em' }}>
          Simple for HR.<br /><em style={{ fontStyle: 'italic', color: 'var(--slate-mid)' }}>Meaningful</em> for everyone.
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', maxWidth: 520, lineHeight: 1.8, marginBottom: '3rem', fontWeight: 300 }}>
          A wellness marketplace, a virtual card that tracks every purchase automatically, and a clinic fund that turns employee spending into free cancer screenings.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {[
            { num: '01', title: 'Employer sets a budget', body: 'HR creates an account, sets monthly wellness budgets per employee, and loads funds to Bovo virtual cards — all in minutes.', featured: false },
            { num: '02', title: 'Employees spend on wellness', body: 'Each employee gets a Bovo card to use at any wellness vendor — gym, pharmacy, diagnostics, supplements. Every purchase auto-logs instantly.', featured: true },
            { num: '03', title: '3% funds the clinic fund', body: 'Every eligible transaction automatically contributes 3% to our clinic partner fund, covering free preventive cancer screenings for underserved patients.', featured: false },
          ].map(step => (
            <div key={step.num} style={{ padding: '2rem 1.75rem', background: step.featured ? 'var(--slate)' : 'white', borderRadius: 18, border: `0.5px solid ${step.featured ? 'var(--slate)' : 'var(--border)'}` }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 700, color: step.featured ? 'rgba(255,255,255,0.12)' : 'var(--slate-pale)', lineHeight: 1, marginBottom: '1.1rem' }}>{step.num}</div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem', color: step.featured ? 'white' : 'var(--ink)' }}>{step.title}</h3>
              <p style={{ fontSize: '0.84rem', color: step.featured ? 'rgba(255,255,255,0.5)' : 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ margin: '2rem 3rem 5rem', background: 'var(--slate)', borderRadius: 24, padding: '5rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -60, top: -80, width: 300, height: 300, borderRadius: '50%', background: 'var(--coral)', opacity: 0.18 }} />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 700, color: 'white', lineHeight: 1.2, maxWidth: 460, position: 'relative', zIndex: 1, letterSpacing: '-0.01em' }}>
          Benefits that reach <em style={{ fontStyle: 'italic', color: 'var(--coral-mid)' }}>beyond</em> your company.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', minWidth: 240, position: 'relative', zIndex: 1 }}>
          <input type="email" placeholder="Work email address" style={{ padding: '0.85rem 1.25rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: '0.88rem', outline: 'none' }} />
          <button style={{ background: 'var(--coral)', color: 'white', padding: '0.85rem 2rem', borderRadius: '2rem', fontWeight: 600, fontSize: '0.88rem', border: 'none' }}>
            Request a demo
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '0.5px solid var(--border)', padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--muted)', background: 'white' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--slate)' }}>
          Bov<span style={{ color: 'var(--coral)' }}>o</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Privacy', 'Terms', 'HIPAA', 'Clinic partners', 'Contact'].map(link => (
            <a key={link} href="#" style={{ color: 'var(--muted)' }}>{link}</a>
          ))}
        </div>
        <div>© 2026 Bovo Health, Inc.</div>
      </footer>
    </>
  )
}
