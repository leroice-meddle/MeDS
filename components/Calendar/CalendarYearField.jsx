import React, { useState } from 'react'

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 6l4 4 4-4" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CalendarYearField({ value = '2025', onChange }) {
  const [open, setOpen] = useState(false)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 20 }, (_, i) => String(currentYear - 5 + i))

  return (
    <div style={{ position: 'relative', flex: 1 }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'white',
          border: '1px solid #e6e6e6',
          borderRadius: 8,
          padding: '6px 8px',
          cursor: 'pointer',
          fontFamily: 'Geist, sans-serif',
          fontSize: 16,
          color: '#1e1e1e',
          userSelect: 'none',
        }}
      >
        <span style={{ flex: 1 }}>{value}</span>
        <ChevronDown />
      </div>
      {open && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: 4,
          background: 'white',
          border: '1px solid #e6e6e6',
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          zIndex: 100,
          maxHeight: 200,
          overflowY: 'auto',
        }}>
          {years.map(y => (
            <div
              key={y}
              onClick={() => { onChange?.(y); setOpen(false) }}
              style={{
                padding: '8px 12px',
                fontFamily: 'Geist, sans-serif',
                fontSize: 16,
                color: y === value ? '#005e70' : '#1e1e1e',
                background: y === value ? '#f0f7f8' : 'transparent',
                cursor: 'pointer',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f5f5f5'}
              onMouseLeave={e => e.currentTarget.style.background = y === value ? '#f0f7f8' : 'transparent'}
            >
              {y}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CalendarYearField