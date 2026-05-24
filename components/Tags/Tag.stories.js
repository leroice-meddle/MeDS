import React from 'react'
import Tag, { TagToggle, TagToggleGroup } from './Tag'

export default {
  title: 'Meddle DS/Tag',
  component: Tag,
  argTypes: {
    scheme:    { control: 'select', options: ['Brand', 'Neutral', 'Danger', 'Positive', 'Warning'] },
    variant:   { control: 'select', options: ['Primary', 'Secondary'] },
    removable: { control: 'boolean' },
    label:     { control: 'text' },
  },
}

export const Default  = { args: { label: 'Tag', scheme: 'Brand',    variant: 'Primary',   removable: true } }
export const Neutral  = { args: { label: 'Tag', scheme: 'Neutral',  variant: 'Primary',   removable: true } }
export const Danger   = { args: { label: 'Tag', scheme: 'Danger',   variant: 'Primary',   removable: true } }
export const Positive = { args: { label: 'Tag', scheme: 'Positive', variant: 'Primary',   removable: true } }
export const Warning  = { args: { label: 'Tag', scheme: 'Warning',  variant: 'Primary',   removable: true } }

export const AllVariants = {
  name: 'All Schemes & Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 24 }}>
      {['Brand', 'Danger', 'Positive', 'Warning', 'Neutral'].map(scheme => (
        <div key={scheme} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Tag label="Tag" scheme={scheme} variant="Primary"   removable />
          <Tag label="Tag" scheme={scheme} variant="Secondary" removable />
          <Tag label="Tag" scheme={scheme} variant="Primary"   removable={false} />
          <Tag label="Tag" scheme={scheme} variant="Secondary" removable={false} />
        </div>
      ))}
    </div>
  ),
}

export const Toggle = {
  name: 'Tag Toggle',
  render: () => (
    <div style={{ display: 'flex', gap: 8, padding: 24, alignItems: 'center' }}>
      <TagToggle label="Label" active={true} />
      <TagToggle label="Label" active={false} />
    </div>
  ),
}

export const ToggleGroup = {
  name: 'Tag Toggle Group',
  render: () => (
    <div style={{ padding: 24 }}>
      <TagToggleGroup items={['All', 'Active', 'Pending', 'Completed', 'Cancelled', 'Archived', 'Draft']} activeIndices={[0]} />
    </div>
  ),
}