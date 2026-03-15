'use client'
import { PublicNav } from '@/components/PublicNav'
import Link from 'next/link'

const team = [
  { initials: 'AK', name: 'Alex Kim', role: 'Co-founder & CEO', bio: 'Former health policy director. Started Bovo to make preventive care accessible to everyone.', bg: 'var(--slate-mid)' },
  { initials: 'SR', name: 'Sofia Reyes', role: 'Co-founder & CTO', bio: '10 years in health tech. Previously led platform engineering at Oscar Health.', bg: 'var(--coral)' },
  { initials: 'MJ', name: 'Marcus Johnson', role: 'Chief Medical Officer', bio: 'Oncologist. Advisor to the American Cancer Society.', bg: 'var(--green)' },
  { initials: 'PN', name: 'Priya Nair', role: 'Head of Product', bio: 'Previously VP Product at Hims & Hers. Passionate about health equity.', bg: '#6B3FA0' },
]

const values = [
  { ico: '🛡️', bg: 'var(--slate-pale)', title: 'No health data, ever', body: 'Bovo never accesses or analyses employee health records. The clinic fund model means we don\'t need to — and employee privacy is never at risk.' },
  { ico: '❤️', bg: 'var(--coral-pale)', title: 'Physicians decide, we fund', body: 'We trust clinical judgment over any algorithm. Doctors know their patients. Our job is to remove the financial barrier so they can act on that knowledge.' },
  { ico: '⏱️', bg: 'var(--green-light)', title: 'Passive impact at scale', body: 'The clinic fund grows without anyone lifting a finger. Every wellness purchase contributes. That\'s how individual benefit becomes collective impact.' },
]

export default function AboutPage() {
  return (
    <>
      <PublicNav />

      {/* Hero */}
      <div style={{ background: 'var(--slate)', padding: '5.5rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', background: 'var(--coral)', opacity: 0.1, top: -100, right: -80 }} />
        <div style={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', background: 'white', opacity: 0.04, bottom: -50, left: 80 }} />
        <div style={{ display: 'inline-block', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--coral-mid)', border: '1px solid rgba(239,127,95,0.35)', padding: '0.26rem 0.75rem', borderRadius: '2rem', marginBottom: '1.4rem', position: 'relative', zIndex: 1, fontWeight: 600 }}>
          Our mission
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3.2rem', fontWeight: 700, color: 'white', lineHeight: 1.15, maxWidth: 680, margin: '0 auto 1.2rem', position: 'relative', zIndex: 1, letterSpacing: '-0.02em' }}>
          Employer wellness that reaches <em style={{ fontStyle: 'italic', color: 'var(--coral-mid)' }}>beyond</em> the office.
        </h1>
        <p style={{ fontSize: '0.93rem', color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8, position: 'relative', zIndex: 1, fontWeight: 300 }}>
          Bovo connects employer wellness budgets to a curated marketplace for employees — and routes 3% of every purchase to free cancer screenings for patients in underserved communities.
        </p>
      </div>

      {/* Mission */}
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '5rem 3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--coral)', fontWeight: 600, marginBottom: '0.55rem' }}>Why we built Bovo</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.3rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.2rem', letterSpacing: '-0.01em' }}>
            Strong teams.<br /><em style={{ fontStyle: 'italic', color: 'var(--slate-mid)' }}>Stronger</em> communities.
          </h2>
          {[
            'Colorectal cancer is the second leading cause of cancer death in the US. The five-year survival rate for early detection exceeds 90%. The problem isn\'t medicine — it\'s access.',
            'We believe employer wellness budgets can do more than fund gym memberships. Every time an employee buys a supplement or books a blood test on their Bovo card, 3% of that purchase flows to our clinic partner fund — covering free preventive screenings for patients whose physicians have identified them as at-risk.',
            'No health data analysis. No algorithms. Just physicians who know their patients, and a fund that removes the financial barrier to acting on that knowledge.',
          ].map((p, i) => (
            <p key={i} style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '0.9rem', fontWeight: 300 }}>{p}</p>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {[
            { value: '90%+', label: 'Survival rate with early colorectal detection', dark: false, ico: '❤️' },
            { value: '340', label: 'Screenings funded to date', dark: true, ico: '😊' },
            { value: '18', label: 'Clinic partners nationwide', dark: false, ico: '🏥' },
            { value: '72%', label: 'Average employee utilization rate', dark: false, ico: '📈' },
          ].map(s => (
            <div key={s.value} style={{ background: s.dark ? 'var(--ink)' : 'white', borderRadius: 14, border: '0.5px solid var(--border)', padding: '1.2rem 1.4rem', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: s.dark ? 'rgba(255,255,255,0.08)' : 'var(--slate-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, flexShrink: 0 }}>{s.ico}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 700, color: s.dark ? 'white' : 'var(--ink)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.72rem', color: s.dark ? 'rgba(255,255,255,0.4)' : 'var(--muted)', marginTop: '0.1rem', fontWeight: 300 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div style={{ background: 'white', borderTop: '0.5px solid var(--border)', borderBottom: '0.5px solid var(--border)', padding: '4.5rem 3rem' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--coral)', fontWeight: 600, marginBottom: '0.5rem' }}>How it works</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 700, letterSpacing: '-0.01em' }}>Three things working together.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.2rem' }}>
            {[
              { n: '01', title: 'Employer-funded wellness', body: 'Employers load a monthly wellness budget to each employee\'s Bovo virtual card. Employees spend it at any eligible vendor — automatically tracked.', dark: false },
              { n: '02', title: 'Automatic card tracking', body: 'Every purchase on the Bovo card logs instantly. No receipts, no manual claims. Employees and HR see spending in real time.', dark: true },
              { n: '03', title: '3% to the clinic fund', body: 'Every eligible transaction automatically contributes 3% to our clinic partner fund. Clinics use it to cover free preventive screenings for at-risk patients.', dark: false },
            ].map(s => (
              <div key={s.n} style={{ background: s.dark ? 'var(--slate)' : 'var(--offwhite)', borderRadius: 16, border: '0.5px solid var(--border)', padding: '1.75rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 700, color: s.dark ? 'rgba(255,255,255,0.12)' : 'var(--slate-pale)', lineHeight: 1, marginBottom: '0.9rem' }}>{s.n}</div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.38rem', color: s.dark ? 'white' : 'var(--ink)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.8rem', color: s.dark ? 'rgba(255,255,255,0.5)' : 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '4.5rem 3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--coral)', fontWeight: 600, marginBottom: '0.5rem' }}>What we believe</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 700, letterSpacing: '-0.01em' }}>Our values</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.2rem' }}>
          {values.map(v => (
            <div key={v.title} style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)', padding: '1.75rem' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, marginBottom: '0.9rem' }}>{v.ico}</div>
              <h3 style={{ fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.35rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 3rem 4.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--coral)', fontWeight: 600, marginBottom: '0.5rem' }}>The team</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 700, letterSpacing: '-0.01em' }}>Built by people who care.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
          {team.map(t => (
            <div key={t.name} style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)', padding: '1.2rem', textAlign: 'center' }}>
              <div style={{ width: 54, height: 54, borderRadius: '50%', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.7rem', fontSize: 16, fontWeight: 700, color: 'white' }}>{t.initials}</div>
              <h4 style={{ fontSize: '0.83rem', fontWeight: 600, marginBottom: '0.12rem' }}>{t.name}</h4>
              <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{t.role}</div>
              <p style={{ fontSize: '0.73rem', color: 'var(--muted)', marginTop: '0.45rem', lineHeight: 1.5, fontWeight: 300 }}>{t.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--ink)', padding: '5rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 280, height: 280, borderRadius: '50%', background: 'var(--coral)', opacity: 0.1, top: -70, right: -50 }} />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 700, color: 'white', marginBottom: '0.7rem', position: 'relative', zIndex: 1, letterSpacing: '-0.01em' }}>
          Benefits that reach <em style={{ fontStyle: 'italic', color: 'var(--coral-mid)' }}>beyond</em> your company.
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', maxWidth: 420, margin: '0 auto 1.75rem', lineHeight: 1.75, position: 'relative', zIndex: 1, fontWeight: 300 }}>
          Give your team world-class wellness benefits — and fund cancer screenings for the communities around you.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <Link href="/login"><button style={{ background: 'var(--coral)', color: 'white', padding: '0.82rem 2rem', borderRadius: '2rem', fontSize: '0.88rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Request a demo</button></Link>
          <Link href="/pricing"><button style={{ background: 'transparent', color: 'white', padding: '0.82rem 2rem', borderRadius: '2rem', fontSize: '0.88rem', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>View pricing</button></Link>
        </div>
      </div>

      <footer style={{ borderTop: '0.5px solid var(--border)', padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--muted)', background: 'white' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--slate)' }}>Bov<span style={{ color: 'var(--coral)' }}>o</span></div>
        <div style={{ display: 'flex', gap: '2rem' }}>{['Privacy', 'Terms', 'HIPAA', 'Clinic partners', 'Contact'].map(l => <a key={l} href="#" style={{ color: 'var(--muted)' }}>{l}</a>)}</div>
        <div>© 2026 Bovo Health, Inc.</div>
      </footer>
    </>
  )
}
