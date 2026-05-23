import React from 'react'
import Button from './Button'

export default {
  title: 'Meddle DS/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['medium', 'small'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' }
  }
}

export const Primary = { args: { label: 'Continue', variant: 'primary' } }
export const Secondary = { args: { label: 'Cancel', variant: 'secondary' } }
export const Small = { args: { label: 'Done', size: 'small' } }
export const Disabled = { args: { label: 'Unavailable', disabled: true } }
