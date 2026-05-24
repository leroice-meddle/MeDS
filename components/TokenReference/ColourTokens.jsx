import React from 'react'

const FIGMA_LINK = 'https://www.figma.com/design/zMlxINZFLyMK6lD4o11aLd/MeDS?node-id=226-13679'

const FigmaLink = ({ href }) => (
  <a href={href} target='_blank' rel='noopener noreferrer' style={{ display: 'inline-block', marginBottom: 32, fontFamily: 'Geist, sans-serif', fontSize: 13, fontWeight: 500, color: '#005e70', textDecoration: 'none', borderBottom: '1px solid #005e70', paddingBottom: 2 }}>
    View in Figma
  </a>
)

const SectionTitle = ({ children }) => (
  <h3 style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#757575', margin: '32px 0 16px' }}>
    {children}
  </h3>
)

const Swatch = ({ name, value }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
    <div style={{ width: 64, height: 64, borderRadius: 12, backgroundColor: value, border: '1px solid rgba(0,0,0,0.12)', boxShadow: '0 1px 4px rgba(12,12,13,0.1)' }} />
    <div style={{ fontFamily: 'Geist, sans-serif' }}>
      <div style={{ fontSize: 12, fontWeight: 500, color: '#1e1e1e' }}>{name}</div>
      <div style={{ fontSize: 11, color: '#757575', marginTop: 2 }}>{value}</div>
    </div>
  </div>
)

const groups = {
  Background: [
    { name: 'default', value: '#ffffff' },
    { name: 'default-hover', value: '#f5f5f5' },
    { name: 'secondary', value: '#f5f5f5' },
    { name: 'secondary-hover', value: '#e6e6e6' },
    { name: 'tertiary', value: '#d9d9d9' },
    { name: 'tertiary-hover', value: '#b3b3b3' },
    { name: 'brand', value: '#005e70' },
    { name: 'brand-light', value: '#f0f7f8' },
    { name: 'positive', value: '#14ae5c' },
    { name: 'danger', value: '#ec221f' },
    { name: 'warning', value: '#e8b931' },
    { name: 'disabled', value: '#d9d9d9' },
  ],
  Text: [
    { name: 'primary', value: '#1e1e1e' },
    { name: 'secondary', value: '#757575' },
    { name: 'disabled', value: '#b3b3b3' },
    { name: 'brand', value: '#005e70' },
    { name: 'brand-secondary', value: '#003741' },
    { name: 'on-brand', value: '#f0f7f8' },
    { name: 'positive', value: '#14ae5c' },
    { name: 'danger', value: '#ec221f' },
    { name: 'warning', value: '#e8b931' },
  ],
  Border: [
    { name: 'default', value: '#e6e6e6' },
    { name: 'brand', value: '#005e70' },
    { name: 'positive', value: '#14ae5c' },
    { name: 'danger', value: '#ec221f' },
    { name: 'warning', value: '#e8b931' },
    { name: 'disabled', value: '#d9d9d9' },
  ],
  Icon: [
    { name: 'primary', value: '#1e1e1e' },
    { name: 'secondary', value: '#757575' },
    { name: 'disabled', value: '#b3b3b3' },
    { name: 'brand', value: '#005e70' },
    { name: 'on-brand', value: '#f0f7f8' },
    { name: 'positive', value: '#14ae5c' },
    { name: 'danger', value: '#ec221f' },
    { name: 'warning', value: '#e8b931' },
  ],
}

function ColourTokens() {
  return (
    <div style={{ padding: 40, maxWidth: 960 }}>
      <FigmaLink href={FIGMA_LINK} />
      {Object.entries(groups).map(([title, tokens]) => (
        <div key={title}>
          <SectionTitle>{title}</SectionTitle>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            {tokens.map(t => <Swatch key={t.name} {...t} />)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ColourTokens