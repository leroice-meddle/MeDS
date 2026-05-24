// ButtonDanger.stories.js
import React from 'react'
import ButtonDanger from './ButtonDanger'

export default {
  title: 'Meddle DS/Button Danger',
  component: ButtonDanger,
  argTypes: {
    variant:  { control: 'select', options: ['Primary', 'Subtle'] },
    size:     { control: 'select', options: ['Medium', 'Small'] },
    disabled: { control: 'boolean' },
    label:    { control: 'text' },
  },
}

export const Primary  = { args: { variant: 'Primary', label: 'Button', size: 'Medium' } }
export const Subtle   = { args: { variant: 'Subtle',  label: 'Button', size: 'Medium' } }
export const Disabled = { args: { variant: 'Primary', label: 'Button', size: 'Medium', disabled: true } }
export const Small    = { args: { variant: 'Primary', label: 'Button', size: 'Small' } }

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
            <ButtonDanger label="Button" variant="Primary" size={size} />
            <ButtonDanger label="Button" variant="Subtle"  size={size} />
            <ButtonDanger label="Button" variant="Primary" size={size} disabled />
          </div>
        </div>
      ))}
    </div>
  ),
}