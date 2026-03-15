'use client'
import { useState } from 'react'
import { AppSidebar } from '@/components/AppSidebar'

const FILTERS = ['All', 'Fitness', 'Supplements', 'Diagnostics', 'Mental wellness']

const featured = [
  { ico: '🏋️', name: 'Planet Fitness — All-Club Black Card', tag: 'Fitness', price: '$24.99/mo', eligible: true, bg: 'var(--slate-xpale)' },
  { ico: '🧬', name: 'Comprehensive Blood Panel', tag: 'Diagnostics', price: '$89.00', eligible: false, bg: 'var(--coral-pale)' },
  { ico: '❤️', name: 'Colorectal Screening', tag: 'Preventive', price: 'Covered', eligible: true, bg: 'var(--green-light)' },
]

const products = [
  { ico: '🏊', name: 'LA Fitness Membership', tag: 'Fitness', price: '$34.99/mo', bg: 'var(--slate-xpale)' },
  { ico: '💊', name: 'Vitamin D3 + K2 Bundle', tag: 'Supplements', price: '$18.99', bg: 'var(--coral-pale)' },
  { ico: '🧪', name: 'Hormone Health Panel', tag: 'Diagnostics', price: '$129.00', bg: 'var(--green-light)' },
  { ico: '🧘', name: 'Calm Premium — 1 Year', tag: 'Mental wellness', price: '$69.99/yr', bg: '#F0EAF8' },
  { ico: '🚴', name: 'Peloton App Membership', tag: 'Fitness', price: '$12.99/mo', bg: 'var(--slate-xpale)' },
  { ico: '🐟', name: 'Omega-3 Fish Oil 90ct', tag: 'Supplements', price: '$22.00', bg: 'var(--coral-pale)' },
  { ico: '🩸', name: 'Thyroid Function Test', tag: 'Diagnostics', price: '$49.00', bg: 'var(--green-light)' },
  { ico: '🌿', name: 'Noom Weight — 3 Months', tag: 'Nutrition', price: '$59.00', bg: '#F0EAF8' },
]

export default function MarketplacePage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [cartCount, setCartCount] = useState(1)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'var(--font-body)', fontSize: 14, background: 'var(--offwhite)', color: 'var(--ink)' }}>
      <AppSidebar activeItem="marketplace" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto', position: 'relative' }}>

        {/* Topbar */}
        <div style={{ background: 'white', borderBottom: '0.5px solid var(--border)', padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ flex: 1, maxWidth: 420, display: 'flex', alignItems: 'center', gap: '0.45rem', background: 'var(--offwhite)', border: '0.5px solid var(--border)', borderRadius: '2rem', padding: '0.42rem 1rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
            🔍 Search gym memberships, supplements, tests...
          </div>
          <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                padding: '0.32rem 0.8rem', borderRadius: '2rem', fontSize: '0.73rem',
                border: `0.5px solid ${activeFilter === f ? 'var(--slate)' : 'var(--border)'}`,
                background: activeFilter === f ? 'var(--slate)' : 'white',
                color: activeFilter === f ? 'white' : 'var(--muted)',
                cursor: 'pointer', fontFamily: 'var(--font-body)',
              }}>{f}</button>
            ))}
          </div>
        </div>

        <div style={{ padding: '1.4rem' }}>

          {/* Featured */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.9rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.01em' }}>Featured for you</h3>
            <span style={{ fontSize: '0.73rem', color: 'var(--slate-mid)', cursor: 'pointer' }}>View all</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.9rem', marginBottom: '1.75rem' }}>
            {featured.map(item => (
              <div key={item.name} style={{ background: 'white', borderRadius: 14, border: '0.5px solid var(--border)', overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ height: 110, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>{item.ico}</div>
                <div style={{ padding: '0.8rem 0.95rem' }}>
                  <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '0.18rem' }}>{item.tag}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.22rem' }}>{item.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--slate-mid)', fontWeight: 600 }}>
                    {item.price}
                    {item.eligible && <span style={{ marginLeft: '0.4rem', background: 'var(--green-light)', color: 'var(--green)', fontSize: '0.68rem', padding: '0.08rem 0.4rem', borderRadius: '2rem' }}>Eligible</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All products */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.9rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.01em' }}>All products</h3>
            <span style={{ fontSize: '0.73rem', color: 'var(--slate-mid)', cursor: 'pointer' }}>Sort: Recommended</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.9rem' }}>
            {products.map(item => (
              <div key={item.name} style={{ background: 'white', borderRadius: 12, border: '0.5px solid var(--border)', overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ height: 82, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>{item.ico}</div>
                <div style={{ padding: '0.7rem 0.85rem' }}>
                  <div style={{ fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '0.12rem' }}>{item.tag}</div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 500, marginBottom: '0.35rem', lineHeight: 1.3 }}>{item.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--slate-mid)', fontWeight: 600 }}>{item.price}</span>
                    <button onClick={() => setCartCount(c => c + 1)} style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--slate)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 16, flexShrink: 0 }}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart FAB */}
        <button style={{ position: 'fixed', bottom: '1.25rem', right: '1.25rem', background: 'var(--coral)', color: 'white', padding: '0.7rem 1.4rem', borderRadius: '2rem', fontSize: '0.82rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', zIndex: 20 }}>
          🛍 Cart ({cartCount})
        </button>
      </div>
    </div>
  )
}
