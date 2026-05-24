import React from 'react'

const FIGMA_LINK = 'https://www.figma.com/design/zMlxINZFLyMK6lD4o11aLd/MeDS?node-id=226-13680'

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

const tokens = [
  { name: 'Space 100', px: 4 },
  { name: 'Space 200', px: 8 },
  { name: 'Space 300', px: 12 },
  { name: 'Space 400', px: 16 },
  { name: 'Space 600', px: 24 },
  { name: 'Space 800', px: 32 },
  { name: 'Space 1000', px: 40 },
  { name: 'Space 1200', px: 48 },
  { name: 'Space 1600', px: 64 },
  { name: 'Space 2000', px: 80 },
  { name: 'Space 2400', px: 96 },
  { name: 'Space 4000', px: 160 },
]

function SpacingTokens() {
  const max = 160
  return (
    <div style={{ padding: '48px 48px 80px', maxWidth: 800, backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <PageTitle>Spacing Tokens</PageTitle>
      <PageSubtitle>The MeDS spacing scale — used for padding, gap, margin, and layout.</PageSubtitle>
      <FigmaLink href={FIGMA_LINK} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {tokens.map(t => (
          <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 16px', backgroundColor: '#ffffff', borderRadius: 10, border: '1px solid #e6e6e6' }}>
            <div style={{ width: 140, fontFamily: 'Geist, sans-serif', fontSize: 12, fontWeight: 500, color: '#1e1e1e', flexShrink: 0 }}>{t.name}</div>
            <div style={{ flex: 1, height: 8, backgroundColor: '#e6e6e6', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: (t.px / max * 100) + '%', backgroundColor: '#005e70', borderRadius: 4 }} />
            </div>
            <div style={{ width: 48, fontFamily: 'Geist Mono, monospace', fontSize: 11, color: '#757575', textAlign: 'right', flexShrink: 0 }}>{t.px}px</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpacingTokens