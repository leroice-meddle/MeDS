import React, { useState } from 'react'

function StarIcon({ color = '#757575' }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M12 2l2.9 5.86 6.47.94-4.68 4.56 1.1 6.44L12 16.77l-5.79 3.03 1.1-6.44L2.63 8.8l6.47-.94L12 2z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function NavigationButton({
  label = 'Label',
  state = 'Default',
  direction = 'Column',
  size = 'Small',
  hasIcon = true,
  hasLabel = true,
  icon,
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const isActive = state === 'Active'
  const isHover = hovered && state === 'Default'
  const isRow = direction === 'Row'

  const textColor = isActive ? '#003741' : '#757575'
  const iconColor = isActive ? '#003741' : '#757575'
  const fontSize = size === 'Small' ? 14 : 16
  const fontWeight = size === 'Small' ? 500 : 400
  const bg = isHover ? '#f5f5f5' : 'transparent'

  const containerStyle = {
    display: 'flex',
    flexDirection: isRow ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isRow ? 6 : 8,
    padding: 8,
    borderRadius: 8,
    background: bg,
    cursor: 'pointer',
    transition: 'background 0.1s',
  }

  return (
    <div style={containerStyle} onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {hasIcon && (icon || <StarIcon color={iconColor} />)}
      {hasLabel && (
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize, fontWeight, lineHeight: 1, color: textColor, whiteSpace: 'nowrap', margin: 0, textAlign: 'center' }}>
          {label}
        </p>
      )}
    </div>
  )
}

export function NavigationButtonList({
  direction = 'Row',
  items = [],
  activeIndex = 0,
  onItemClick,
}) {
  const isColumn = direction === 'Column'
  const defaults = items.length ? items : ['Label', 'Label', 'Label', 'Label', 'Label']

  return (
    <div style={{ display: 'flex', flexDirection: isColumn ? 'column' : 'row', alignItems: isColumn ? 'stretch' : 'center', gap: 0, width: isColumn ? 115 : 'auto', height: isColumn ? 'auto' : 68 }}>
      {defaults.map((item, i) => (
        <NavigationButton
          key={i}
          label={typeof item === 'string' ? item : item.label}
          state={i === activeIndex ? 'Active' : 'Default'}
          direction={direction}
          onClick={() => onItemClick?.(i)}
          style={isColumn ? { width: '100%' } : {}}
        />
      ))}
    </div>
  )
}

export function NavigationPill({
  label = 'Link',
  state = 'Default',
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const isActive = state === 'Active'
  const isHover = hovered && state === 'Default'

  const bg = isActive ? '#f0f7f8' : isHover ? '#f5f5f5' : 'transparent'
  const color = isActive ? '#001b1f' : '#1e1e1e'

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8, borderRadius: 8, background: bg, cursor: 'pointer', transition: 'background 0.1s' }}
    >
      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, fontWeight: 400, lineHeight: 1, color, whiteSpace: 'nowrap', margin: 0 }}>
        {label}
      </p>
    </div>
  )
}

export function NavigationPillList({
  direction = 'Row',
  items = [],
  activeIndex = 0,
  onItemClick,
}) {
  const isColumn = direction === 'Column'
  const defaults = items.length ? items : ['Link', 'Link', 'Link', 'Link', 'Link', 'Link', 'Link']

  return (
    <div style={{ display: 'flex', flexDirection: isColumn ? 'column' : 'row', gap: isColumn ? 8 : 8, alignItems: isColumn ? 'stretch' : 'center', flexWrap: isColumn ? 'nowrap' : 'wrap', width: isColumn ? 115 : 'auto' }}>
      {defaults.map((item, i) => (
        <NavigationPill
          key={i}
          label={typeof item === 'string' ? item : item.label}
          state={i === activeIndex ? 'Active' : 'Default'}
          onClick={() => onItemClick?.(i)}
        />
      ))}
    </div>
  )
}