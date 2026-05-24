import React from 'react'

const FIGMA_LINK = 'https://www.figma.com/design/zMlxINZFLyMK6lD4o11aLd/MeDS?node-id=226-13680'

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

const tokens = [
  { name: 'Space 100', value: '4px' },
  { name: 'Space 200', value: '8px' },
  { name: 'Space 300', value: '12px' },
  { name: 'Space 400', value: '16px' },
  { name: 'Space 600', value: '24px' },
  { name: 'Space 800', value: '32px' },
  { name: 'Space 1000', value: '40px' },
  { name: 'Space 1200', value: '48px' },
  { name: 'Space 1600', value: '64px' },
  { name: 'Space 2000', value: '80px' },
  { name: 'Space 2400', value: '96px' },
  { name: 'Space 4000', value: '160px' },
]

function SpacingTokens() {
  return (
    <div style={{ padding: 40, maxWidth: 960 }}>
      <FigmaLink href={FIGMA_LINK} />
      <SectionTitle>Spacing Scale</SectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {tokens.map(t => (
          <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 120, fontFamily: 'Geist, sans-serif', fontSize: 12, fontWeight: 500, color: '#1e1e1e', flexShrink: 0 }}>{t.name}</div>
            <div style={{ height: 24, width: t.value, backgroundColor: '#005e70', borderRadius: 4, flexShrink: 0 }} />
            <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575' }}>{t.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpacingTokens