import React from 'react'

function Card({
  heading = 'Title',
  body = "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  variant = 'stroke',
  direction = 'horizontal',
  assetType = 'icon',
  showAsset = true,
  showButtons = true,
  primaryLabel = 'Button',
  secondaryLabel = 'Button',
  onPrimary,
  onSecondary,
}) {
  const isVertical = direction === 'vertical'
  const isStroke = variant === 'stroke'

  const containerStyle = {
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    flexWrap: isVertical ? 'nowrap' : 'wrap',
    gap: '24px',
    alignItems: 'flex-start',
    minWidth: '240px',
    width: '440px',
    fontFamily: 'Geist, sans-serif',
    boxSizing: 'border-box',
    ...(isStroke ? {
      background: 'white',
      border: '1px solid #e6e6e6',
      borderRadius: '16px',
      padding: '24px',
    } : {})
  }

  const InfoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="16" cy="16" r="13" stroke="#1e1e1e" strokeWidth="1.5"/>
      <path d="M16 14v8M16 11v1" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )

  const ImagePlaceholder = () => (
    <div style={{ width: '160px', height: '160px', minWidth: '160px', background: '#e3e3e3', borderRadius: '8px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" opacity="0.3">
        <rect x="4" y="8" width="32" height="24" rx="2" stroke="#1e1e1e" strokeWidth="1.5"/>
        <circle cx="14" cy="16" r="3" stroke="#1e1e1e" strokeWidth="1.5"/>
        <path d="M4 28l8-6 6 4 6-8 8 10" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )

  return (
    <div style={containerStyle}>
      {showAsset && assetType === 'icon' && <InfoIcon />}
      {showAsset && assetType === 'image' && <ImagePlaceholder />}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: '1 0 160px', minWidth: '160px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '24px', fontWeight: 550, lineHeight: 1.2, letterSpacing: '-0.48px', color: '#1e1e1e', margin: 0, width: '100%' }}>
            {heading}
          </p>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: '#757575', margin: 0, width: '100%' }}>
            {body}
          </p>
        </div>
        {showButtons && (
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button onClick={onSecondary} style={{ background: '#e3e3e3', border: 'none', borderRadius: '9999px', padding: '12px 16px', fontFamily: 'Geist, sans-serif', fontSize: '16px', fontWeight: 400, color: '#1e1e1e', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              {secondaryLabel}
            </button>
            <button onClick={onPrimary} style={{ background: '#005e70', border: 'none', borderRadius: '9999px', padding: '12px 16px', fontFamily: 'Geist, sans-serif', fontSize: '16px', fontWeight: 400, color: '#f0f7f8', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              {primaryLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card