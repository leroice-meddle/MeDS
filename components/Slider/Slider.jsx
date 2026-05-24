import React, { useState } from 'react'

function Switch({
  on = false,
  disabled = false,
  onChange,
  style: styleProp,
}) {
  return (
    <div
      onClick={disabled ? undefined : onChange}
      style={{
        width: 40,
        height: 24,
        borderRadius: 9999,
        border: on ? '1px solid #005e70' : '1px solid #007388',
        background: on ? '#005e70' : 'white',
        display: 'flex',
        alignItems: 'center',
        padding: 3,
        boxSizing: 'border-box',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background 0.15s',
        flexShrink: 0,
        ...styleProp,
      }}
    >
      <div style={{
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: on ? 'white' : '#007388',
        marginLeft: on ? 'auto' : 0,
        transition: 'margin 0.15s',
        flexShrink: 0,
      }} />
    </div>
  )
}

function SwitchField({
  label = 'Label',
  description = 'Description',
  hasLabel = true,
  hasDescription = true,
  state = 'Default',
  on = true,
  onChange,
}) {
  const disabled = state === 'Disabled'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 120 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', width: '100%' }}>
        {hasLabel && (
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
        )}
        <Switch on={on} disabled={disabled} onChange={onChange} />
      </div>
      {hasDescription && (
        <p style={{
          fontFamily: 'Geist, sans-serif',
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.4,
          letterSpacing: '-0.16px',
          color: disabled ? '#b3b3b3' : '#757575',
          margin: 0,
          width: '100%',
        }}>
          {description}
        </p>
      )}
    </div>
  )
}

export { Switch, SwitchField }
export default SwitchField