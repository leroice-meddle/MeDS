import React, { useState } from 'react'

function PlaceholderIcon({ color = '#1e1e1e' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <rect x="2" y="2" width="12" height="12" rx="2" stroke={color} strokeWidth="1.5"/>
      <path d="M5 8h6M8 5v6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function ChevronDown({ color = '#1e1e1e' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 6l4 4 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function NavItem({ label = 'Sidebar', state = 'Default', showDropdown = false, onClick, icon }) {
  const [hovered, setHovered] = useState(false)
  const isDisabled = state === 'Disabled'
  const isHover = hovered && state === 'Default'

  const textColor = isDisabled ? '#b3b3b3' : '#1e1e1e'
  const iconColor = isDisabled ? '#b3b3b3' : '#1e1e1e'

  return (
    <div
      onClick={isDisabled ? undefined : onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderRadius: 12,
        background: isHover ? '#f5f5f5' : 'transparent',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'background 0.1s',
      }}
    >
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        {icon || <PlaceholderIcon color={iconColor} />}
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.14px', color: textColor, margin: 0, whiteSpace: 'nowrap' }}>
          {label}
        </p>
      </div>
      {showDropdown && !isDisabled && <ChevronDown color={iconColor} />}
    </div>
  )
}

function Sidebar({
  logo,
  items = ['Dashboard', 'Patients', 'Appointments', 'Team', 'Settings'],
  activeItem,
  userName = 'Ariana Venti',
  userEmail = 'av@nmphysio.com.au',
  userAvatar,
  footerItems = ['Help & Support', 'Log Out'],
  onItemClick,
  onFooterItemClick,
  style: styleProp,
}) {
  const [active, setActive] = useState(activeItem || items[0])

  const handleClick = (item) => {
    setActive(item)
    onItemClick?.(item)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: 224,
      height: '100vh',
      background: 'white',
      border: '1px solid rgba(230,230,230,0.6)',
      borderRadius: 32,
      padding: 8,
      boxSizing: 'border-box',
      overflow: 'hidden',
      ...styleProp,
    }}>
      {/* Header / Logo */}
      <div style={{ display: 'flex', alignItems: 'center', height: 60, padding: '6px 8px', flexShrink: 0 }}>
        {logo || (
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 18, fontWeight: 600, color: '#005e70', margin: 0, letterSpacing: '-0.36px' }}>
            Meddle
          </p>
        )}
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 0, padding: '12px 0', minHeight: 0 }}>
        {items.map(item => (
          <NavItem
            key={item}
            label={item}
            state={active === item ? 'Active' : 'Default'}
            onClick={() => handleClick(item)}
            style={active === item ? { background: '#f0f7f8' } : {}}
          />
        ))}
      </div>

      {/* User Profile */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 0', flexShrink: 0 }}>
        <div style={{ height: 1, background: 'rgba(230,230,230,0.6)', width: '100%' }} />
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: 8, background: '#f5f5f5', borderRadius: 16, width: '100%', boxSizing: 'border-box' }}>
          {userAvatar || (
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#b3d5db', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, fontWeight: 500, color: '#005e70', margin: 0 }}>
                {userName.charAt(0)}
              </p>
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
            <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, fontWeight: 500, color: '#303030', margin: 0, letterSpacing: '-0.16px', lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{userName}</p>
            <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, fontWeight: 400, color: '#5a5a5a', margin: 0, letterSpacing: '-0.11px', lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{userEmail}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, padding: '12px 0 0', flexShrink: 0 }}>
        <div style={{ height: 1, background: 'rgba(230,230,230,0.6)', width: '100%', marginBottom: 8 }} />
        {footerItems.map(item => (
          <NavItem key={item} label={item} onClick={() => onFooterItemClick?.(item)} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar