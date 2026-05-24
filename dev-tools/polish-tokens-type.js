const fs = require('fs')

const tokenBase = '/Users/lsmbp/Documents/meds/components/TokenReference/'
const typeBase = '/Users/lsmbp/Documents/meds/components/TypePrimitives/'

// ── SHARED HEADER ─────────────────────────────────────────────────────────────

const header = `
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
`

// ── COLOUR TOKENS ─────────────────────────────────────────────────────────────

fs.writeFileSync(tokenBase + 'ColourTokens.jsx', [
  "import React from 'react'",
  "",
  "const FIGMA_LINK = 'https://www.figma.com/design/zMlxINZFLyMK6lD4o11aLd/MeDS?node-id=226-13679'",
  header,
  "const Swatch = ({ name, value, on }) => (",
  "  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 100 }}>",
  "    <div style={{ height: 56, borderRadius: 10, backgroundColor: value, border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'flex-end', padding: 8 }}>",
  "      {on && <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: on, border: '1px solid rgba(0,0,0,0.1)' }} />}",
  "    </div>",
  "    <div>",
  "      <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, fontWeight: 500, color: '#1e1e1e', marginBottom: 2 }}>{name}</div>",
  "      <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: '#757575' }}>{value}</div>",
  "    </div>",
  "  </div>",
  ")",
  "",
  "const groups = [",
  "  { label: 'Background', tokens: [",
  "    { name: 'Default', value: '#ffffff' },",
  "    { name: 'Default Hover', value: '#f5f5f5' },",
  "    { name: 'Secondary', value: '#f5f5f5' },",
  "    { name: 'Secondary Hover', value: '#e6e6e6' },",
  "    { name: 'Tertiary', value: '#d9d9d9' },",
  "    { name: 'Tertiary Hover', value: '#b3b3b3' },",
  "    { name: 'Brand', value: '#005e70', on: '#f0f7f8' },",
  "    { name: 'Brand Light', value: '#f0f7f8' },",
  "    { name: 'Positive', value: '#14ae5c' },",
  "    { name: 'Danger', value: '#ec221f' },",
  "    { name: 'Warning', value: '#e8b931' },",
  "    { name: 'Disabled', value: '#d9d9d9' },",
  "  ]},",
  "  { label: 'Text', tokens: [",
  "    { name: 'Primary', value: '#1e1e1e' },",
  "    { name: 'Secondary', value: '#757575' },",
  "    { name: 'Disabled', value: '#b3b3b3' },",
  "    { name: 'Brand', value: '#005e70' },",
  "    { name: 'Brand Secondary', value: '#003741' },",
  "    { name: 'On Brand', value: '#f0f7f8' },",
  "    { name: 'Positive', value: '#14ae5c' },",
  "    { name: 'Danger', value: '#ec221f' },",
  "    { name: 'Warning', value: '#e8b931' },",
  "  ]},",
  "  { label: 'Border', tokens: [",
  "    { name: 'Default', value: '#e6e6e6' },",
  "    { name: 'Brand', value: '#005e70' },",
  "    { name: 'Positive', value: '#14ae5c' },",
  "    { name: 'Danger', value: '#ec221f' },",
  "    { name: 'Warning', value: '#e8b931' },",
  "    { name: 'Disabled', value: '#d9d9d9' },",
  "  ]},",
  "  { label: 'Icon', tokens: [",
  "    { name: 'Primary', value: '#1e1e1e' },",
  "    { name: 'Secondary', value: '#757575' },",
  "    { name: 'Disabled', value: '#b3b3b3' },",
  "    { name: 'Brand', value: '#005e70' },",
  "    { name: 'On Brand', value: '#f0f7f8' },",
  "    { name: 'Positive', value: '#14ae5c' },",
  "    { name: 'Danger', value: '#ec221f' },",
  "    { name: 'Warning', value: '#e8b931' },",
  "  ]},",
  "]",
  "",
  "function ColourTokens() {",
  "  return (",
  "    <div style={{ padding: '48px 48px 80px', maxWidth: 1100, backgroundColor: '#fafafa', minHeight: '100vh' }}>",
  "      <PageTitle>Colour Tokens</PageTitle>",
  "      <PageSubtitle>The full MeDS colour system — backgrounds, text, borders and icons.</PageSubtitle>",
  "      <FigmaLink href={FIGMA_LINK} />",
  "      {groups.map((g, i) => (",
  "        <div key={g.label}>",
  "          {i > 0 && <Divider />}",
  "          <SectionLabel>{g.label}</SectionLabel>",
  "          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>",
  "            {g.tokens.map(t => <Swatch key={t.name} {...t} />)}",
  "          </div>",
  "        </div>",
  "      ))}",
  "    </div>",
  "  )",
  "}",
  "",
  "export default ColourTokens",
].join('\n'))

// ── SPACING TOKENS ────────────────────────────────────────────────────────────

fs.writeFileSync(tokenBase + 'SpacingTokens.jsx', [
  "import React from 'react'",
  "",
  "const FIGMA_LINK = 'https://www.figma.com/design/zMlxINZFLyMK6lD4o11aLd/MeDS?node-id=226-13680'",
  header,
  "const tokens = [",
  "  { name: 'Space 100', px: 4 },",
  "  { name: 'Space 200', px: 8 },",
  "  { name: 'Space 300', px: 12 },",
  "  { name: 'Space 400', px: 16 },",
  "  { name: 'Space 600', px: 24 },",
  "  { name: 'Space 800', px: 32 },",
  "  { name: 'Space 1000', px: 40 },",
  "  { name: 'Space 1200', px: 48 },",
  "  { name: 'Space 1600', px: 64 },",
  "  { name: 'Space 2000', px: 80 },",
  "  { name: 'Space 2400', px: 96 },",
  "  { name: 'Space 4000', px: 160 },",
  "]",
  "",
  "function SpacingTokens() {",
  "  const max = 160",
  "  return (",
  "    <div style={{ padding: '48px 48px 80px', maxWidth: 800, backgroundColor: '#fafafa', minHeight: '100vh' }}>",
  "      <PageTitle>Spacing Tokens</PageTitle>",
  "      <PageSubtitle>The MeDS spacing scale — used for padding, gap, margin, and layout.</PageSubtitle>",
  "      <FigmaLink href={FIGMA_LINK} />",
  "      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>",
  "        {tokens.map(t => (",
  "          <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 16px', backgroundColor: '#ffffff', borderRadius: 10, border: '1px solid #e6e6e6' }}>",
  "            <div style={{ width: 140, fontFamily: 'Geist, sans-serif', fontSize: 12, fontWeight: 500, color: '#1e1e1e', flexShrink: 0 }}>{t.name}</div>",
  "            <div style={{ flex: 1, height: 8, backgroundColor: '#e6e6e6', borderRadius: 4, overflow: 'hidden' }}>",
  "              <div style={{ height: '100%', width: (t.px / max * 100) + '%', backgroundColor: '#005e70', borderRadius: 4 }} />",
  "            </div>",
  "            <div style={{ width: 48, fontFamily: 'Geist Mono, monospace', fontSize: 11, color: '#757575', textAlign: 'right', flexShrink: 0 }}>{t.px}px</div>",
  "          </div>",
  "        ))}",
  "      </div>",
  "    </div>",
  "  )",
  "}",
  "",
  "export default SpacingTokens",
].join('\n'))

// ── EFFECT TOKENS ─────────────────────────────────────────────────────────────

fs.writeFileSync(tokenBase + 'EffectTokens.jsx', [
  "import React from 'react'",
  "",
  "const FIGMA_LINK = 'https://www.figma.com/design/zMlxINZFLyMK6lD4o11aLd/MeDS?node-id=226-13682'",
  header,
  "const shadows = [",
  "  { name: 'Shadow 100', value: '0 1px 2px rgba(12,12,13,0.05)' },",
  "  { name: 'Shadow 200', value: '0 1px 4px rgba(12,12,13,0.1)' },",
  "  { name: 'Shadow 300', value: '0 2px 8px rgba(12,12,13,0.12)' },",
  "  { name: 'Shadow 400', value: '0 4px 16px rgba(12,12,13,0.12)' },",
  "  { name: 'Shadow 500', value: '0 8px 24px rgba(12,12,13,0.12)' },",
  "  { name: 'Shadow 600', value: '0 16px 40px rgba(12,12,13,0.16)' },",
  "]",
  "",
  "const overlays = [",
  "  { name: 'Overlay', value: 'rgba(0,0,0,0.5)', dark: true },",
  "  { name: 'Blanket', value: 'rgba(0,0,0,0.8)', dark: true },",
  "  { name: 'Layer', value: 'rgba(255,255,255,0.08)', dark: false },",
  "  { name: 'Glass', value: 'rgba(255,255,255,0.12)', blur: true, dark: false },",
  "]",
  "",
  "function EffectTokens() {",
  "  return (",
  "    <div style={{ padding: '48px 48px 80px', maxWidth: 1100, backgroundColor: '#fafafa', minHeight: '100vh' }}>",
  "      <PageTitle>Effect Tokens</PageTitle>",
  "      <PageSubtitle>Shadows and overlay effects used across MeDS components.</PageSubtitle>",
  "      <FigmaLink href={FIGMA_LINK} />",
  "      <SectionLabel>Shadows</SectionLabel>",
  "      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>",
  "        {shadows.map(s => (",
  "          <div key={s.name} style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 140 }}>",
  "            <div style={{ height: 100, borderRadius: 12, backgroundColor: '#ffffff', boxShadow: s.value, border: '1px solid #f5f5f5' }} />",
  "            <div>",
  "              <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, fontWeight: 500, color: '#1e1e1e', marginBottom: 4 }}>{s.name}</div>",
  "              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: '#757575', lineHeight: 1.6 }}>{s.value}</div>",
  "            </div>",
  "          </div>",
  "        ))}",
  "      </div>",
  "      <Divider />",
  "      <SectionLabel>Overlays</SectionLabel>",
  "      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>",
  "        {overlays.map(o => (",
  "          <div key={o.name} style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 140 }}>",
  "            <div style={{ height: 100, borderRadius: 12, backgroundColor: '#1e1e1e', overflow: 'hidden', position: 'relative' }}>",
  "              <div style={{ position: 'absolute', inset: 0, backgroundColor: o.value, backdropFilter: o.blur ? 'blur(8px)' : 'none' }} />",
  "            </div>",
  "            <div>",
  "              <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, fontWeight: 500, color: '#1e1e1e', marginBottom: 4 }}>{o.name}</div>",
  "              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: '#757575', lineHeight: 1.6 }}>{o.value}</div>",
  "            </div>",
  "          </div>",
  "        ))}",
  "      </div>",
  "    </div>",
  "  )",
  "}",
  "",
  "export default EffectTokens",
].join('\n'))

// ── TYPEPRIMITIVES ────────────────────────────────────────────────────────────

fs.writeFileSync(typeBase + 'TypePrimitives.jsx', [
  "import React from 'react'",
  "",
  "const FIGMA_LINK = 'https://www.figma.com/design/zMlxINZFLyMK6lD4o11aLd/MeDS?node-id=226-13829'",
  header,
  "const styles = {",
  "  'title-hero':        { fontSize: '72px',  fontWeight: 500, lineHeight: 1.2, letterSpacing: '-2.88px', tag: 'h1' },",
  "  'title-page':        { fontSize: '48px',  fontWeight: 500, lineHeight: 1.2, letterSpacing: '-1.152px', tag: 'h1' },",
  "  'subtitle':          { fontSize: '32px',  fontWeight: 450, lineHeight: 1.2, letterSpacing: '-1.28px', tag: 'h2' },",
  "  'heading':           { fontSize: '24px',  fontWeight: 550, lineHeight: 1.2, letterSpacing: '-0.48px', tag: 'h2' },",
  "  'subheading':        { fontSize: '20px',  fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.4px', tag: 'h3' },",
  "  'body-base':         { fontSize: '16px',  fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.16px', tag: 'p' },",
  "  'body-strong':       { fontSize: '16px',  fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.16px', tag: 'p' },",
  "  'body-emphasis':     { fontSize: '16px',  fontWeight: 400, lineHeight: 1.4, fontStyle: 'italic', tag: 'p' },",
  "  'body-link':         { fontSize: '16px',  fontWeight: 400, lineHeight: 1.4, textDecoration: 'underline', tag: 'p' },",
  "  'body-small':        { fontSize: '14px',  fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.14px', tag: 'p' },",
  "  'body-small-strong': { fontSize: '14px',  fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.14px', tag: 'p' },",
  "  'input':             { fontSize: '16px',  fontWeight: 400, lineHeight: 1, tag: 'p' },",
  "  'body-code':         { fontFamily: 'Geist Mono, monospace', fontSize: '16px', fontWeight: 400, lineHeight: 1.3, tag: 'code' },",
  "}",
  "",
  "function TypePrimitives({ variant = 'body-base', children }) {",
  "  const { tag: Tag, ...style } = styles[variant] || styles['body-base']",
  "  return (",
  "    <Tag style={{ fontFamily: 'Geist, sans-serif', color: '#1e1e1e', margin: 0, ...style }}>",
  "      {children}",
  "    </Tag>",
  "  )",
  "}",
  "",
  "const SAMPLE = 'The quick brown fox jumps over the lazy dog'",
  "const SAMPLE_SHORT = 'Meddle makes healthcare easier'",
  "",
  "const rows = [",
  "  { variant: 'title-hero',        label: 'Title Hero',         meta: '72px / 500' },",
  "  { variant: 'title-page',        label: 'Title Page',         meta: '48px / 500' },",
  "  { variant: 'subtitle',          label: 'Subtitle',           meta: '32px / 450' },",
  "  { variant: 'heading',           label: 'Heading',            meta: '24px / 550' },",
  "  { variant: 'subheading',        label: 'Subheading',         meta: '20px / 500' },",
  "  { variant: 'body-base',         label: 'Body Base',          meta: '16px / 400' },",
  "  { variant: 'body-strong',       label: 'Body Strong',        meta: '16px / 500' },",
  "  { variant: 'body-emphasis',     label: 'Body Emphasis',      meta: '16px / 400 italic' },",
  "  { variant: 'body-link',         label: 'Body Link',          meta: '16px / 400 underline' },",
  "  { variant: 'body-small',        label: 'Body Small',         meta: '14px / 400' },",
  "  { variant: 'body-small-strong', label: 'Body Small Strong',  meta: '14px / 500' },",
  "  { variant: 'input',             label: 'Input',              meta: '16px / 400' },",
  "  { variant: 'body-code',         label: 'Body Code',          meta: '16px / 400 mono' },",
  "]",
  "",
  "export function AllStyles() {",
  "  return (",
  "    <div style={{ padding: '48px 48px 80px', backgroundColor: '#fafafa', minHeight: '100vh' }}>",
  "      <PageTitle>Type Primitives</PageTitle>",
  "      <PageSubtitle>All MeDS type styles — Geist family, defined by size, weight and leading.</PageSubtitle>",
  "      <FigmaLink href={FIGMA_LINK} />",
  "      <div style={{ display: 'flex', flexDirection: 'column' }}>",
  "        {rows.map((r, i) => (",
  "          <div key={r.variant} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 160px', alignItems: 'baseline', gap: 24, padding: '20px 0', borderTop: i === 0 ? 'none' : '1px solid #e6e6e6' }}>",
  "            <div>",
  "              <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, fontWeight: 600, color: '#b3b3b3', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{r.label}</div>",
  "              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: '#b3b3b3' }}>{r.meta}</div>",
  "            </div>",
  "            <TypePrimitives variant={r.variant}>",
  "              {['title-hero','title-page','subtitle'].includes(r.variant) ? SAMPLE_SHORT : SAMPLE}",
  "            </TypePrimitives>",
  "            <div />",
  "          </div>",
  "        ))}",
  "      </div>",
  "    </div>",
  "  )",
  "}",
  "",
  "export default TypePrimitives",
].join('\n'))

// ── TYPEPRIMITIVES STORIES ────────────────────────────────────────────────────

fs.writeFileSync(typeBase + 'TypePrimitives.stories.js', [
  "import TypePrimitives, { AllStyles } from './TypePrimitives'",
  "",
  "export default {",
  "  title: 'Meddle DS/TypePrimitives',",
  "  component: TypePrimitives,",
  "  argTypes: {",
  "    variant: {",
  "      control: 'select',",
  "      options: ['title-hero','title-page','subtitle','heading','subheading','body-base','body-strong','body-emphasis','body-link','body-small','body-small-strong','input','body-code'],",
  "    },",
  "  },",
  "}",
  "",
  "export const Default = { args: { variant: 'body-base', children: 'The quick brown fox jumps over the lazy dog' } }",
  "",
  "export const AllVariants = {",
  "  name: 'All Variants',",
  "  render: () => <AllStyles />,",
  "}",
].join('\n'))

console.log('Done — ColourTokens, SpacingTokens, EffectTokens, TypePrimitives polished')
