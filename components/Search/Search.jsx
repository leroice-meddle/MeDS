import React, { useState } from 'react'

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="7" cy="7" r="4.5" stroke="#b3b3b3" strokeWidth="1.5"/>
      <path d="M10.5 10.5l2.5 2.5" stroke="#b3b3b3" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function XIcon({ onClick }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, cursor: 'pointer' }} onClick={onClick}>
      <path d="M4 4l8 8M12 4l-8 8" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function Search({
  value = '',
  placeholder = 'Search',
  state = 'Default',
  onClear,
  onChange,
  style: styleProp,
}) {
  const disabled = state === 'Disabled'
  const filled = value.length > 0

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 120,
      height: 40,
      background: disabled ? '#d9d9d9' : 'white',
      border: disabled ? '1px solid #b2b2b2' : '1px solid #e6e6e6',
      borderRadius: 9999,
      padding: '0 16px',
      boxSizing: 'border-box',
      cursor: disabled ? 'not-allowed' : 'text',
      ...styleProp,
    }}>
      <span style={{
        flex: 1,
        fontFamily: 'Geist, sans-serif',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1,
        color: disabled ? '#b3b3b3' : filled ? '#1e1e1e' : '#b3b3b3',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}>
        {filled ? value : placeholder}
      </span>
      {filled && !disabled && <XIcon onClick={onClear} />}
      {!filled && <SearchIcon />}
    </div>
  )
}

export default Search