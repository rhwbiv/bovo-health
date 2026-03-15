import Link from 'next/link'
import { BovoLogo } from './BovoLogo'

interface SidebarProps {
  activeItem?: string
  userName?: string
  company?: string
  balance?: string
  balanceSub?: string
  mode?: 'employee' | 'employer'
}

const sidebarStyle: React.CSSProperties = {
  width: '215px',
  minHeight: '100vh',
  background: 'var(--slate)',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
}

const logoWrapStyle: React.CSSProperties = {
  padding: '1.2rem 1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  borderBottom: '0.5px solid rgba(255,255,255,0.08)',
}

const itemStyle = (active: boolean): React.CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.55rem',
  padding: '0.55rem 1rem',
  fontSize: '0.8rem',
  color: active ? 'white' : 'rgba(255,255,255,0.5)',
  cursor: 'pointer',
  borderLeft: active ? '2px solid var(--coral-mid)' : '2px solid transparent',
  background: active ? 'rgba(232,96,60,0.15)' : 'transparent',
  textDecoration: 'none',
  transition: 'all 0.15s',
})

const labelStyle: React.CSSProperties = {
  fontSize: '0.58rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.28)',
  padding: '0.6rem 1rem 0.2rem',
}

const employeeItems = [
  { label: 'Overview', items: [
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
    { id: 'marketplace', label: 'Marketplace', href: '/marketplace' },
  ]},
  { label: 'My card', items: [
    { id: 'card', label: 'Bovo card', href: '/dashboard' },
    { id: 'transactions', label: 'Transactions', href: '/dashboard' },
    { id: 'claims', label: 'Claims', href: '/claims' },
  ]},
  { label: 'Impact', items: [
    { id: 'clinic', label: 'Clinic fund', href: '/dashboard' },
    { id: 'settings', label: 'Settings', href: '/dashboard' },
  ]},
]

const employerItems = [
  { label: 'Overview', items: [
    { id: 'dashboard', label: 'Dashboard', href: '/hr-dashboard' },
  ]},
  { label: 'Employees', items: [
    { id: 'roster', label: 'Employee roster', href: '/hr-dashboard' },
    { id: 'invite', label: 'Invite employees', href: '/hr-dashboard' },
  ]},
  { label: 'Budget', items: [
    { id: 'fund', label: 'Fund accounts', href: '/hr-dashboard' },
    { id: 'analytics', label: 'Spend analytics', href: '/hr-dashboard' },
  ]},
  { label: 'Impact', items: [
    { id: 'clinic-report', label: 'Clinic fund report', href: '/hr-dashboard' },
  ]},
  { label: 'Reports', items: [
    { id: 'reports', label: 'Monthly reports', href: '/hr-dashboard' },
  ]},
]

export function AppSidebar({
  activeItem = 'dashboard',
  userName = 'Jamie Mercer',
  company = 'Apex Corp',
  balance = '$142.50',
  balanceSub = 'Resets in 18 days',
  mode = 'employee',
}: SidebarProps) {
  const navGroups = mode === 'employee' ? employeeItems : employerItems

  return (
    <aside style={sidebarStyle}>
      <div style={logoWrapStyle}>
        <BovoLogo white size="sm" />
      </div>
      <div style={{ padding: '0.9rem 1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--slate-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, color: 'white', flexShrink: 0 }}>
          {userName.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'white' }}>{userName}</div>
          <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)' }}>{company}</div>
        </div>
      </div>
      <nav style={{ flex: 1, padding: '0.5rem 0' }}>
        {navGroups.map(group => (
          <div key={group.label}>
            <div style={labelStyle}>{group.label}</div>
            {group.items.map(item => (
              <Link key={item.id} href={item.href} style={itemStyle(activeItem === item.id)}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
      {mode === 'employee' && (
        <div style={{ margin: '0 0.75rem 1rem', background: 'rgba(232,96,60,0.12)', border: '0.5px solid rgba(232,96,60,0.25)', borderRadius: 10, padding: '0.65rem 0.85rem' }}>
          <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Available balance</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--coral-mid)', lineHeight: 1.1 }}>{balance}</div>
          <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.1rem' }}>{balanceSub}</div>
        </div>
      )}
    </aside>
  )
}
