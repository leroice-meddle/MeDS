import React from 'react'

function Button({ label, variant, size, disabled, onClick }) {
  return (
    <button
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '9999px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'Geist, sans-serif',
        fontWeight: 400,
        fontSize: size === 'small' ? '14px' : '16px',
        minHeight: size === 'small' ? '36px' : '44px',
        padding: size === 'small' ? '8px 12px' : '12px 16px',
        opacity: disabled ? 0.4 : 1,
        background: variant === 'secondary' ? 'transparent' : 'var(--meddleBrand500)',
        color: variant === 'secondary' ? 'var(--meddleBrand500)' : 'var(--meddleWhite1000)',
        outline: variant === 'secondary' ? '1.5px solid var(--meddleBrand500)' : 'none',
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {label || 'Button'}
    </button>
  )
}

export default Button
