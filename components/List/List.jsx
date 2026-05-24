import React from 'react'

// Switch
export function Switch({ on = false, disabled = false, onChange }) {
  return (
    <div onClick={disabled ? undefined : onChange} style={{ width: 40, height: 24, borderRadius: 9999, border: on ? '1px solid #005e70' : '1px solid #007388', background: on ? '#005e70' : 'white', display: 'flex', alignItems: 'center', padding: 3, boxSizing: 'border-box', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, transition: 'background 0.15s', flexShrink: 0 }}>
      <div style={{ width: 18, height: 18, borderRadius: '50%', background: on ? 'white' : '#007388', marginLeft: on ? 'auto' : 0, transition: 'margin 0.15s', flexShrink: 0 }} />
    </div>
  )
}

// EditButton
export function EditButton({ variant = 'unselected' }) {
  const colors = { remove: '#ec221f', add: '#14ae5c', selected: '#3f81ea' }
  const icons = {
    remove: <path d="M4 4l4 4m0-4l-4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>,
    add:    <path d="M4 6h4M6 4v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>,
    selected: <path d="M2 5l2.5 3L8 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 2, paddingRight: 1 }}>
      <div style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: variant === 'unselected' ? 'transparent' : colors[variant], border: variant === 'unselected' ? '1.5px solid rgba(48,48,48,0.6)' : 'none' }}>
        {variant !== 'unselected' && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">{icons[variant]}</svg>
        )}
      </div>
    </div>
  )
}

// Grabber
export function Grabber() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 12 }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 7h10M5 10h10M5 13h10" stroke="#b3b3b3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

// Trailing
export function Trailing({ type = 'Default', showCheck = true, showInfo = true }) {
  const pill = (text) => (
    <div style={{ background: 'rgba(12,12,13,0.2)', borderRadius: 9999, padding: '5px 12px', fontFamily: 'Geist, sans-serif', fontSize: 16, color: '#1e1e1e', whiteSpace: 'nowrap', lineHeight: 1.4 }}>{text}</div>
  )
  const chevron = <svg width="5" height="10" viewBox="0 0 5 10" fill="none"><path d="M1 1l3 4-3 4" stroke="#b3b3b3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  const check = <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  const info = <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="#3f81ea" strokeWidth="1.5"/><path d="M10 9v5M10 7v1" stroke="#3f81ea" strokeWidth="1.5" strokeLinecap="round"/></svg>
  const more = <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="4" r="1.2" fill="#757575"/><circle cx="8" cy="8" r="1.2" fill="#757575"/><circle cx="8" cy="12" r="1.2" fill="#757575"/></svg>

  if (type === 'Toggle')           return <Switch on={true} />
  if (type === 'Picker - Date')    return pill('Jun 2026')
  if (type === 'Picker - Time')    return pill('7:30PM')
  if (type === 'Picker - Date and Time') return <div style={{ display: 'flex', gap: 7 }}>{pill('Jun 2026')}{pill('7:30PM')}</div>
  if (type === 'Stepper')          return <div style={{ display: 'flex', gap: 8, alignItems: 'center', background: 'rgba(12,12,13,0.2)', borderRadius: 9999, padding: '6px 12px' }}>{check}<div style={{ width: 1, height: 22, background: '#d9d9d9' }} />{check}</div>
  if (type === 'Button')           return <span style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, color: '#3f81ea', cursor: 'pointer' }}>Button</span>
  if (type === 'Pop-Up')           return <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><span style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, color: '#757575' }}>Pop-Up</span>{more}</div>
  if (type === 'Disclosure')       return <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}><span style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, color: '#757575', lineHeight: 1.4 }}>Detail</span>{chevron}</div>
  // Default
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <span style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, color: '#757575', lineHeight: 1.4, whiteSpace: 'nowrap' }}>Detail</span>
      {showInfo && info}
      {showCheck && check}
      {chevron}
    </div>
  )
}

// Row
export function Row({ title = 'Title', subtitle = 'Subtitle', showSubtitle = true, showTrailing = true, showGrabber = false, showEditButton = false, showImage = false, showMore = false, trailingType = 'Default', style: styleProp }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: 68, padding: '0 16px', boxSizing: 'border-box', width: '100%', ...styleProp }}>
      {showEditButton && <div style={{ width: 41, paddingRight: 16, flexShrink: 0 }}><EditButton /></div>}
      {showImage && <div style={{ width: 40, height: 40, borderRadius: 4, background: '#e3e3e3', flexShrink: 0, marginRight: 8 }} />}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', borderTop: '1px solid rgba(230,230,230,0.6)', minWidth: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, color: '#1e1e1e', margin: 0, lineHeight: 1.4, letterSpacing: '-0.16px' }}>{title}</p>
          {showSubtitle && <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 13, color: '#757575', margin: 0, lineHeight: 1.4, letterSpacing: '-0.13px' }}>{subtitle}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          {showTrailing && <Trailing type={trailingType} />}
          {showMore && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="4" r="1.2" fill="#1e1e1e"/>
              <circle cx="8" cy="8" r="1.2" fill="#1e1e1e"/>
              <circle cx="8" cy="12" r="1.2" fill="#1e1e1e"/>
            </svg>
          )}
          {showGrabber && <Grabber />}
        </div>
      </div>
    </div>
  )
}

// List
function List({ rows = [], style: styleProp }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', ...styleProp }}>
      {rows.map((row, i) => <Row key={i} {...row} />)}
    </div>
  )
}

export default List