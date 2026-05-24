import React from 'react'
import Button from './Button'

export default {
  title: 'Meddle DS/Button',
  component: Button,
  argTypes: {
    variant:  { control: 'select', options: ['Primary', 'Neutral', 'Subtle', 'Ghost'] },
    size:     { control: 'select', options: ['Medium', 'Small'] },
    disabled: { control: 'boolean' },
    label:    { control: 'text' },
  },
}

export const Primary  = { args: { variant: 'Primary',  label: 'Button', size: 'Medium' } }
export const Neutral  = { args: { variant: 'Neutral',  label: 'Button', size: 'Medium' } }
export const Subtle   = { args: { variant: 'Subtle',   label: 'Button', size: 'Medium' } }
export const Ghost    = { args: { variant: 'Ghost',    label: 'Button', size: 'Medium' } }
export const Disabled = { args: { variant: 'Primary',  label: 'Button', size: 'Medium', disabled: true } }
export const Small    = { args: { variant: 'Primary',  label: 'Button', size: 'Small' } }

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24 }}>
      {['Medium', 'Small'].map(size => (
        <div key={size}>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '0 0 12px 0' }}>
            {size}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button label="Button" variant="Primary" size={size} />
            <Button label="Button" variant="Neutral" size={size} />
            <Button label="Button" variant="Subtle"  size={size} />
            <Button label="Button" variant="Ghost"   size={size} />
            <Button label="Button" variant="Primary" size={size} disabled />
          </div>
        </div>
      ))}
    </div>
  ),
}