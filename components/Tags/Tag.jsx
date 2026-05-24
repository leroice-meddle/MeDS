import React, { useState } from 'react'

const schemes = {
  Brand: {
    Primary:   { bg: '#005e70', bgHover: '#001b1f', text: '#f0f7f8', xColor: '#f0f7f8' },
    Secondary: { bg: '#f0f7f8', bgHover: '#b3d5db', text: '#003741', xColor: '#003741' },
  },
  Neutral: {
    Primary:   { bg: '#d9d9d9', bgHover: '#b3b3b3', text: '#1e1e1e', xColor: '#1e1e1e' },
    Secondary: { bg: '#f5f5f5', bgHover: '#e6e6e6', text: '#1e1e1e', xColor: '#1e1e1e' },
  },
  Danger: {
    Primary:   { bg: '#ec221f', bgHover: '#c00f0c', text: '#fee9e7', xColor: '#fee9e7' },
    Secondary: { bg: '#fdd3d0', bgHover: '#fcb3ad', text: '#900b09', xColor: '#900b09' },
  },
  Positive: {
    Primary:   { bg: '#14ae5c', bgHover: '#009951', text: '#ebffee', xColor: '#ebffee' },
    Secondary: { bg: '#cff7d3', bgHover: '#aff4c6', text: '#02542d', xColor: '#02542d' },
  },
  Warning: {
    Primary:   { bg: '#e8b931', bgHover: '#e5a000', text: '#401b01', xColor: '#401b01' },
    Secondary: { bg: '#fff1c2', bgHover: '#ffe8a3', text: '#682d03', xColor: '#682d03' },
  },
}

function XIcon({ color = '#1e1e1e' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 4l8 8M12 4l-8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function Tag({ label = 'Tag', scheme = 'Brand', variant = 'Primary', removable = true, onRemove, style: styleProp }) {
  const [hovered, setHovered] = useState(false)
  const t = schemes[scheme]?.[variant] || schemes.Brand.Primary
  const bg = hovered ? t.bgHover : t.bg
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 8, borderRadius: 8, background: bg, transition: 'background 0.1s', cursor: 'default', ...styleProp }}
    >
      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, fontWeight: 400, lineHeight: 1, color: t.text, margin: 0, whiteSpace: 'nowrap' }}>{label}</p>
      {removable && <div onClick={onRemove} style={{ cursor: 'pointer', display: 'flex', flexShrink: 0 }}><XIcon color={t.xColor} /></div>}
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M3 8l4 4 6-7" stroke="#f0f7f8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function TagToggle({ label = 'Label', active = true, showIcon = true, onClick, style: styleProp }) {
  return (
    <div
      onClick={onClick}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: active ? 8 : 0, padding: 8, borderRadius: 8, background: active ? '#005e70' : '#f0f7f8', cursor: 'pointer', transition: 'background 0.1s', ...styleProp }}
    >
      {active && showIcon && <CheckIcon />}
      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, fontWeight: 400, lineHeight: 1, color: active ? '#f0f7f8' : '#007388', margin: 0, whiteSpace: 'nowrap' }}>{label}</p>
    </div>
  )
}

export function TagToggleGroup({ items = [], activeIndices = [0], multiSelect = true, onToggle, style: styleProp }) {
  const [active, setActive] = useState(new Set(activeIndices))
  const labels = items.length ? items : ['Label', 'Label', 'Label', 'Label', 'Label', 'Label', 'Label']
  const handleToggle = (i) => {
    const next = new Set(active)
    if (next.has(i)) { if (multiSelect) next.delete(i) }
    else { if (!multiSelect) next.clear(); next.add(i) }
    setActive(next)
    onToggle?.(Array.from(next))
  }
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', ...styleProp }}>
      {labels.map((label, i) => <TagToggle key={i} label={label} active={active.has(i)} onClick={() => handleToggle(i)} />)}
    </div>
  )
}

export default Tag