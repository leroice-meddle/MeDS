import React, { useState } from 'react'

const f = { fontFamily: 'Geist, sans-serif', margin: 0 }

function StarIcon({ color = '#1e1e1e' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <path d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 14.27l-4.77 2.44.91-5.32L2.27 7.62l5.34-.78L10 2z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function MenuHeader({ heading, subheading }) {
  return (
    <div style={{ padding: '8px 16px 4px', width: '100%', boxSizing: 'border-box' }}>
      {heading && <p style={{ ...f, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.14px', color: '#757575' }}>{heading}</p>}
      {subheading && <p style={{ ...f, fontSize: 16, fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.16px', color: '#1e1e1e' }}>{subheading}</p>}
    </div>
  )
}

export function MenuSeparator() {
  return (
    <div style={{ padding: '8px 16px', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ height: 1, background: '#e6e6e6', width: '100%' }} />
    </div>
  )
}

export function MenuShortcut({ shortcut = '⇧A', color = '#1e1e1e' }) {
  return (
    <span style={{ ...f, fontSize: 16, fontWeight: 400, lineHeight: 1, color, whiteSpace: 'nowrap', flexShrink: 0 }}>
      {shortcut}
    </span>
  )
}

export function MenuItem({
  label = 'Menu Label',
  description,
  hasDescription = true,
  hasIcon = true,
  hasShortcut = true,
  shortcut = '⇧A',
  icon,
  state = 'Default',
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const isHover = hovered && state === 'Default'
  const isDisabled = state === 'Disabled'

  const textColor = isHover ? '#f0f7f8' : isDisabled ? '#b3b3b3' : '#1e1e1e'
  const descColor = isHover ? '#f0f7f8' : isDisabled ? '#b3b3b3' : '#757575'
  const bg = isHover ? '#005e70' : 'transparent'
  const iconColor = isHover ? '#f0f7f8' : isDisabled ? '#b3b3b3' : '#1e1e1e'

  return (
    <div
      onClick={isDisabled ? undefined : onClick}
      onMouseEnter={() => setState !== 'Disabled' && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        padding: '12px 16px',
        borderRadius: 8,
        background: bg,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'background 0.1s',
      }}
    >
      {hasIcon && <StarIcon color={iconColor} />}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ ...f, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: textColor, flex: 1 }}>{label}</p>
          {hasShortcut && <MenuShortcut shortcut={shortcut} color={textColor} />}
        </div>
        {hasDescription && description && (
          <p style={{ ...f, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.14px', color: descColor, width: '100%' }}>{description}</p>
        )}
      </div>
    </div>
  )
}

export function MenuSection({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {children}
    </div>
  )
}

function Menu({ children, style: styleProp }) {
  return (
    <div style={{
      background: 'white',
      border: '1px solid #e6e6e6',
      borderRadius: 8,
      padding: 8,
      width: 301,
      boxSizing: 'border-box',
      boxShadow: '0 4px 4px -1px rgba(12,12,13,0.1), 0 4px 4px -1px rgba(12,12,13,0.05)',
      display: 'flex',
      flexDirection: 'column',
      ...styleProp,
    }}>
      {children}
    </div>
  )
}

export default Menu