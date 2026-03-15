'use client'
import { AppSidebar } from '@/components/AppSidebar'

const employees = [
  { name: 'Jamie Mercer', email: 'jamie@apexcorp.com', dept: 'Engineering', util: 72, balance: '$57.50', status: 'Active', statusColor: 'var(--green)' },
  { name: 'Priya Kapoor', email: 'p.kapoor@apexcorp.com', dept: 'Design', util: 95, balance: '$10.00', status: 'Active', statusColor: 'var(--green)' },
  { name: 'Sam Adeyemi', email: 's.adeyemi@apexcorp.com', dept: 'Sales', util: 18, balance: '$164.00', status: 'Low use', statusColor: 'var(--coral)' },
  { name: 'Maria Chen', email: 'm.chen@apexcorp.com', dept: 'Finance', util: 60, balance: '$80.00', status: 'Active', statusColor: 'var(--green)' },
  { name: 'Tom Reyes', email: 't.reyes@apexcorp.com', dept: 'Operations', util: 0, balance: '$200.00', status: 'Not started', statusColor: '#B4B2A9' },
]

const categories = [
  { label: 'Fitness', amount: '$3,820', pct: 41, color: 'var(--slate-mid)' },
  { label: 'Supplements', amount: '$2,140', pct: 23, color: 'var(--slate-light)' },
  { label: 'Diagnostics', amount: '$1,890', pct: 20, color: 'var(--coral-mid)' },
  { label: 'Mental wellness', amount: '$890', pct: 9, color: '#C5A8E8' },
]

const alerts = [
  { ico: '❤️', bg: 'var(--green-light)', title: '$283 routed to clinic fund', sub: 'Funding screenings this month' },
  { ico: '💳', bg: 'var(--coral-pale)', title: 'Budget refresh in 3 days', sub: '$17,400 loads April 1' },
  { ico: 'ℹ️', bg: 'var(--slate-pale)', title: '6 new employees enrolled', sub: 'Active since Mar 10' },
]

export default function HRDashboardPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'var(--font-body)', fontSize: 14, background: 'var(--offwhite)', color: 'var(--ink)' }}>
      <AppSidebar activeItem="dashboard" mode="employer" userName="Sarah Park" company="Apex Corp · HR Admin" />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        {/* Topbar */}
        <div style={{ background: 'white', borderBottom: '0.5px solid var(--border)', padding: '0.85rem 1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10 }}>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>Company Dashboard</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 300 }}>Apex Corp · March 2026</div>
          </div>
          <div style={{ display: 'flex', gap: '0.7rem' }}>
            <button style={{ padding: '0.48rem 1rem', borderRadius: '2rem', fontSize: '0.76rem', background: 'white', border: '0.5px solid var(--border)', color: 'var(--ink)', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Export report</button>
            <button style={{ padding: '0.48rem 1rem', borderRadius: '2rem', fontSize: '0.76rem', background: 'var(--slate)', border: 'none', color: 'white', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 600 }}>+ Invite employees</button>
          </div>
        </div>

        <div style={{ padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.9rem' }}>
            {[
              { label: 'Total employees', value: '87', sub: 'enrolled in Bovo', badge: '+6 this month', badgeColor: 'var(--green-light)', badgeText: 'var(--green)' },
              { label: 'Benefits utilized', value: '74%', sub: 'vs. 14% industry avg', badge: '↑ 8% vs last month', badgeColor: 'var(--green-light)', badgeText: 'var(--green)' },
              { label: 'Monthly spend', value: '$9,430', sub: 'of $17,400 budget', badge: '54% used', badgeColor: 'var(--coral-pale)', badgeText: 'var(--coral)' },
              { label: 'Clinic fund total', value: '$283', sub: 'contributed this month', badge: '↗ from spend', badgeColor: 'var(--green-light)', badgeText: 'var(--green)' },
            ].map(s => (
              <div key={s.label} style={{ background: 'white', borderRadius: 12, border: '0.5px solid var(--border)', padding: '0.9rem 1rem' }}>
                <div style={{ fontSize: '0.63rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--muted)', marginBottom: '0.22rem' }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--muted)', marginTop: '0.2rem', fontWeight: 300 }}>{s.sub}</div>
                <span style={{ display: 'inline-block', fontSize: '0.6rem', padding: '0.1rem 0.4rem', borderRadius: '2rem', marginTop: '0.28rem', background: s.badgeColor, color: s.badgeText }}>{s.badge}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 330px', gap: '1.2rem' }}>

            {/* Employee table */}
            <div style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)', overflow: 'hidden' }}>
              <div style={{ padding: '0.85rem 1.2rem', borderBottom: '0.5px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>Employee roster</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--slate-mid)', cursor: 'pointer' }}>View all 87 →</span>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Employee', 'Dept', 'Utilization', 'Balance', 'Status'].map(h => (
                      <th key={h} style={{ fontSize: '0.63rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--muted)', padding: '0.55rem 1.1rem', textAlign: 'left', borderBottom: '0.5px solid var(--border)', fontWeight: 600 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {employees.map(emp => (
                    <tr key={emp.email} style={{ borderBottom: '0.5px solid var(--border)' }}>
                      <td style={{ padding: '0.6rem 1.1rem', fontSize: '0.79rem' }}>
                        <strong>{emp.name}</strong>
                        <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>{emp.email}</div>
                      </td>
                      <td style={{ padding: '0.6rem 1.1rem', fontSize: '0.79rem' }}>{emp.dept}</td>
                      <td style={{ padding: '0.6rem 1.1rem', fontSize: '0.79rem' }}>
                        {emp.util}%
                        <div style={{ height: 4, background: 'var(--slate-pale)', borderRadius: 2, marginTop: 3, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${emp.util}%`, background: 'var(--slate-mid)', borderRadius: 2 }} />
                        </div>
                      </td>
                      <td style={{ padding: '0.6rem 1.1rem', fontSize: '0.79rem' }}>{emp.balance}</td>
                      <td style={{ padding: '0.6rem 1.1rem', fontSize: '0.79rem' }}>
                        <span style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: emp.statusColor, marginRight: '0.4rem' }} />
                        {emp.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right col */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

              {/* Budget donut */}
              <div style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)' }}>
                <div style={{ padding: '0.85rem 1.2rem', borderBottom: '0.5px solid var(--border)', fontSize: '0.84rem', fontWeight: 600 }}>Budget overview</div>
                <div style={{ padding: '1rem 1.2rem 0.5rem', textAlign: 'center' }}>
                  <div style={{ position: 'relative', width: 105, height: 105, margin: '0 auto 0.75rem' }}>
                    <svg width="105" height="105" viewBox="0 0 110 110" style={{ transform: 'rotate(-90deg)' }}>
                      <circle cx="55" cy="55" r="45" fill="none" stroke="var(--slate-pale)" strokeWidth="9" />
                      <circle cx="55" cy="55" r="45" fill="none" stroke="var(--slate-mid)" strokeWidth="9" strokeLinecap="round" strokeDasharray="283" strokeDashoffset="130" />
                    </svg>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, lineHeight: 1 }}>54%</div>
                      <div style={{ fontSize: '0.58rem', color: 'var(--muted)' }}>spent</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '0 1.2rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.38rem' }}>
                  {[['Monthly budget', '$17,400'], ['Spent to date', '$9,430'], ['Clinic fund', '$283 ↗'], ['Remaining', '$7,970']].map(([l, v], i) => (
                    <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.77rem' }}>
                      <span style={{ color: 'var(--muted)', fontWeight: 300 }}>{l}</span>
                      <span style={{ fontWeight: 600, color: i === 2 ? 'var(--green)' : i === 3 ? 'var(--coral)' : 'var(--ink)' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category spend */}
              <div style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)', padding: '0.85rem 1.2rem 1rem' }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 600, marginBottom: '0.75rem' }}>Spend by category</div>
                {categories.map(c => (
                  <div key={c.label} style={{ marginBottom: '0.7rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.18rem' }}>
                      <span>{c.label}</span><span style={{ color: 'var(--muted)' }}>{c.amount} · {c.pct}%</span>
                    </div>
                    <div style={{ height: 4, background: 'var(--slate-pale)', borderRadius: 2, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${c.pct}%`, background: c.color, borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Alerts */}
              <div style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)', padding: '0.85rem 1.2rem' }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 600, marginBottom: '0.5rem' }}>Alerts</div>
                {alerts.map(a => (
                  <div key={a.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', padding: '0.6rem 0', borderBottom: '0.5px solid var(--border)' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: a.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>{a.ico}</div>
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600 }}>{a.title}</div>
                      <div style={{ fontSize: '0.69rem', color: 'var(--muted)', marginTop: '0.08rem', fontWeight: 300 }}>{a.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
