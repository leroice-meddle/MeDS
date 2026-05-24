import React, { useState, useRef, useEffect } from 'react'

function SelectInline({ label = 'Label', description = '', placeholder = 'Select...', options = [], hasLabel = true, hasDescription = false, hasError = false, error = 'Error', state = 'default', onChange }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const ref = useRef(null)
  const isDisabled = state === 'disabled'
  const isError = state === 'error'

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (opt) => {
    setSelected(opt)
    setOpen(false)
    onChange && onChange(opt)
  }

  const getBorderColor = () => {
    if (isDisabled) return '#b3b3b3'
    if (isError) return '#900b09'
    if (open) return 'var(--meddleBrand500, #007388)'
    return '#e6e6e6'
  }

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontFamily: 'Geist, sans-serif', width: '100%', position: 'relative' }} ref={ref}>
      {hasLabel && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '40px', width: '41px', flexShrink: 0 }}>
          <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: isDisabled ? '#b3b3b3' : '#1e1e1e', margin: 0 }}>{label}</p>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, minWidth: 0 }}>
        {hasDescription && description && (
          <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: isDisabled ? '#b3b3b3' : '#757575', margin: 0, whiteSpace: 'nowrap' }}>{description}</p>
        )}
        <div style={{ position: 'relative' }}>
          <div
            onClick={() => !isDisabled && setOpen(!open)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '40px', padding: '0 12px 0 16px', border: `1px solid ${getBorderColor()}`, borderRadius: '8px', background: isDisabled ? '#d9d9d9' : 'white', cursor: isDisabled ? 'not-allowed' : 'pointer', boxSizing: 'border-box', width: '100%' }}
          >
            <p style={{ flex: 1, fontSize: '16px', fontWeight: 400, color: selected ? (isDisabled ? '#b3b3b3' : '#1e1e1e') : '#b3b3b3', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {selected ? (typeof selected === 'object' ? selected.label : selected) : placeholder}
            </p>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s ease' }}>
              <path d="M4 6L8 10L12 6" stroke={isDisabled ? '#b3b3b3' : '#1e1e1e'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {open && !isDisabled && (
            <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, background: 'white', border: '1px solid #e6e6e6', borderRadius: '8px', padding: '8px', boxShadow: '0 1px 2px rgba(12,12,13,0.05), 0 1px 2px rgba(12,12,13,0.1)', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {options.map((opt, i) => {
                const optLabel = typeof opt === 'object' ? opt.label : opt
                const isSelected = selected && (typeof selected === 'object' ? selected.label === optLabel : selected === optLabel)
                return (
                  <div key={i} onClick={() => handleSelect(opt)}
                    style={{ padding: '8px', borderRadius: '6px', fontSize: '16px', fontWeight: isSelected ? 500 : 400, color: '#1e1e1e', cursor: 'pointer', background: isSelected ? '#f5f5f5' : 'transparent', letterSpacing: '-0.16px', lineHeight: 1.4, fontFamily: 'Geist, sans-serif' }}>
                    {optLabel}
                  </div>
                )
              })}
            </div>
          )}
        </div>
        {isError && hasError && <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: '#900b09', margin: 0, whiteSpace: 'nowrap' }}>{error}</p>}
      </div>
    </div>
  )
}

export default SelectInline
