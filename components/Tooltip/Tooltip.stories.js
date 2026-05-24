import React from 'react'
import Tooltip, { TooltipBubble } from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: { control: 'select', options: ['Top', 'Bottom', 'Left', 'Right'] },
    hasBody:   { control: 'boolean' },
    title:     { control: 'text' },
    body:      { control: 'text' },
  },
}

export const Top    = { args: { placement: 'Top',    title: 'Title', body: 'Body text', hasBody: true } }
export const Bottom = { args: { placement: 'Bottom', title: 'Title', body: 'Body text', hasBody: true } }
export const Left   = { args: { placement: 'Left',   title: 'Title', body: 'Body text', hasBody: true } }
export const Right  = { args: { placement: 'Right',  title: 'Title', body: 'Body text', hasBody: true } }

export const AllPlacements = {
  name: 'All Placements',
  render: () => (
    <div style={{ display: 'flex', gap: 48, padding: 60, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {['Top', 'Bottom', 'Left', 'Right'].map(p => (
        <div key={p} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', margin: 0 }}>{p}</p>
          <TooltipBubble title="Title" body="Body text" placement={p} />
        </div>
      ))}
    </div>
  ),
}

export const Interactive = {
  name: 'Interactive (hover me)',
  render: () => (
    <div style={{ display: 'flex', gap: 48, padding: 80, alignItems: 'center', justifyContent: 'center' }}>
      {['Top', 'Bottom', 'Left', 'Right'].map(p => (
        <Tooltip key={p} title="Title" body="Body text" placement={p}>
          <button style={{ fontFamily: 'Geist, sans-serif', fontSize: 14, padding: '8px 16px', borderRadius: 8, border: '1px solid #e6e6e6', background: 'white', cursor: 'pointer' }}>
            {p}
          </button>
        </Tooltip>
      ))}
    </div>
  ),
}