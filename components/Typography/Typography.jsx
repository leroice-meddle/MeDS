import React from 'react'

const f = { fontFamily: 'Geist, sans-serif', margin: 0 }

// Body primitives
export function TextBody({ text = 'Body text', color = '#1e1e1e', style: s }) {
  return <p style={{ ...f, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color, ...s }}>{text}</p>
}

export function TextStrong({ text = 'Text Strong', color = '#1e1e1e', style: s }) {
  return <p style={{ ...f, fontSize: 16, fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.16px', color, ...s }}>{text}</p>
}

export function TextEmphasis({ text = 'Text Emphasis', color = '#1e1e1e', style: s }) {
  return <p style={{ ...f, fontSize: 16, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.4, color, ...s }}>{text}</p>
}

export function TextLink({ text = 'Text Link', href, onClick, style: s }) {
  return (
    <p
      onClick={onClick}
      style={{ ...f, fontSize: 16, fontWeight: 400, lineHeight: 1.4, color: '#1e1e1e', textDecoration: 'underline', cursor: href || onClick ? 'pointer' : 'default', ...s }}
    >
      {text}
    </p>
  )
}

export function TextSmall({ text = 'Small text', color = '#757575', style: s }) {
  return <p style={{ ...f, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.14px', color, ...s }}>{text}</p>
}

export function TextLabel({ text = 'Label', color = '#1e1e1e', style: s }) {
  return <p style={{ ...f, fontSize: 12, fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.12px', color, ...s }}>{text}</p>
}

export function TextCaption({ text = 'Caption', color = '#757575', style: s }) {
  return <p style={{ ...f, fontSize: 11, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.11px', color, ...s }}>{text}</p>
}

// Heading primitives
export function TextHeading({ heading = 'Heading', subheading, hasSubheading = true, align = 'Start', style: s }) {
  const isCenter = align === 'Center'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: isCenter ? 'center' : 'flex-start', textAlign: isCenter ? 'center' : 'left', ...s }}>
      <p style={{ ...f, fontSize: 24, fontWeight: 550, lineHeight: 1.2, letterSpacing: '-0.48px', color: '#1e1e1e', width: '100%' }}>{heading}</p>
      {hasSubheading && subheading && (
        <p style={{ ...f, fontSize: 20, fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.4px', color: '#757575', width: '100%' }}>{subheading}</p>
      )}
    </div>
  )
}

export function TextTitle({ title = 'Title', subtitle, hasSubtitle = true, align = 'Start', style: s }) {
  const isCenter = align === 'Center'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: isCenter ? 'center' : 'flex-start', textAlign: isCenter ? 'center' : 'left', ...s }}>
      <p style={{ ...f, fontSize: 72, fontWeight: 500, lineHeight: 1.2, letterSpacing: '-2.88px', color: '#1e1e1e', width: '100%' }}>{title}</p>
      {hasSubtitle && subtitle && (
        <p style={{ ...f, fontSize: 32, fontWeight: 450, lineHeight: 1.2, letterSpacing: '-1.28px', color: '#757575', width: '100%' }}>{subtitle}</p>
      )}
    </div>
  )
}

// Price
export function TextPrice({ currency = '$', price = '50', label = '/ mo', hasLabel = true, size = 'Large', style: s }) {
  const isLarge = size === 'Large'
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', ...s }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', lineHeight: 1 }}>
        {isLarge ? (
          <>
            <p style={{ ...f, fontSize: 24, fontWeight: 600, letterSpacing: '-0.48px' }}>{currency}</p>
            <p style={{ ...f, fontSize: 48, fontWeight: 600, letterSpacing: '-0.96px' }}>{price}</p>
          </>
        ) : (
          <>
            <p style={{ ...f, fontSize: 16, fontWeight: 500, letterSpacing: '-0.32px' }}>{currency}</p>
            <p style={{ ...f, fontSize: 24, fontWeight: 550, letterSpacing: '-0.48px' }}>{price}</p>
          </>
        )}
      </div>
      {hasLabel && (
        <p style={{ ...f, fontSize: 14, fontWeight: 400, lineHeight: isLarge ? 1.8 : 1.2 }}>{label}</p>
      )}
    </div>
  )
}

// List item primitives
export function TextListItem({ text = 'List item', style: s }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...s }}>
      <ul style={{ margin: 0, padding: 0, listStyle: 'disc', marginLeft: 24 }}>
        <li style={{ ...f, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: '#757575' }}>{text}</li>
      </ul>
    </div>
  )
}

export function TextLinkListItem({ text = 'List item', onClick, style: s }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...s }}>
      <p
        onClick={onClick}
        style={{ ...f, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', color: '#1e1e1e', cursor: onClick ? 'pointer' : 'default' }}
      >{text}</p>
    </div>
  )
}

// List composites
export function TextList({ items = [], density = 'Default', hasTitle = false, title = 'Text Strong', style: s }) {
  const gap = density === 'Tight' ? 8 : 12
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: density === 'Tight' ? 8 : 12, alignItems: 'flex-start', ...s }}>
      {hasTitle && (
        <div style={{ paddingBottom: density === 'Tight' ? 4 : 16, width: '100%' }}>
          <TextStrong text={title} />
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap, alignItems: 'flex-start' }}>
        {items.length
          ? items.map((item, i) => <TextListItem key={i} text={item} />)
          : Array.from({ length: 7 }, (_, i) => <TextListItem key={i} text="List item" />)
        }
      </div>
    </div>
  )
}

export function TextLinkList({ items = [], density = 'Default', hasTitle = false, title = 'Text Strong', style: s }) {
  const gap = density === 'Tight' ? 8 : 12
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: density === 'Tight' ? 8 : 12, alignItems: 'flex-start', ...s }}>
      {hasTitle && (
        <div style={{ paddingBottom: density === 'Tight' ? 4 : 16, width: '100%' }}>
          <TextStrong text={title} />
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap, alignItems: 'flex-start' }}>
        {items.length
          ? items.map((item, i) => <TextLinkListItem key={i} text={typeof item === 'string' ? item : item.text} onClick={typeof item === 'object' ? item.onClick : undefined} />)
          : Array.from({ length: 7 }, (_, i) => <TextLinkListItem key={i} text="List item" />)
        }
      </div>
    </div>
  )
}

export default TextBody