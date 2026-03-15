'use client'
import { PublicNav } from '@/components/PublicNav'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter', price: '$8', unit: 'per employee / month',
    desc: 'For small teams getting started with employer-sponsored wellness benefits.',
    featured: false,
    features: ['Up to 50 employees', 'Full wellness marketplace', 'Bovo virtual card per employee', 'Auto transaction logging', '3% clinic fund contribution'],
    missing: ['HR analytics dashboard', 'Dedicated account manager'],
    cta: 'Get started', ctaStyle: 'out',
  },
  {
    name: 'Growth', price: '$14', unit: 'per employee / month',
    desc: 'The full Bovo experience for growing teams with advanced analytics and support.',
    featured: true,
    features: ['Up to 500 employees', 'Full wellness marketplace', 'Bovo virtual card per employee', 'Auto transaction logging', '3% clinic fund contribution', 'HR analytics dashboard'],
    missing: ['Dedicated account manager'],
    cta: 'Get started', ctaStyle: 'coral',
  },
  {
    name: 'Enterprise', price: 'Custom', unit: 'tailored to your org',
    desc: 'For large organizations needing custom integrations, HRIS sync, and white-glove onboarding.',
    featured: false,
    features: ['Unlimited employees', 'Full wellness marketplace', 'Custom benefit categories', 'HRIS & payroll integration', '3% clinic fund contribution', 'Advanced HR analytics', 'Dedicated account manager'],
    missing: [],
    cta: 'Talk to sales', ctaStyle: 'out',
  },
]

const faqs = [
  { q: 'How does the virtual card work?', a: 'Each employee gets a Bovo Visa card loaded with their monthly wellness budget. They use it like any debit card at eligible vendors — every purchase auto-logs to their dashboard instantly.' },
  { q: 'Who funds the clinic screenings?', a: '3% of every eligible employee transaction automatically flows into Bovo\'s clinic partner fund. We distribute this monthly to vetted clinics in underserved communities. Their physicians decide who needs screenings — we provide the funding.' },
  { q: 'What happens to unspent monthly balance?', a: 'You choose the policy: roll over to next month, forfeit back to the employer budget, or redirect to the clinic fund. We recommend the clinic fund option — unused dollars become screenings for people who need them.' },
  { q: 'Is there a minimum contract length?', a: 'Monthly plans have no commitment. Annual plans require a 12-month agreement and come with a 20% discount. Enterprise contracts are customised based on your needs.' },
]

export default function PricingPage() {
  return (
    <>
      <PublicNav />

      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '4rem 2rem 2.5rem' }}>
        <div style={{ display: 'inline-block', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--coral)', border: '1px solid var(--coral-light)', padding: '0.26rem 0.75rem', borderRadius: '2rem', marginBottom: '1rem', background: 'var(--coral-pale)', fontWeight: 600 }}>
          Employer pricing
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.9rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.7rem', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Simple pricing,<br /><em style={{ fontStyle: 'italic', color: 'var(--slate-mid)' }}>extraordinary</em> outcomes.
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.93rem', maxWidth: 460, margin: '0 auto 1.75rem', lineHeight: 1.75, fontWeight: 300 }}>
          All plans include the full Bovo wellness marketplace, virtual cards, automatic transaction tracking, and the clinic fund. No hidden fees.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', fontSize: '0.82rem', color: 'var(--muted)' }}>
          <span>Monthly</span><span>Annual</span>
          <span style={{ background: 'var(--coral-pale)', color: 'var(--coral)', fontSize: '0.68rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '2rem' }}>Save 20%</span>
        </div>
      </div>

      {/* Plans */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', maxWidth: 940, margin: '0 auto', padding: '0 2rem 3.5rem' }}>
        {plans.map(plan => (
          <div key={plan.name} style={{ background: plan.featured ? 'var(--ink)' : 'white', borderRadius: 20, border: plan.featured ? '2px solid var(--slate)' : '0.5px solid var(--border)', padding: '2rem', position: 'relative' }}>
            {plan.featured && <div style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)', background: 'var(--coral)', color: 'white', fontSize: '0.65rem', fontWeight: 600, padding: '0.22rem 0.85rem', borderRadius: '2rem', whiteSpace: 'nowrap' }}>Most popular</div>}
            <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: plan.featured ? 'rgba(255,255,255,0.45)' : 'var(--muted)', marginBottom: '0.45rem', fontWeight: 600 }}>{plan.name}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 700, color: plan.featured ? 'white' : 'var(--ink)', lineHeight: 1, letterSpacing: '-0.02em' }}>{plan.price}</div>
            <div style={{ fontSize: '0.76rem', color: plan.featured ? 'rgba(255,255,255,0.4)' : 'var(--muted)', marginTop: '0.18rem', fontWeight: 300 }}>{plan.unit}</div>
            <div style={{ fontSize: '0.8rem', color: plan.featured ? 'rgba(255,255,255,0.5)' : 'var(--muted)', lineHeight: 1.65, margin: '0.9rem 0 1.4rem', minHeight: 52, fontWeight: 300 }}>{plan.desc}</div>
            <div style={{ height: '0.5px', background: plan.featured ? 'rgba(255,255,255,0.1)' : 'var(--border)', marginBottom: '1.2rem' }} />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.75rem' }}>
              {plan.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.48rem', fontSize: '0.78rem', color: plan.featured ? 'rgba(255,255,255,0.78)' : 'var(--ink)' }}>
                  <div style={{ width: 16, height: 16, borderRadius: '50%', background: plan.featured ? 'rgba(255,255,255,0.12)' : 'var(--slate-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1, fontSize: 9 }}>✓</div>
                  {f}
                </li>
              ))}
              {plan.missing.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.48rem', fontSize: '0.78rem', color: plan.featured ? 'rgba(255,255,255,0.3)' : 'var(--muted)' }}>
                  <div style={{ width: 16, height: 16, borderRadius: '50%', background: plan.featured ? 'rgba(255,255,255,0.06)' : 'var(--offwhite)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1, fontSize: 9 }}>✕</div>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/login">
              <button style={{ width: '100%', padding: '0.78rem', borderRadius: '2rem', fontSize: '0.86rem', fontWeight: 600, fontFamily: 'var(--font-body)', cursor: 'pointer', border: 'none', background: plan.ctaStyle === 'coral' ? 'var(--coral)' : plan.ctaStyle === 'out' ? (plan.featured ? 'rgba(255,255,255,0.1)' : 'white') : 'var(--slate)', color: plan.ctaStyle === 'out' && !plan.featured ? 'var(--ink)' : 'white', ...(plan.ctaStyle === 'out' && !plan.featured ? { border: '0.5px solid var(--border)' } : {}) }}>{plan.cta}</button>
            </Link>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: 660, margin: '0 auto', padding: '0 2rem 4rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>Common questions</h2>
        {faqs.map(faq => (
          <div key={faq.q} style={{ borderBottom: '0.5px solid var(--border)', padding: '0.95rem 0' }}>
            <div style={{ fontSize: '0.86rem', fontWeight: 600, marginBottom: '0.35rem' }}>{faq.q}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.68, fontWeight: 300 }}>{faq.a}</div>
          </div>
        ))}
      </div>

      {/* Trust bar */}
      <div style={{ background: 'white', borderTop: '0.5px solid var(--border)', padding: '1.75rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        {['🛡️ HIPAA compliant', '🔒 SOC 2 Type II', '✓ No setup fees', '⏱ Cancel anytime'].map(t => (
          <span key={t} style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{t}</span>
        ))}
      </div>

      <footer style={{ borderTop: '0.5px solid var(--border)', padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: 'var(--muted)', background: 'white' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--slate)' }}>Bov<span style={{ color: 'var(--coral)' }}>o</span></div>
        <div style={{ display: 'flex', gap: '2rem' }}>{['Privacy', 'Terms', 'HIPAA', 'Contact'].map(l => <a key={l} href="#" style={{ color: 'var(--muted)' }}>{l}</a>)}</div>
        <div>© 2026 Bovo Health, Inc.</div>
      </footer>
    </>
  )
}
