import React, { useState } from 'react'

function InfoIcon({ color = '#1e1e1e' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.5"/>
      <path d="M10 9v5M10 7v1" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function XIcon({ color = '#1e1e1e' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 4l8 8M12 4l-8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function Notification({
  variant = 'Message',
  title = 'Title',
  body = 'Body text.',
  hasIcon = true,
  hasButton = true,
  dismissible = true,
  buttonLabel = 'Button',
  onDismiss,
  onAction,
  style: styleProp,
}) {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  const isAlert = variant === 'Alert'
  const textColor = isAlert ? '#900b09' : '#1e1e1e'
  const iconColor = isAlert ? '#900b09' : '#1e1e1e'

  const buttonStyle = isAlert
    ? { background: '#ec221f', border: 'none', borderRadius: 9999, padding: '8px 12px', fontFamily: 'Geist, sans-serif', fontSize: 16, color: '#fee9e7', cursor: 'pointer', alignSelf: 'flex-start' }
    : { background: '#005e70', border: 'none', borderRadius: 9999, padding: '8px 12px', fontFamily: 'Geist, sans-serif', fontSize: 16, color: '#f0f7f8', cursor: 'pointer', alignSelf: 'flex-start' }

  return (
    <div style={{ position: 'relative', display: 'flex', gap: 12, alignItems: 'flex-start', padding: 16, borderRadius: 8, border: isAlert ? '1px solid #ec221f' : '1px solid #d9d9d9', background: isAlert ? '#fee9e7' : 'white', width: 300, boxSizing: 'border-box', ...styleProp }}>
      {hasIcon && <InfoIcon color={iconColor} />}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.16px', color: textColor, margin: 0 }}>{title}</p>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: textColor, margin: 0 }}>{body}</p>
        </div>
        {hasButton && <button onClick={onAction} style={buttonStyle}>{buttonLabel}</button>}
      </div>
      {dismissible && (
        <button onClick={() => { setDismissed(true); onDismiss?.() }} style={{ position: 'absolute', top: -8, right: -8, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer', padding: 8 }}>
          <XIcon color={iconColor} />
        </button>
      )}
    </div>
  )
}

export default Notification