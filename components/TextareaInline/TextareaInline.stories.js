import React from 'react'
import TextareaInline from './TextareaInline'

export default {
  title: 'Components/Textarea Inline',
  component: TextareaInline,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hasLabel: { control: 'boolean' },
    hasError: { control: 'boolean' },
    error: { control: 'text' },
    state: { control: 'select', options: ['default', 'error', 'disabled'] },
  }
}

export const Default = { args: { label: 'Notes', placeholder: 'Enter notes', hasLabel: true } }
export const Error = { args: { label: 'Notes', state: 'error', hasError: true, error: 'This field is required' } }
export const Disabled = { args: { label: 'Notes', state: 'disabled' } }
