'use client'
import { useState } from 'react'
import { AppSidebar } from '@/components/AppSidebar'

const claims = [
  { ico: '🏋️', name: 'Planet Fitness — March', date: 'Submitted Mar 1, 2026', amt: '$24.99', status: 'Approved', statusBg: 'var(--green-light)', statusColor: 'var(--green)' },
  { ico: '💊', name: 'Vitamin D3 + Omega-3', date: 'Submitted Mar 5, 2026', amt: '$32.51', status: 'Pending', statusBg: 'var(--coral-pale)', statusColor: 'var(--coral)' },
  { ico: '🧪', name: 'LabCorp — Comprehensive panel', date: 'Submitted Feb 20, 2026', amt: '$89.00', status: 'Reimbursed', statusBg: 'var(--green-light)', statusColor: 'var(--green)' },
  { ico: 'ℹ️', name: 'Thyroid function panel', date: 'Submitted Jan 28, 2026', amt: '$49.00', status: 'Under review', statusBg: 'var(--slate-pale)', statusColor: 'var(--slate-mid)' },
]

export default function ClaimsPage() {
  const [activeTab, setActiveTab] = useState('All')
  const tabs = ['All', 'Pending', 'Approved', 'Reimbursed']

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'var(--font-body)', fontSize: 14, background: 'var(--offwhite)', color: 'var(--ink)' }}>
      <AppSidebar activeItem="claims" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>

        {/* Topbar */}
        <div style={{ background: 'white', borderBottom: '0.5px solid var(--border)', padding: '0.85rem 1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10 }}>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>Claims & Reimbursement</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 300 }}>Submit receipts · Track approvals · Download statements</div>
          </div>
          <button style={{ background: 'var(--coral)', color: 'white', padding: '0.48rem 1.1rem', borderRadius: '2rem', fontSize: '0.76rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>+ New claim</button>
        </div>

        <div style={{ padding: '1.5rem 1.75rem', display: 'grid', gridTemplateColumns: '1fr 310px', gap: '1.2rem', alignItems: 'start' }}>

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)' }}>
              <div style={{ padding: '0.85rem 1.2rem', borderBottom: '0.5px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>My claims</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--slate-mid)', cursor: 'pointer' }}>Download all →</span>
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', padding: '0.85rem 1.2rem 0' }}>
                {tabs.map(t => (
                  <button key={t} onClick={() => setActiveTab(t)} style={{ padding: '0.3rem 0.8rem', borderRadius: '2rem', fontSize: '0.73rem', border: `0.5px solid ${activeTab === t ? 'var(--slate)' : 'var(--border)'}`, background: activeTab === t ? 'var(--slate)' : 'white', color: activeTab === t ? 'white' : 'var(--muted)', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>{t}</button>
                ))}
              </div>
              <div style={{ padding: '0 1.2rem 0.5rem' }}>
                {claims.map(c => (
                  <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.78rem 0', borderBottom: '0.5px solid var(--border)' }}>
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: c.statusBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, flexShrink: 0 }}>{c.ico}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 500 }}>{c.name}</div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--muted)', fontWeight: 300 }}>{c.date}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{c.amt}</div>
                      <span style={{ fontSize: '0.6rem', padding: '0.1rem 0.42rem', borderRadius: '2rem', background: c.statusBg, color: c.statusColor }}>{c.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Year totals */}
            <div style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)', padding: '1rem 1.2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.85rem' }}>
                {[['$196', 'Total claimed', 'var(--slate-xpale)'], ['$114', 'Reimbursed', 'var(--green-light)'], ['$82', 'Pending', 'var(--coral-pale)']].map(([num, label, bg]) => (
                  <div key={label as string} style={{ textAlign: 'center', padding: '0.7rem', borderRadius: 10, background: bg as string }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.55rem', fontWeight: 700, lineHeight: 1, color: label === 'Reimbursed' ? 'var(--green)' : label === 'Pending' ? 'var(--coral)' : 'var(--ink)' }}>{num}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--muted)', marginTop: '0.2rem', fontWeight: 300 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — submit form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)' }}>
              <div style={{ padding: '0.85rem 1.2rem', borderBottom: '0.5px solid var(--border)', fontSize: '0.84rem', fontWeight: 600 }}>Submit a claim</div>

              {/* Upload zone */}
              <div style={{ margin: '1rem 1.2rem', border: '1.5px dashed var(--slate-pale)', borderRadius: 12, padding: '1.5rem', textAlign: 'center', cursor: 'pointer', background: 'var(--slate-xpale)' }}>
                <div style={{ fontSize: 22, marginBottom: '0.45rem' }}>📤</div>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--slate-mid)', fontWeight: 600, marginBottom: '0.18rem' }}>Upload receipt or invoice</strong>
                <p style={{ fontSize: '0.74rem', color: 'var(--muted)', lineHeight: 1.5, fontWeight: 300 }}>Drag & drop · PDF, JPG, PNG · max 10MB</p>
              </div>

              <div style={{ padding: '0 1.2rem' }}>
                <div style={{ marginBottom: '0.8rem' }}>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.28rem' }}>Category</label>
                  <select style={{ width: '100%', padding: '0.58rem 0.85rem', border: '0.5px solid var(--border)', borderRadius: 8, fontSize: '0.8rem', fontFamily: 'var(--font-body)', background: 'white', outline: 'none' }}>
                    <option>Fitness & gym</option><option>Supplements</option><option>Diagnostics & labs</option><option>Mental wellness</option><option>Other</option>
                  </select>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.8rem' }}>
                  {[{ label: 'Amount', type: 'text', ph: '$0.00' }, { label: 'Date', type: 'date', ph: '' }].map(f => (
                    <div key={f.label}>
                      <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.28rem' }}>{f.label}</label>
                      <input type={f.type} placeholder={f.ph} style={{ width: '100%', padding: '0.58rem 0.85rem', border: '0.5px solid var(--border)', borderRadius: 8, fontSize: '0.8rem', fontFamily: 'var(--font-body)', outline: 'none' }} />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '0.8rem' }}>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.28rem' }}>Vendor</label>
                  <input type="text" placeholder="e.g. Planet Fitness" style={{ width: '100%', padding: '0.58rem 0.85rem', border: '0.5px solid var(--border)', borderRadius: 8, fontSize: '0.8rem', fontFamily: 'var(--font-body)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '0.8rem' }}>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.28rem' }}>Notes (optional)</label>
                  <textarea placeholder="Any additional context..." style={{ width: '100%', padding: '0.58rem 0.85rem', border: '0.5px solid var(--border)', borderRadius: 8, fontSize: '0.8rem', fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical', minHeight: 60 }} />
                </div>
              </div>
              <div style={{ padding: '0 1.2rem 1.2rem' }}>
                <button style={{ width: '100%', background: 'var(--slate)', color: 'white', padding: '0.72rem', borderRadius: '2rem', fontSize: '0.86rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Submit claim</button>
              </div>
            </div>

            {/* Year summary */}
            <div style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)', padding: '1.2rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.7rem' }}>2026 benefit year</div>
              {[['Annual budget', '$2,400'], ['Used', '$196'], ['Remaining', '$2,204']].map(([l, v], i) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.38rem 0', borderBottom: i < 2 ? '0.5px solid var(--border)' : 'none', fontSize: '0.78rem' }}>
                  <span style={{ color: 'var(--muted)', fontWeight: 300 }}>{l}</span>
                  <span style={{ fontWeight: 600, color: i === 2 ? 'var(--green)' : 'var(--ink)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
