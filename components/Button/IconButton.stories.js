// IconButton.stories.js
import React from 'react'
import IconButton from './IconButton'

export default {
  title: 'Meddle DS/Icon Button',
  component: IconButton,
  argTypes: {
    variant:  { control: 'select', options: ['Primary', 'Neutral', 'Subtle', 'Ghost'] },
    size:     { control: 'select', options: ['Medium', 'Small'] },
    disabled: { control: 'boolean' },
  },
}

export const Primary  = { args: { variant: 'Primary', size: 'Medium' } }
export const Neutral  = { args: { variant: 'Neutral', size: 'Medium' } }
export const Subtle   = { args: { variant: 'Subtle',  size: 'Medium' } }
export const Ghost    = { args: { variant: 'Ghost',   size: 'Medium' } }
export const Disabled = { args: { variant: 'Primary', size: 'Medium', disabled: true } }
export const Small    = { args: { variant: 'Primary', size: 'Small' } }

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24 }}>
      {['Medium', 'Small'].map(size => (
        <div key={size}>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '0 0 12px 0' }}>
            {size}
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <IconButton variant="Primary" size={size} aria-label="Primary" />
            <IconButton variant="Neutral" size={size} aria-label="Neutral" />
            <IconButton variant="Subtle"  size={size} aria-label="Subtle" />
            <IconButton variant="Ghost"   size={size} aria-label="Ghost" />
            <IconButton variant="Primary" size={size} disabled aria-label="Disabled" />
          </div>
        </div>
      ))}
    </div>
  ),
}