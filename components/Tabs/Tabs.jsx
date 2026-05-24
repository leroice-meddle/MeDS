import React, { useState } from 'react'

export function Tab({ label = 'Label', active = false, state = 'Default', onClick }) {
  const [hovered, setHovered] = useState(false)
  const isHover = hovered && state === 'Default'

  const borderColor = active ? '#303030' : '#b2b2b2'
  const textColor = active ? '#303030' : '#767676'
  const bg = isHover ? '#f5f5f5' : 'transparent'

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px 12px',
        borderRadius: '2px 2px 0 0',
        borderBottom: '1px solid ' + borderColor,
        background: bg,
        cursor: 'pointer',
        transition: 'background 0.1s',
        flexShrink: 0,
      }}
    >
      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: textColor, margin: 0, whiteSpace: 'nowrap' }}>
        {label}
      </p>
    </div>
  )
}

function Tabs({ items = [], activeIndex = 0, onTabClick, style: styleProp }) {
  const [active, setActive] = useState(activeIndex)
  const labels = items.length ? items : ['Label', 'Label', 'Label', 'Label', 'Label', 'Label']

  const handleClick = (i) => {
    setActive(i)
    onTabClick?.(i)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', overflow: 'hidden', ...styleProp }}>
      {labels.map((label, i) => (
        <Tab key={i} label={label} active={i === active} onClick={() => handleClick(i)} />
      ))}
    </div>
  )
}

export default Tabs