import React from 'react'
import CheckboxField, { CheckboxGroup } from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: CheckboxField,
  argTypes: {
    state:          { control: 'select', options: ['Default', 'Disabled'] },
    valueType:      { control: 'select', options: ['Checked', 'Unchecked', 'Indeterminate'] },
    hasDescription: { control: 'boolean' },
    label:          { control: 'text' },
    description:    { control: 'text' },
  },
}

export const Checked       = { args: { label: 'Label', description: 'Description', valueType: 'Checked',       state: 'Default',  hasDescription: true } }
export const Unchecked     = { args: { label: 'Label', description: 'Description', valueType: 'Unchecked',     state: 'Default',  hasDescription: true } }
export const Indeterminate = { args: { label: 'Label', description: 'Description', valueType: 'Indeterminate', state: 'Default',  hasDescription: true } }
export const Disabled      = { args: { label: 'Label', description: 'Description', valueType: 'Checked',       state: 'Disabled', hasDescription: true } }

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', gap: 32, padding: 24, flexWrap: 'wrap' }}>
      {['Checked', 'Unchecked', 'Indeterminate'].map(v => (
        <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: 0 }}>{v}</p>
          <CheckboxField label="Label" description="Description" valueType={v} state="Default" hasDescription />
          <CheckboxField label="Label" description="Description" valueType={v} state="Disabled" hasDescription />
        </div>
      ))}
    </div>
  ),
}

export const Group = {
  name: 'Checkbox Group',
  render: () => (
    <CheckboxGroup items={[
      { label: 'Option 1', description: 'Description', valueType: 'Checked',   hasDescription: true },
      { label: 'Option 2', description: 'Description', valueType: 'Unchecked', hasDescription: true },
      { label: 'Option 3', description: 'Description', valueType: 'Unchecked', hasDescription: true },
    ]} />
  ),
}