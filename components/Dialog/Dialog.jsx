import React, { useState } from 'react'

function Dialog({ heading = 'Text Heading', body = 'Body text', dismissible = true, primaryAction = null, secondaryAction = null, onDismiss, children }) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  const handleDismiss = () => { setVisible(false); onDismiss && onDismiss() }
  return (
    <div style={{ position: 'relative', background: 'white', border: '1px solid #e6e6e6', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px', width: '466px', boxShadow: '0 4px 2px rgba(12,12,13,0.05), 0 16px 16px rgba(12,12,13,0.1)', fontFamily: 'Geist, sans-serif', boxSizing: 'border-box' }}>
      {dismissible && (
        <button onClick={handleDismiss} style={{ position: 'absolute', top: '7px', right: '7px', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5L15 15" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {children || (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '24px', fontWeight: 550, lineHeight: 1.2, letterSpacing: '-0.48px', color: '#1e1e1e', margin: 0 }}>{heading}</p>
              <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: '#1e1e1e', margin: 0 }}>{body}</p>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'flex-end' }}>
              {secondaryAction && (
                <button onClick={secondaryAction.onClick || handleDismiss} style={{ background: '#e3e3e3', border: 'none', borderRadius: '9999px', padding: '12px 16px', fontFamily: 'Geist, sans-serif', fontSize: '16px', cursor: 'pointer', color: '#1e1e1e' }}>
                  {secondaryAction.label || 'Cancel'}
                </button>
              )}
              {primaryAction && (
                <button onClick={primaryAction.onClick} style={{ background: 'var(--meddleBrand500, #007388)', border: 'none', borderRadius: '9999px', padding: '12px 16px', fontFamily: 'Geist, sans-serif', fontSize: '16px', cursor: 'pointer', color: 'white' }}>
                  {primaryAction.label || 'Confirm'}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Dialog
