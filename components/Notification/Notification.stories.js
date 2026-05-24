import React from 'react'
import Notification from './Notification'

export default {
  title: 'Meddle DS/Notification',
  component: Notification,
  argTypes: {
    variant:     { control: 'select', options: ['Message', 'Alert'] },
    hasIcon:     { control: 'boolean' },
    hasButton:   { control: 'boolean' },
    dismissible: { control: 'boolean' },
    title:       { control: 'text' },
    body:        { control: 'text' },
  },
}

export const Message = { args: { variant: 'Message', title: 'Title', body: 'Body text.', hasIcon: true, hasButton: true, dismissible: true } }
export const Alert   = { args: { variant: 'Alert',   title: 'Title', body: 'Body text.', hasIcon: true, hasButton: true, dismissible: true } }

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 40 }}>
      <Notification variant="Message" title="Title" body="Body text." hasIcon hasButton dismissible />
      <Notification variant="Alert"   title="Title" body="Body text." hasIcon hasButton dismissible />
    </div>
  ),
}