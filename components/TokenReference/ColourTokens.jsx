import React from 'react'

const FIGMA_LINK = 'https://www.figma.com/design/zMlxINZFLyMK6lD4o11aLd/MeDS?node-id=226-13679'

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

const Swatch = ({ name, value, on }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 100 }}>
    <div style={{ height: 56, borderRadius: 10, backgroundColor: value, border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'flex-end', padding: 8 }}>
      {on && <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: on, border: '1px solid rgba(0,0,0,0.1)' }} />}
    </div>
    <div>
      <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, fontWeight: 500, color: '#1e1e1e', marginBottom: 2 }}>{name}</div>
      <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: '#757575' }}>{value}</div>
    </div>
  </div>
)

const groups = [
  { label: 'Background', tokens: [
    { name: 'Default', value: '#ffffff' },
    { name: 'Default Hover', value: '#f5f5f5' },
    { name: 'Secondary', value: '#f5f5f5' },
    { name: 'Secondary Hover', value: '#e6e6e6' },
    { name: 'Tertiary', value: '#d9d9d9' },
    { name: 'Tertiary Hover', value: '#b3b3b3' },
    { name: 'Brand', value: '#005e70', on: '#f0f7f8' },
    { name: 'Brand Light', value: '#f0f7f8' },
    { name: 'Positive', value: '#14ae5c' },
    { name: 'Danger', value: '#ec221f' },
    { name: 'Warning', value: '#e8b931' },
    { name: 'Disabled', value: '#d9d9d9' },
  ]},
  { label: 'Text', tokens: [
    { name: 'Primary', value: '#1e1e1e' },
    { name: 'Secondary', value: '#757575' },
    { name: 'Disabled', value: '#b3b3b3' },
    { name: 'Brand', value: '#005e70' },
    { name: 'Brand Secondary', value: '#003741' },
    { name: 'On Brand', value: '#f0f7f8' },
    { name: 'Positive', value: '#14ae5c' },
    { name: 'Danger', value: '#ec221f' },
    { name: 'Warning', value: '#e8b931' },
  ]},
  { label: 'Border', tokens: [
    { name: 'Default', value: '#e6e6e6' },
    { name: 'Brand', value: '#005e70' },
    { name: 'Positive', value: '#14ae5c' },
    { name: 'Danger', value: '#ec221f' },
    { name: 'Warning', value: '#e8b931' },
    { name: 'Disabled', value: '#d9d9d9' },
  ]},
  { label: 'Icon', tokens: [
    { name: 'Primary', value: '#1e1e1e' },
    { name: 'Secondary', value: '#757575' },
    { name: 'Disabled', value: '#b3b3b3' },
    { name: 'Brand', value: '#005e70' },
    { name: 'On Brand', value: '#f0f7f8' },
    { name: 'Positive', value: '#14ae5c' },
    { name: 'Danger', value: '#ec221f' },
    { name: 'Warning', value: '#e8b931' },
  ]},
]

function ColourTokens() {
  return (
    <div style={{ padding: '48px 48px 80px', maxWidth: 1100, backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <PageTitle>Colour Tokens</PageTitle>
      <PageSubtitle>The full MeDS colour system — backgrounds, text, borders and icons.</PageSubtitle>
      <FigmaLink href={FIGMA_LINK} />
      {groups.map((g, i) => (
        <div key={g.label}>
          {i > 0 && <Divider />}
          <SectionLabel>{g.label}</SectionLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {g.tokens.map(t => <Swatch key={t.name} {...t} />)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ColourTokens