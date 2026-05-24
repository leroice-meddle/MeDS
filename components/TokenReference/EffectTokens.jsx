import React from 'react'

const FIGMA_LINK = 'https://www.figma.com/design/zMlxINZFLyMK6lD4o11aLd/MeDS?node-id=226-13682'

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

const shadows = [
  { name: 'Shadow 100', value: '0 1px 2px rgba(12,12,13,0.05)' },
  { name: 'Shadow 200', value: '0 1px 4px rgba(12,12,13,0.1)' },
  { name: 'Shadow 300', value: '0 2px 8px rgba(12,12,13,0.12)' },
  { name: 'Shadow 400', value: '0 4px 16px rgba(12,12,13,0.12)' },
  { name: 'Shadow 500', value: '0 8px 24px rgba(12,12,13,0.12)' },
  { name: 'Shadow 600', value: '0 16px 40px rgba(12,12,13,0.16)' },
]

const overlays = [
  { name: 'Overlay', value: 'rgba(0,0,0,0.5)', dark: true },
  { name: 'Blanket', value: 'rgba(0,0,0,0.8)', dark: true },
  { name: 'Layer', value: 'rgba(255,255,255,0.08)', dark: false },
  { name: 'Glass', value: 'rgba(255,255,255,0.12)', blur: true, dark: false },
]

function EffectTokens() {
  return (
    <div style={{ padding: '48px 48px 80px', maxWidth: 1100, backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <PageTitle>Effect Tokens</PageTitle>
      <PageSubtitle>Shadows and overlay effects used across MeDS components.</PageSubtitle>
      <FigmaLink href={FIGMA_LINK} />
      <SectionLabel>Shadows</SectionLabel>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
        {shadows.map(s => (
          <div key={s.name} style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 140 }}>
            <div style={{ height: 100, borderRadius: 12, backgroundColor: '#ffffff', boxShadow: s.value, border: '1px solid #f5f5f5' }} />
            <div>
              <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, fontWeight: 500, color: '#1e1e1e', marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: '#757575', lineHeight: 1.6 }}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>
      <Divider />
      <SectionLabel>Overlays</SectionLabel>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {overlays.map(o => (
          <div key={o.name} style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 140 }}>
            <div style={{ height: 100, borderRadius: 12, backgroundColor: '#1e1e1e', overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundColor: o.value, backdropFilter: o.blur ? 'blur(8px)' : 'none' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, fontWeight: 500, color: '#1e1e1e', marginBottom: 4 }}>{o.name}</div>
              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: '#757575', lineHeight: 1.6 }}>{o.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EffectTokens