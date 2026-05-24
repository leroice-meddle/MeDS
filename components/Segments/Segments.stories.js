import React from 'react'
import Segments, { Segment } from './Segments'

export default {
  title: 'Components/Segments',
  component: Segments,
}

export const Default = {
  name: 'Segments',
  render: () => (
    <div style={{ padding: 40, width: 500 }}>
      <Segments items={['Overview', 'Details', 'History', 'Notes', 'Files', 'Settings']} />
    </div>
  ),
}

export const SegmentStates = {
  name: 'Segment States',
  render: () => (
    <div style={{ display: 'flex', gap: 8, padding: 40, alignItems: 'center' }}>
      <Segment label="Active"  active={true} />
      <Segment label="Default" active={false} />
    </div>
  ),
}