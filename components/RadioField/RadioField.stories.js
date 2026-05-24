import React from 'react'
import RadioField, { RadioGroup } from './RadioField'

export default {
  title: 'Components/Radio Field',
  component: RadioField,
  argTypes: {
    state:          { control: 'select', options: ['Default', 'Disabled'] },
    checked:        { control: 'boolean' },
    hasDescription: { control: 'boolean' },
    label:          { control: 'text' },
    description:    { control: 'text' },
  },
}

export const Selected   = { args: { label: 'Label', description: 'Description', checked: true,  state: 'Default',  hasDescription: true } }
export const Unselected = { args: { label: 'Label', description: 'Description', checked: false, state: 'Default',  hasDescription: true } }
export const Disabled   = { args: { label: 'Label', description: 'Description', checked: true,  state: 'Disabled', hasDescription: true } }

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', gap: 32, padding: 24 }}>
      {[true, false].map(checked => (
        <div key={String(checked)} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: 0 }}>
            {checked ? 'Selected' : 'Unselected'}
          </p>
          <RadioField label="Label" description="Description" checked={checked} state="Default" hasDescription />
          <RadioField label="Label" description="Description" checked={checked} state="Disabled" hasDescription />
        </div>
      ))}
    </div>
  ),
}

export const Group = {
  name: 'Radio Group',
  render: () => (
    <RadioGroup items={[
      { label: 'Option 1', description: 'Description', checked: true,  hasDescription: true },
      { label: 'Option 2', description: 'Description', checked: false, hasDescription: true },
      { label: 'Option 3', description: 'Description', checked: false, hasDescription: true },
    ]} />
  ),
}