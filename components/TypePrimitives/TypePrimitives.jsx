function TypePrimitives({ variant = 'body-base', children }) {
  const styles = {
    'title-hero':        { fontSize: '72px',  fontWeight: 500, lineHeight: 1.2, letterSpacing: '-2.88px' },
    'title-page':        { fontSize: '48px',  fontWeight: 500, lineHeight: 1.2, letterSpacing: '-1.152px' },
    'subtitle':          { fontSize: '32px',  fontWeight: 450, lineHeight: 1.2, letterSpacing: '-1.28px' },
    'heading':           { fontSize: '24px',  fontWeight: 550, lineHeight: 1.2, letterSpacing: '-0.48px' },
    'subheading':        { fontSize: '20px',  fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.4px' },
    'body-base':         { fontSize: '16px',  fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px' },
    'body-strong':       { fontSize: '16px',  fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.16px' },
    'body-emphasis':     { fontSize: '16px',  fontWeight: 400, lineHeight: 1.4, fontStyle: 'italic' },
    'body-link':         { fontSize: '16px',  fontWeight: 400, lineHeight: 1.4, textDecoration: 'underline' },
    'body-small':        { fontSize: '14px',  fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.14px' },
    'body-small-strong': { fontSize: '14px',  fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.14px' },
    'input':             { fontSize: '16px',  fontWeight: 400, lineHeight: 1 },
    'body-code':         { fontFamily: 'Geist Mono, monospace', fontSize: '16px', fontWeight: 400, lineHeight: 1.3 },
  }

  const tag = ['title-hero', 'title-page', 'subtitle'].includes(variant)
    ? 'h1'
    : ['heading', 'subheading'].includes(variant)
    ? 'h2'
    : variant === 'body-code'
    ? 'code'
    : 'p'

  const Tag = tag

  return (
    <Tag
      style={{
        fontFamily: 'Geist, sans-serif',
        color: '#1e1e1e',
        margin: 0,
        ...styles[variant],
      }}
    >
      {children}
    </Tag>
  )
}

export default TypePrimitives
