import React from 'react'

const FIGMA_LINK = 'https://www.figma.com/design/zMlxINZFLyMK6lD4o11aLd/MeDS?node-id=226-13829'

const Label = ({ children }) => (
  <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, fontWeight: 500, color: '#757575', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 24 }}>
    {children}
  </div>
)

const PageTitle = ({ children }) => (
  <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 24, fontWeight: 550, color: '#1e1e1e', letterSpacing: '-0.48px', marginBottom: 4 }}>
    {children}
  </div>
)

const PageSubtitle = ({ children }) => (
  <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 14, fontWeight: 400, color: '#757575', marginBottom: 40 }}>
    {children}
  </div>
)

const Divider = () => (
  <div style={{ height: 1, backgroundColor: '#e6e6e6', margin: '40px 0' }} />
)

const SectionLabel = ({ children }) => (
  <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, fontWeight: 600, color: '#b3b3b3', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
    {children}
  </div>
)

const FigmaLink = ({ href }) => (
  <a href={href} target='_blank' rel='noopener noreferrer' style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Geist, sans-serif', fontSize: 12, fontWeight: 500, color: '#005e70', textDecoration: 'none', padding: '6px 12px', borderRadius: 6, border: '1px solid #005e70', marginBottom: 48 }}>
    View in Figma
  </a>
)

const styles = {
  'title-hero':        { fontSize: '72px',  fontWeight: 500, lineHeight: 1.2, letterSpacing: '-2.88px', tag: 'h1' },
  'title-page':        { fontSize: '48px',  fontWeight: 500, lineHeight: 1.2, letterSpacing: '-1.152px', tag: 'h1' },
  'subtitle':          { fontSize: '32px',  fontWeight: 450, lineHeight: 1.2, letterSpacing: '-1.28px', tag: 'h2' },
  'heading':           { fontSize: '24px',  fontWeight: 550, lineHeight: 1.2, letterSpacing: '-0.48px', tag: 'h2' },
  'subheading':        { fontSize: '20px',  fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.4px', tag: 'h3' },
  'body-base':         { fontSize: '16px',  fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', tag: 'p' },
  'body-strong':       { fontSize: '16px',  fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.16px', tag: 'p' },
  'body-emphasis':     { fontSize: '16px',  fontWeight: 400, lineHeight: 1.4, fontStyle: 'italic', tag: 'p' },
  'body-link':         { fontSize: '16px',  fontWeight: 400, lineHeight: 1.4, textDecoration: 'underline', tag: 'p' },
  'body-small':        { fontSize: '14px',  fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.14px', tag: 'p' },
  'body-small-strong': { fontSize: '14px',  fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.14px', tag: 'p' },
  'input':             { fontSize: '16px',  fontWeight: 400, lineHeight: 1, tag: 'p' },
  'body-code':         { fontFamily: 'Geist Mono, monospace', fontSize: '16px', fontWeight: 400, lineHeight: 1.3, tag: 'code' },
}

function TypePrimitives({ variant = 'body-base', children }) {
  const { tag: Tag, ...style } = styles[variant] || styles['body-base']
  return (
    <Tag style={{ fontFamily: 'Geist, sans-serif', color: '#1e1e1e', margin: 0, ...style }}>
      {children}
    </Tag>
  )
}

const SAMPLE = 'The quick brown fox jumps over the lazy dog'
const SAMPLE_SHORT = 'Meddle makes healthcare easier'

const rows = [
  { variant: 'title-hero',        label: 'Title Hero',         meta: '72px / 500' },
  { variant: 'title-page',        label: 'Title Page',         meta: '48px / 500' },
  { variant: 'subtitle',          label: 'Subtitle',           meta: '32px / 450' },
  { variant: 'heading',           label: 'Heading',            meta: '24px / 550' },
  { variant: 'subheading',        label: 'Subheading',         meta: '20px / 500' },
  { variant: 'body-base',         label: 'Body Base',          meta: '16px / 400' },
  { variant: 'body-strong',       label: 'Body Strong',        meta: '16px / 500' },
  { variant: 'body-emphasis',     label: 'Body Emphasis',      meta: '16px / 400 italic' },
  { variant: 'body-link',         label: 'Body Link',          meta: '16px / 400 underline' },
  { variant: 'body-small',        label: 'Body Small',         meta: '14px / 400' },
  { variant: 'body-small-strong', label: 'Body Small Strong',  meta: '14px / 500' },
  { variant: 'input',             label: 'Input',              meta: '16px / 400' },
  { variant: 'body-code',         label: 'Body Code',          meta: '16px / 400 mono' },
]

export function AllStyles() {
  return (
    <div style={{ padding: '48px 48px 80px', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <PageTitle>Type Primitives</PageTitle>
      <PageSubtitle>All MeDS type styles — Geist family, defined by size, weight and leading.</PageSubtitle>
      <FigmaLink href={FIGMA_LINK} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {rows.map((r, i) => (
          <div key={r.variant} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 160px', alignItems: 'baseline', gap: 24, padding: '20px 0', borderTop: i === 0 ? 'none' : '1px solid #e6e6e6' }}>
            <div>
              <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, fontWeight: 600, color: '#b3b3b3', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{r.label}</div>
              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: '#b3b3b3' }}>{r.meta}</div>
            </div>
            <TypePrimitives variant={r.variant}>
              {['title-hero','title-page','subtitle'].includes(r.variant) ? SAMPLE_SHORT : SAMPLE}
            </TypePrimitives>
            <div />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TypePrimitives