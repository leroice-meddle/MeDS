import * as LucideIcons from 'lucide-react'
import Icon from './Icon'

export default {
  title: 'Meddle DS/Icon',
  component: Icon,
  argTypes: {
    name: { control: 'text' },
    size: { control: 'select', options: [12, 16, 20, 24, 32] },
    color: { control: 'color' },
    strokeWidth: { control: { type: 'range', min: 0.5, max: 3, step: 0.25 } },
  },
}

export const Default = {
  args: { name: 'arrow-right', size: 16, color: '#1e1e1e', strokeWidth: 1.5 },
}

export const Sizes = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 32 }}>
      {[12, 16, 20, 24, 32].map(size => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Icon name='circle-user' size={size} color='#1e1e1e' />
          <span style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575' }}>{size}px</span>
        </div>
      ))}
    </div>
  ),
}

export const AllIcons = {
  name: 'All Icons',
  render: () => {
    const icons = Object.keys(LucideIcons).filter(k => {
      const val = LucideIcons[k]
      return typeof val === 'function' && k !== 'createLucideIcon' && k !== 'default'
    })
    const toKebab = str => str.replace(/([A-Z])/g, m => '-' + m.toLowerCase()).replace(/^-/, '')
    return (
      <div style={{ padding: 32 }}>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 13, color: '#757575', marginBottom: 24 }}>
          {icons.length} icons — use the name in kebab-case, e.g. <code>arrow-right</code>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {icons.map(name => {
            const Comp = LucideIcons[name]
            const kebab = toKebab(name)
            return (
              <div
                key={name}
                title={kebab}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '12px 8px', width: 72, borderRadius: 8, cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f0f7f8'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <Comp size={16} color='#1e1e1e' strokeWidth={1.5} />
                <span style={{ fontFamily: 'Geist, sans-serif', fontSize: 9, color: '#757575', textAlign: 'center', wordBreak: 'break-all', lineHeight: 1.3 }}>{kebab}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  },
}