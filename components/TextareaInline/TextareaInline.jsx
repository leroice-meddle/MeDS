import React, { useState } from 'react'

function TextareaInline({ label = 'Label', description = '', placeholder = 'Placeholder', defaultValue = '', hasLabel = true, hasDescription = false, hasError = false, error = 'Error message', state = 'default', onChange }) {
  const [value, setValue] = useState(defaultValue)
  const isDisabled = state === 'disabled'
  const isError = state === 'error'

  const getBorderColor = () => {
    if (isDisabled) return '#b3b3b3'
    if (isError) return '#900b09'
    return '#e6e6e6'
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    onChange && onChange(e)
  }

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontFamily: 'Geist, sans-serif', width: '100%' }}>
      {hasLabel && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '49px', width: '41px', flexShrink: 0 }}>
          <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: isDisabled ? '#b3b3b3' : '#1e1e1e', margin: 0 }}>{label}</p>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, minWidth: 0 }}>
        {hasDescription && description && (
          <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: isDisabled ? '#b3b3b3' : '#757575', margin: 0, whiteSpace: 'nowrap' }}>{description}</p>
        )}
        <textarea
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={handleChange}
          style={{
            minHeight: '80px',
            width: '100%',
            border: `1px solid ${getBorderColor()}`,
            borderRadius: '8px',
            padding: '12px 16px',
            fontSize: '16px',
            fontFamily: 'Geist, sans-serif',
            fontWeight: 400,
            lineHeight: 1.4,
            letterSpacing: '-0.16px',
            color: isDisabled ? '#b3b3b3' : '#1e1e1e',
            background: isDisabled ? '#d9d9d9' : 'white',
            resize: 'vertical',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        {hasError && error && (
          <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: isError ? '#900b09' : '#757575', margin: 0, whiteSpace: 'nowrap' }}>{error}</p>
        )}
      </div>
    </div>
  )
}

export default TextareaInline
