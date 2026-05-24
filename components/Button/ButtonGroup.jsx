import React from 'react'
import Button from './Button'

function ButtonGroup({
  align = 'Justify',
  secondaryLabel = 'Button',
  primaryLabel = 'Button',
  onSecondary,
  onPrimary,
  style: styleProp,
}) {
  const isStack = align === 'Stack'
  const isJustify = align === 'Justify'
  const isEnd = align === 'End'
  const isCenter = align === 'Center'

  const containerStyle = {
    display: 'flex',
    gap: '16px',
    flexDirection: isStack ? 'column' : 'row',
    alignItems: isStack ? 'stretch' : 'center',
    justifyContent: isCenter ? 'center' : isEnd ? 'flex-end' : isJustify ? 'stretch' : 'flex-start',
    width: '100%',
    boxSizing: 'border-box',
    ...styleProp,
  }

  const btnStyle = isJustify
    ? { flex: '1 0 0', minWidth: 0 }
    : isStack
    ? { width: '100%' }
    : {}

  return (
    <div style={containerStyle}>
      <Button label={secondaryLabel} variant="Neutral" onClick={onSecondary} style={btnStyle} />
      <Button label={primaryLabel} variant="Primary" onClick={onPrimary} style={btnStyle} />
    </div>
  )
}

export default ButtonGroup