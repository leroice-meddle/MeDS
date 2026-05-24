import React from 'react'

const font = { fontFamily: 'Geist, sans-serif', fontSize: 16, fontWeight: 400, margin: 0 }

function DateInput({ label = 'Label', description, hasLabel = true, hasDescription = false, hasError = false, state = 'Default', valueType = 'Default', day = 'DD', month = 'MM', year = 'YYYY', error = 'Error' }) {
  const disabled = state === 'Disabled'
  const isError = state === 'Error'
  const isPlaceholder = valueType === 'Placeholder'

  const textColor = disabled || isPlaceholder ? '#b3b3b3' : '#1e1e1e'
  const labelColor = disabled ? '#b3b3b3' : '#1e1e1e'
  const inputBg = disabled ? '#d9d9d9' : 'white'
  const inputBorder = isError ? '1px solid #900b09' : disabled ? '1px solid #b3b3b3' : '1px solid #e6e6e6'

  const inputStyle = {
    flex: 1,
    minWidth: 0,
    height: 40,
    background: inputBg,
    border: inputBorder,
    borderRadius: 8,
    padding: '0 16px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    ...font,
    color: textColor,
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {hasLabel && (
        <p style={{ ...font, lineHeight: 1.4, letterSpacing: '-0.16px', color: labelColor }}>
          {label}
        </p>
      )}
      {hasDescription && (
        <p style={{ ...font, lineHeight: 1.4, letterSpacing: '-0.16px', color: disabled ? '#b3b3b3' : '#757575' }}>
          {description}
        </p>
      )}
      <div style={{ display: 'flex', gap: 8, minWidth: 240, width: '100%' }}>
        <div style={inputStyle}>{day}</div>
        <div style={inputStyle}>{month}</div>
        <div style={inputStyle}>{year}</div>
      </div>
      {isError && hasError && (
        <p style={{ ...font, lineHeight: 1.4, letterSpacing: '-0.16px', color: '#900b09' }}>
          {error}
        </p>
      )}
    </div>
  )
}

export default DateInput