import React, { useState } from 'react'

function Arrow({ placement }) {
  const size = 8
  const base = {
    position: 'absolute',
    width: size,
    height: size,
    background: 'white',
    border: '1px solid #e6e6e6',
    boxSizing: 'border-box',
  }
  if (placement === 'Top')    return <div style={{ ...base, bottom: -5, left: '50%', transform: 'translateX(-50%) rotate(45deg)', borderTop: 'none', borderLeft: 'none' }} />
  if (placement === 'Bottom') return <div style={{ ...base, top: -5,    left: '50%', transform: 'translateX(-50%) rotate(45deg)', borderBottom: 'none', borderRight: 'none' }} />
  if (placement === 'Left')   return <div style={{ ...base, right: -5,  top: '50%',  transform: 'translateY(-50%) rotate(45deg)', borderLeft: 'none', borderBottom: 'none' }} />
  if (placement === 'Right')  return <div style={{ ...base, left: -5,   top: '50%',  transform: 'translateY(-50%) rotate(45deg)', borderRight: 'none', borderTop: 'none' }} />
  return null
}

export function TooltipBubble({ title = 'Title', body = 'Body text', hasBody = true, placement = 'Top', style: styleProp }) {
  const isHorizontal = placement === 'Left' || placement === 'Right'
  return (
    <div style={{
      position: 'relative',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: isHorizontal ? 'flex-start' : 'center',
      padding: '8px 12px',
      borderRadius: 8,
      background: 'white',
      border: '1px solid #e6e6e6',
      boxShadow: '0 1px 2px rgba(12,12,13,0.1), 0 1px 2px rgba(12,12,13,0.05)',
      whiteSpace: 'nowrap',
      ...styleProp,
    }}>
      <Arrow placement={placement} />
      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 16, fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.16px', color: '#1e1e1e', margin: 0 }}>{title}</p>
      {hasBody && (
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.12px', color: '#1e1e1e', margin: 0 }}>{body}</p>
      )}
    </div>
  )
}

function Tooltip({ title = 'Title', body = 'Body text', hasBody = true, placement = 'Top', children, style: styleProp }) {
  const [visible, setVisible] = useState(false)
  const offset = 12
  const bubbleStyle = { position: 'absolute', zIndex: 1000 }
  if (placement === 'Top')    Object.assign(bubbleStyle, { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: offset })
  if (placement === 'Bottom') Object.assign(bubbleStyle, { top: '100%',    left: '50%', transform: 'translateX(-50%)', marginTop: offset })
  if (placement === 'Left')   Object.assign(bubbleStyle, { right: '100%',  top: '50%',  transform: 'translateY(-50%)', marginRight: offset })
  if (placement === 'Right')  Object.assign(bubbleStyle, { left: '100%',   top: '50%',  transform: 'translateY(-50%)', marginLeft: offset })
  return (
    <div style={{ position: 'relative', display: 'inline-flex', ...styleProp }} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && <TooltipBubble title={title} body={body} hasBody={hasBody} placement={placement} style={bubbleStyle} />}
    </div>
  )
}

export default Tooltip