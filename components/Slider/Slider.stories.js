import React from 'react'
import SliderField from './Slider'

export default {
  title: 'Components/Slider',
  component: SliderField,
  argTypes: {
    state:          { control: 'select', options: ['Default', 'Disabled'] },
    hasLabel:       { control: 'boolean' },
    hasDescription: { control: 'boolean' },
    label:          { control: 'text' },
    description:    { control: 'text' },
  },
}

export const Default  = { args: { state: 'Default',  hasLabel: true, hasDescription: true, label: 'Label', description: 'Description' } }
export const Disabled = { args: { state: 'Disabled', hasLabel: true, hasDescription: true, label: 'Label', description: 'Description' } }