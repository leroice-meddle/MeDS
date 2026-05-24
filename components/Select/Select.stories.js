import React from 'react'
import Select from './Select'

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hasLabel: { control: 'boolean' },
    hasDescription: { control: 'boolean' },
    hasError: { control: 'boolean' },
    error: { control: 'text' },
    state: { control: 'select', options: ['default', 'error', 'disabled'] },
  }
}

export const Default = { args: { label: 'Country', placeholder: 'Select a country', options, hasLabel: true } }
export const WithDescription = { args: { label: 'Country', description: 'Select the country where you reside.', hasDescription: true, placeholder: 'Select a country', options } }
export const Error = { args: { label: 'Country', placeholder: 'Select a country', options, state: 'error', hasError: true, error: 'Please select a country' } }
export const Disabled = { args: { label: 'Country', placeholder: 'Select a country', options, state: 'disabled' } }
