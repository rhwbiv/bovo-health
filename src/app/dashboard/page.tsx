'use client'
import { AppSidebar } from '@/components/AppSidebar'

const transactions = [
  { ico: '🏋️', name: 'Planet Fitness', date: 'Mar 1 · auto-logged via Bovo card', amt: '−$24.99', tag: 'Fitness', color: 'var(--green-light)', textColor: 'var(--green)' },
  { ico: '💊', name: 'Vitamin D3 + Omega-3', date: 'Mar 5 · auto-logged via Bovo card', amt: '−$32.51', tag: 'Supplements', color: 'var(--green-light)', textColor: 'var(--green)' },
  { ico: '🧪', name: 'LabCorp — blood panel', date: 'Feb 20 · auto-logged via Bovo card', amt: '−$89.00', tag: 'Diagnostics', color: 'var(--green-light)', textColor: 'var(--green)' },
  { ico: '❤️', name: 'Clinic fund contribution', date: 'Auto-deducted · 3% of spend', amt: '$4.87', tag: 'Impact', color: '#F0EAF8', textColor: '#6B3FA0' },
]

const categories = [
  { label: 'Fitness', amount: '$24.99', pct: 43, color: 'var(--slate-mid)' },
  { label: 'Supplements', amount: '$32.51', pct: 57, color: 'var(--slate-light)' },
  { label: 'Diagnostics', amount: '$0', pct: 0, color: 'var(--coral-mid)' },
]

export default function DashboardPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'var(--font-body)', fontSize: 14, background: 'var(--offwhite)', color: 'var(--ink)' }}>
      <AppSidebar activeItem="dashboard" />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>

        {/* Topbar */}
        <div style={{ background: 'white', borderBottom: '0.5px solid var(--border)', padding: '0.85rem 1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10 }}>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>My Dashboard</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 300 }}>March 2026 · Apex Corp</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--offwhite)', border: '0.5px solid var(--border)', borderRadius: '2rem', padding: '0.4rem 0.9rem', fontSize: '0.78rem', color: 'var(--muted)', minWidth: 180 }}>
              🔍 Search marketplace...
            </div>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--slate-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600, color: 'white' }}>JM</div>
          </div>
        </div>

        <div style={{ padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

          {/* Greeting */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                Good morning, <em style={{ fontStyle: 'italic', color: 'var(--slate-mid)' }}>Jamie.</em>
              </h2>
              <p style={{ fontSize: '0.76rem', color: 'var(--muted)', marginTop: '0.2rem', fontWeight: 300 }}>March 2026 · Your Bovo card is active</p>
            </div>
            <button style={{ background: 'var(--coral)', color: 'white', padding: '0.52rem 1.1rem', borderRadius: '2rem', fontSize: '0.78rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Browse marketplace</button>
          </div>

          {/* Clinic banner */}
          <div style={{ background: 'var(--ink)', borderRadius: 14, padding: '1.1rem 1.4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 100, height: 100, borderRadius: '50%', background: 'var(--green)', opacity: 0.12, right: -20, top: -30 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', zIndex: 1 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(59,109,17,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>❤️</div>
              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'white' }}>Your spending funds cancer screenings</div>
                <div style={{ fontSize: '0.71rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.12rem', fontWeight: 300 }}>3% of every purchase goes to Bovo's clinic partner fund — covering free preventive screenings.</div>
              </div>
            </div>
            <div style={{ textAlign: 'right', zIndex: 1, flexShrink: 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#7CC44A', lineHeight: 1 }}>$4.87</div>
              <div style={{ fontSize: '0.63rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.1rem' }}>contributed this month</div>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.9rem' }}>
            {[
              { label: 'Monthly budget', value: '$200', sub: 'from Apex Corp', color: 'var(--ink)' },
              { label: 'Card balance', value: '$142.50', sub: 'On track', color: 'var(--slate-mid)' },
              { label: 'Spent this month', value: '$57.50', sub: 'auto-logged · 0 manual', color: 'var(--coral)' },
              { label: 'Clinic contributed', value: '$4.87', sub: 'This month', color: 'var(--green)' },
            ].map(s => (
              <div key={s.label} style={{ background: 'white', borderRadius: 12, border: '0.5px solid var(--border)', padding: '0.9rem 1rem' }}>
                <div style={{ fontSize: '0.63rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--muted)', marginBottom: '0.25rem' }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.67rem', color: 'var(--muted)', marginTop: '0.2rem', fontWeight: 300 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Two-column */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1.2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

              {/* Virtual card */}
              <div style={{ background: 'var(--slate-mid)', borderRadius: 14, padding: '1.4rem', position: 'relative', overflow: 'hidden', color: 'white' }}>
                <div style={{ position: 'absolute', width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', right: -25, bottom: -25 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Bovo wellness card</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700 }}>Bov<span style={{ color: 'var(--coral-mid)' }}>o</span></div>
                  </div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)' }}>VISA</div>
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.65)', marginBottom: '0.9rem' }}>4821 •••• •••• ••••</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Jamie Mercer</div>
                    <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)' }}>Expires 03/28</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}>Balance</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700 }}>$142.50</div>
                  </div>
                </div>
              </div>

              {/* Transactions */}
              <div style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)' }}>
                <div style={{ padding: '0.85rem 1.2rem', borderBottom: '0.5px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>Recent transactions</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--slate-mid)', cursor: 'pointer' }}>View all →</span>
                </div>
                <div style={{ padding: '0 1.2rem 0.5rem' }}>
                  {transactions.map(tx => (
                    <div key={tx.name} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.65rem 0', borderBottom: '0.5px solid var(--border)' }}>
                      <div style={{ width: 30, height: 30, borderRadius: 8, background: tx.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>{tx.ico}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 500 }}>{tx.name}</div>
                        <div style={{ fontSize: '0.67rem', color: 'var(--muted)', fontWeight: 300 }}>{tx.date}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: tx.textColor === '#6B3FA0' ? 'var(--green)' : 'var(--ink)' }}>{tx.amt}</div>
                        <span style={{ fontSize: '0.6rem', padding: '0.1rem 0.42rem', borderRadius: '2rem', background: tx.color, color: tx.textColor }}>{tx.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right col */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

              {/* Budget donut */}
              <div style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)' }}>
                <div style={{ padding: '0.85rem 1.2rem', borderBottom: '0.5px solid var(--border)', fontSize: '0.84rem', fontWeight: 600 }}>Budget this month</div>
                <div style={{ padding: '1rem 1.2rem 0.5rem', textAlign: 'center' }}>
                  <div style={{ position: 'relative', width: 105, height: 105, margin: '0 auto 0.75rem' }}>
                    <svg width="105" height="105" viewBox="0 0 110 110" style={{ transform: 'rotate(-90deg)' }}>
                      <circle cx="55" cy="55" r="45" fill="none" stroke="var(--slate-pale)" strokeWidth="8" />
                      <circle cx="55" cy="55" r="45" fill="none" stroke="var(--slate-mid)" strokeWidth="8" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="79" />
                    </svg>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, lineHeight: 1 }}>71%</div>
                      <div style={{ fontSize: '0.58rem', color: 'var(--muted)' }}>remaining</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '0 1.2rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.38rem' }}>
                  {[['Monthly budget', '$200.00'], ['Spent', '$57.50'], ['Clinic fund', '$4.87 ↗'], ['Remaining', '$142.50']].map(([l, v], i) => (
                    <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.77rem' }}>
                      <span style={{ color: 'var(--muted)', fontWeight: 300 }}>{l}</span>
                      <span style={{ fontWeight: 600, color: i === 2 ? 'var(--green)' : i === 3 ? 'var(--coral)' : 'var(--ink)' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spend by category */}
              <div style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)', padding: '0.85rem 1.2rem 1rem' }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 600, marginBottom: '0.75rem' }}>Spend by category</div>
                {categories.map(c => (
                  <div key={c.label} style={{ marginBottom: '0.7rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', marginBottom: '0.18rem' }}>
                      <span>{c.label}</span><span style={{ color: 'var(--muted)' }}>{c.amount}</span>
                    </div>
                    <div style={{ height: 4, background: 'var(--slate-pale)', borderRadius: 2, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${c.pct}%`, background: c.color, borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Clinic fund lifetime */}
              <div style={{ background: 'var(--green-light)', borderRadius: 12, padding: '1rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, flexShrink: 0 }}>❤️</div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--green)' }}>Clinic fund — lifetime</div>
                  <div style={{ fontSize: '0.68rem', color: '#5A8A5A', fontWeight: 300 }}>Your spend has contributed</div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--green)', marginLeft: 'auto' }}>$31.40</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
