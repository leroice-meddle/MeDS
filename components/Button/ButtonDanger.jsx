import React, { useState } from 'react'

function getStyles(variant, size, hovered, disabled) {
  const padding = size === 'Small' ? '8px 12px' : '12px 16px'
  if (disabled) return { background: '#d9d9d9', color: '#b3b3b3', border: 'none', padding }
  if (variant === 'Primary') return hovered
    ? { background: '#c00f0c', color: '#fee9e7', border: '1px solid #900b09', padding }
    : { background: '#ec221f', color: '#fee9e7', border: 'none', padding }
  return hovered
    ? { background: '#fdd3d0', color: '#900b09', border: '1px solid #900b09', padding }
    : { background: 'transparent', color: '#900b09', border: 'none', padding }
}

function ButtonDanger({
  label = 'Button',
  variant = 'Primary',
  size = 'Medium',
  disabled = false,
  iconStart = null,
  iconEnd = null,
  onClick,
  style: styleProp,
}) {
  const [hovered, setHovered] = useState(false)
  const s = getStyles(variant, size, hovered && !disabled, disabled)
  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        borderRadius: '9999px',
        border: s.border,
        background: s.background,
        color: s.color,
        padding: s.padding,
        fontFamily: 'Geist, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 0.15s',
        boxSizing: 'border-box',
        ...styleProp,
      }}
    >
      {iconStart && <span style={{ display: 'flex', flexShrink: 0 }}>{iconStart}</span>}
      {label}
      {iconEnd && <span style={{ display: 'flex', flexShrink: 0 }}>{iconEnd}</span>}
    </button>
  )
}

export default ButtonDanger