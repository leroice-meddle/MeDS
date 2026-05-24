import React, { useState } from 'react'

function CalendarButton({ number = '1', state = 'Default' }) {
  const [hovered, setHovered] = useState(false)

  if (state === 'Hidden') return <div style={{ width: 40, height: 40 }} />

  const getBackground = () => {
    if (state === 'Active') return '#005e70'
    if (state === 'Range' || state === 'Range Disabled') return '#f5f5f5'
    if (hovered && state === 'Default') return 'white'
    return 'transparent'
  }

  const getBorder = () => {
    if (hovered && state === 'Default') return '1px solid #e6e6e6'
    return 'none'
  }

  const getBorderRadius = () => {
    if (['Active', 'Hover', 'Hidden', 'Disabled', 'Range Disabled'].includes(state)) return '9999px'
    if (state === 'Range') return '0'
    return '8px'
  }

  const getColor = () => {
    if (state === 'Active') return '#f0f7f8'
    if (state === 'Range') return '#003741'
    if (state === 'Disabled' || state === 'Range Disabled') return '#b3b3b3'
    if (hovered && state === 'Default') return '#005e70'
    return '#1e1e1e'
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        background: getBackground(),
        border: getBorder(),
        borderRadius: getBorderRadius(),
        cursor: ['Disabled', 'Range Disabled'].includes(state) ? 'default' : 'pointer',
        boxSizing: 'border-box',
        flexShrink: 0,
        transition: 'background 0.1s',
      }}
    >
      <span style={{
        fontFamily: 'Geist, sans-serif',
        fontSize: 16,
        fontWeight: 400,
        color: getColor(),
        letterSpacing: '-0.16px',
        lineHeight: 1.4,
        userSelect: 'none',
      }}>
        {number}
      </span>
    </div>
  )
}

export default CalendarButton