import React, { useState } from 'react'

export function Segment({ label = 'Label', active = false, state = 'Default', onClick }) {
  const [hovered, setHovered] = useState(false)
  const isHover = hovered && state === 'Default'
  const showActive = active || isHover

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: '1 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px 12px',
        borderRadius: 9999,
        background: showActive ? '#e6e6e6' : 'transparent',
        cursor: 'pointer',
        transition: 'background 0.1s',
        minWidth: 0,
      }}
    >
      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: showActive ? '#303030' : '#767676', margin: 0, whiteSpace: 'nowrap' }}>
        {label}
      </p>
    </div>
  )
}

function Segments({ items = [], activeIndex = 0, onSegmentClick, style: styleProp }) {
  const [active, setActive] = useState(activeIndex)
  const labels = items.length ? items : ['Label', 'Label', 'Label', 'Label', 'Label', 'Label']

  const handleClick = (i) => {
    setActive(i)
    onSegmentClick?.(i)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: 37, overflow: 'hidden', width: '100%', ...styleProp }}>
      {labels.map((label, i) => (
        <Segment key={i} label={label} active={i === active} onClick={() => handleClick(i)} />
      ))}
    </div>
  )
}

export default Segments
