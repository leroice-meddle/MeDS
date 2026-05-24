import React, { useState } from 'react'

function CheckIcon() {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
      <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg width="8" height="2" viewBox="0 0 8 2" fill="none">
      <path d="M1 1h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CheckboxField({
  label = 'Label',
  description = 'Description',
  hasDescription = true,
  state = 'Default',
  valueType = 'Checked',
  onChange,
}) {
  const disabled = state === 'Disabled'
  const checked = valueType === 'Checked'
  const indeterminate = valueType === 'Indeterminate'
  const unchecked = valueType === 'Unchecked'

  const boxBg = disabled ? '#d9d9d9' : unchecked ? 'white' : '#005e70'
  const boxBorder = disabled ? '1px solid #b3b3b3' : unchecked ? '1px solid #007388' : 'none'
  const labelColor = '#1e1e1e'

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', minWidth: 120 }}>
        <div
          onClick={disabled ? undefined : onChange}
          style={{
            width: 16,
            height: 16,
            borderRadius: 2,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            background: boxBg,
            border: boxBorder,
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
        >
          {checked && <CheckIcon />}
          {indeterminate && <MinusIcon />}
        </div>
        <p style={{
          fontFamily: 'Geist, sans-serif',
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.4,
          letterSpacing: '-0.16px',
          color: labelColor,
          margin: 0,
          flex: 1,
        }}>
          {label}
        </p>
      </div>
      {hasDescription && (
        <div style={{
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          opacity: disabled ? 0.5 : 1,
          paddingLeft: indeterminate ? 12 : 0,
        }}>
          <div style={{ width: 16, flexShrink: 0 }} />
          <p style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.4,
            letterSpacing: '-0.16px',
            color: '#757575',
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

function CheckboxGroup({ items = [], style: styleProp }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 240, ...styleProp }}>
      {items.map((item, i) => (
        <CheckboxField key={i} {...item} />
      ))}
    </div>
  )
}

export { CheckboxGroup }
export default CheckboxField