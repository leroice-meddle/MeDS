import React from 'react'

function Avatar({ type = 'image', size = 'large', initial = 'A', src = null, alt = '' }) {
  const sizes = { small: '24px', medium: '32px', large: '40px', xlarge: '56px' }
  const fontSizes = { small: '10px', medium: '12px', large: '14px', xlarge: '20px' }
  const dimension = sizes[size] || sizes.large
  const baseStyle = {
    width: dimension, height: dimension, borderRadius: '9999px',
    overflow: 'hidden', position: 'relative', display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    background: type === 'initials' ? 'var(--meddleBrand100, #d9f0f3)' : 'var(--meddleGray200, #e5e5e5)',
  }
  if (type === 'image' && src) {
    return (
      <div style={baseStyle}>
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
      </div>
    )
  }
  if (type === 'initials') {
    return (
      <div style={baseStyle}>
        <span style={{ fontFamily: 'Geist, sans-serif', fontSize: fontSizes[size] || fontSizes.large, fontWeight: 600, color: 'var(--meddleBrand700, #00454f)', lineHeight: 1 }}>
          {initial.charAt(0).toUpperCase()}
        </span>
      </div>
    )
  }
  return <div style={baseStyle} />
}

export default Avatar
