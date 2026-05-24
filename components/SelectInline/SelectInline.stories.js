import React from 'react'
import SelectInline from './SelectInline'

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']

export default {
  title: 'Meddle DS/Select Inline',
  component: SelectInline,
  argTypes: {
    label: { control: 'text' },
    hasLabel: { control: 'boolean' },
    hasError: { control: 'boolean' },
    error: { control: 'text' },
    state: { control: 'select', options: ['default', 'error', 'disabled'] },
  }
}

export const Default = { args: { label: 'Sort', placeholder: 'Select...', options, hasLabel: true } }
export const Error = { args: { label: 'Sort', placeholder: 'Select...', options, state: 'error', hasError: true, error: 'Required' } }
export const Disabled = { args: { label: 'Sort', placeholder: 'Select...', options, state: 'disabled' } }
