import React from 'react'
import Textarea from './Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    placeholder: { control: 'text' },
    hasLabel: { control: 'boolean' },
    hasDescription: { control: 'boolean' },
    hasError: { control: 'boolean' },
    error: { control: 'text' },
    state: { control: 'select', options: ['default', 'error', 'disabled'] },
  }
}

export const Default = { args: { label: 'Message', placeholder: 'Enter your message', hasLabel: true } }
export const WithDescription = { args: { label: 'Message', description: 'Max 500 characters.', hasDescription: true, placeholder: 'Enter your message' } }
export const Error = { args: { label: 'Message', state: 'error', hasError: true, error: 'This field is required', placeholder: 'Enter your message' } }
export const Disabled = { args: { label: 'Message', state: 'disabled', placeholder: 'Enter your message' } }
