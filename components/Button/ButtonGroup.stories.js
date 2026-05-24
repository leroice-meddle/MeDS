// ButtonGroup.stories.js
import React from 'react'
import ButtonGroup from './ButtonGroup'

export default {
  title: 'Meddle DS/Button Group',
  component: ButtonGroup,
  argTypes: {
    align:          { control: 'select', options: ['Justify', 'Start', 'Center', 'End', 'Stack'] },
    primaryLabel:   { control: 'text' },
    secondaryLabel: { control: 'text' },
  },
}

export const Justify = { args: { align: 'Justify', primaryLabel: 'Button', secondaryLabel: 'Button' } }
export const Start   = { args: { align: 'Start',   primaryLabel: 'Button', secondaryLabel: 'Button' } }
export const Center  = { args: { align: 'Center',  primaryLabel: 'Button', secondaryLabel: 'Button' } }
export const End     = { args: { align: 'End',     primaryLabel: 'Button', secondaryLabel: 'Button' } }
export const Stack   = { args: { align: 'Stack',   primaryLabel: 'Button', secondaryLabel: 'Button' } }

export const AllAlignments = {
  name: 'All Alignments',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24, width: 400 }}>
      {['Justify', 'Start', 'Center', 'End', 'Stack'].map(align => (
        <div key={align}>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '0 0 8px 0' }}>
            {align}
          </p>
          <ButtonGroup align={align} primaryLabel="Button" secondaryLabel="Button" />
        </div>
      ))}
    </div>
  ),
}