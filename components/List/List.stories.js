import React from 'react'
import List, { Row, Switch, EditButton, Grabber, Trailing } from './List'

export default {
  title: 'Meddle DS/List',
  component: List,
}

export const DefaultRow = {
  name: 'Row',
  render: () => <div style={{ width: 360, border: '1px solid #e6e6e6', borderRadius: 12, overflow: 'hidden' }}><Row title="Title" subtitle="Subtitle" trailingType="Default" /></div>
}

export const AllTrailingTypes = {
  name: 'All Trailing Types',
  render: () => (
    <div style={{ width: 360, border: '1px solid #e6e6e6', borderRadius: 12, overflow: 'hidden' }}>
      <List rows={[
        { title: 'Title', subtitle: 'Subtitle', trailingType: 'Default' },
        { title: 'Title', subtitle: 'Subtitle', trailingType: 'Disclosure' },
        { title: 'Title', subtitle: 'Subtitle', trailingType: 'Toggle' },
        { title: 'Title', subtitle: 'Subtitle', trailingType: 'Picker - Date' },
        { title: 'Title', subtitle: 'Subtitle', trailingType: 'Picker - Time' },
        { title: 'Title', subtitle: 'Subtitle', trailingType: 'Picker - Date and Time' },
        { title: 'Title', subtitle: 'Subtitle', trailingType: 'Stepper' },
        { title: 'Title', subtitle: 'Subtitle', trailingType: 'Button' },
        { title: 'Title', subtitle: 'Subtitle', trailingType: 'Pop-Up' },
      ]} />
    </div>
  )
}

export const SwitchStory = {
  name: 'Switch',
  render: () => (
    <div style={{ display: 'flex', gap: 16, padding: 24, alignItems: 'center' }}>
      <Switch on={true} />
      <Switch on={false} />
      <Switch on={true} disabled />
      <Switch on={false} disabled />
    </div>
  )
}

export const EditButtonStory = {
  name: 'Edit Button',
  render: () => (
    <div style={{ display: 'flex', gap: 16, padding: 24, alignItems: 'center' }}>
      {['unselected', 'selected', 'add', 'remove'].map(v => (
        <div key={v} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <EditButton variant={v} />
          <span style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575' }}>{v}</span>
        </div>
      ))}
    </div>
  )
}

export const TrailingStory = {
  name: 'Trailing Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 24 }}>
      {['Default', 'Disclosure', 'Toggle', 'Picker - Date', 'Picker - Time', 'Picker - Date and Time', 'Stepper', 'Button', 'Pop-Up'].map(type => (
        <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', width: 140, flexShrink: 0 }}>{type}</span>
          <Trailing type={type} />
        </div>
      ))}
    </div>
  )
}