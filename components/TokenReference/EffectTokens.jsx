import React from 'react'

const FIGMA_LINK = 'https://www.figma.com/design/zMlxINZFLyMK6lD4o11aLd/MeDS?node-id=226-13682'

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

const TokenLabel = ({ name, value }) => (
  <div style={{ fontFamily: 'Geist, sans-serif', marginTop: 8 }}>
    <div style={{ fontSize: 12, fontWeight: 500, color: '#1e1e1e' }}>{name}</div>
    <div style={{ fontSize: 11, color: '#757575', marginTop: 2 }}>{value}</div>
  </div>
)

const shadows = [
  { name: 'Shadow 100', value: '0 1px 2px rgba(12,12,13,0.05)' },
  { name: 'Shadow 200', value: '0 1px 4px rgba(12,12,13,0.1)' },
  { name: 'Shadow 300', value: '0 2px 8px rgba(12,12,13,0.12)' },
  { name: 'Shadow 400', value: '0 4px 16px rgba(12,12,13,0.12)' },
  { name: 'Shadow 500', value: '0 8px 24px rgba(12,12,13,0.12)' },
  { name: 'Shadow 600', value: '0 16px 40px rgba(12,12,13,0.16)' },
]

const overlays = [
  { name: 'Overlay', bg: 'rgba(0,0,0,0.5)' },
  { name: 'Blanket', bg: 'rgba(0,0,0,0.8)' },
  { name: 'Layer', bg: 'rgba(255,255,255,0.08)' },
  { name: 'Glass', bg: 'rgba(255,255,255,0.12)', blur: true },
]

function EffectTokens() {
  return (
    <div style={{ padding: 40, maxWidth: 960 }}>
      <FigmaLink href={FIGMA_LINK} />
      <SectionTitle>Shadows</SectionTitle>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
        {shadows.map(s => (
          <div key={s.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: 12, backgroundColor: '#ffffff', boxShadow: s.value, border: '1px solid #f0f0f0' }} />
            <TokenLabel name={s.name} value={s.value} />
          </div>
        ))}
      </div>
      <SectionTitle>Overlays</SectionTitle>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
        {overlays.map(o => (
          <div key={o.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: 12, backgroundColor: o.bg, backdropFilter: o.blur ? 'blur(12px)' : 'none', border: '1px solid rgba(255,255,255,0.2)' }} />
            <TokenLabel name={o.name} value={o.bg} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EffectTokens