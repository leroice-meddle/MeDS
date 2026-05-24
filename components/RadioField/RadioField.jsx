import React from 'react'

function RadioField({
  label = 'Label',
  description = 'Description',
  hasDescription = true,
  state = 'Default',
  checked = false,
}) {
  const disabled = state === 'Disabled'

  const outerStyle = {
    width: 16,
    height: 16,
    borderRadius: '50%',
    flexShrink: 0,
    boxSizing: 'border-box',
    border: disabled
      ? '1.5px solid #b3b3b3'
      : checked
      ? '4.5px solid #005e70'
      : '1.5px solid #007388',
    background: 'white',
    cursor: disabled ? 'not-allowed' : 'pointer',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', minWidth: 120 }}>
        <div style={outerStyle} />
        <p style={{
          fontFamily: 'Geist, sans-serif',
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.4,
          letterSpacing: '-0.16px',
          color: disabled ? '#b3b3b3' : '#1e1e1e',
          margin: 0,
          flex: 1,
        }}>
          {label}
        </p>
      </div>
      {hasDescription && (
        <div style={{ display: 'flex', gap: 12, opacity: disabled ? 0.5 : 1 }}>
          <div style={{ width: 16, flexShrink: 0 }} />
          <p style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.4,
            letterSpacing: '-0.16px',
            color: disabled ? '#b3b3b3' : '#757575',
            margin: 0,
            flex: 1,
          }}>
            {description}
          </p>
        </div>
      )}
    </div>
  )
}

function RadioGroup({ items = [], name, onChange, style: styleProp }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 240, ...styleProp }}>
      {items.map((item, i) => (
        <RadioField key={i} {...item} />
      ))}
    </div>
  )
}

export { RadioGroup }
export default RadioField