import React, { useState } from 'react'

function StarIcon({ color = '#1e1e1e', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 14.27l-4.77 2.44.91-5.32L2.27 7.62l5.34-.78L10 2z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function getStyles(variant, size, hovered, disabled) {
  const dim = size === 'Small' ? 32 : 40
  if (disabled) return { background: '#d9d9d9', border: 'none', iconColor: '#b3b3b3', dim }
  if (variant === 'Primary') return hovered
    ? { background: '#001b1f', border: '1px solid #003741', iconColor: '#f0f7f8', dim }
    : { background: '#005e70', border: 'none', iconColor: '#f0f7f8', dim }
  if (variant === 'Neutral') return hovered
    ? { background: '#e6e6e6', border: '1px solid #e6e6e6', iconColor: '#1e1e1e', dim }
    : { background: '#f5f5f5', border: '1px solid #e6e6e6', iconColor: '#1e1e1e', dim }
  if (variant === 'Subtle') return hovered
    ? { background: '#f5f5f5', border: 'none', iconColor: '#1e1e1e', dim }
    : { background: 'transparent', border: 'none', iconColor: '#1e1e1e', dim }
  return hovered
    ? { background: '#e6e6e6', border: 'none', iconColor: '#1e1e1e', dim }
    : { background: 'transparent', border: 'none', iconColor: '#1e1e1e', dim }
}

function IconButton({
  variant = 'Primary',
  size = 'Medium',
  disabled = false,
  icon = null,
  onClick,
  style: styleProp,
}) {
  const [hovered, setHovered] = useState(false)
  const s = getStyles(variant, size, hovered && !disabled, disabled)
  const iconSize = size === 'Small' ? 16 : 20
  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={disabled}
      aria-label="icon button"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: s.dim,
        height: s.dim,
        borderRadius: '9999px',
        border: s.border,
        background: s.background,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 0.15s',
        boxSizing: 'border-box',
        flexShrink: 0,
        padding: 0,
        ...styleProp,
      }}
    >
      {icon || <StarIcon color={s.iconColor} size={iconSize} />}
    </button>
  )
}

export default IconButton