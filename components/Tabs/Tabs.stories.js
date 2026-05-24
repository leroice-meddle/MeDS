import React from 'react'
import Tabs, { Tab } from './Tabs'

export default {
  title: 'Meddle DS/Tabs',
  component: Tabs,
}

export const Default = {
  name: 'Tabs',
  render: () => (
    <div style={{ padding: 40 }}>
      <Tabs items={['Overview', 'Details', 'History', 'Notes', 'Files', 'Settings']} />
    </div>
  ),
}

export const TabStates = {
  name: 'Tab States',
  render: () => (
    <div style={{ display: 'flex', gap: 0, padding: 40 }}>
      <Tab label="Active"   active={true} />
      <Tab label="Default"  active={false} />
      <Tab label="Default"  active={false} />
    </div>
  ),
}