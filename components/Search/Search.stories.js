import React, { useState } from 'react'
import Search from './Search'

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    state: { control: 'select', options: ['Default', 'Disabled'] },
    value: { control: 'text' },
    placeholder: { control: 'text' },
  },
}

export const Placeholder = { args: { value: '',      state: 'Default',  placeholder: 'Search' } }
export const Filled      = { args: { value: 'Value', state: 'Default',  placeholder: 'Search' } }
export const Disabled    = { args: { value: '',      state: 'Disabled', placeholder: 'Search' } }

export const Interactive = {
  name: 'Interactive',
  render: () => {
    const [val, setVal] = React.useState('')
    return (
      <div style={{ padding: 24, width: 280 }}>
        <Search
          value={val}
          placeholder="Search"
          onChange={e => setVal(e.target.value)}
          onClear={() => setVal('')}
        />
      </div>
    )
  },
}

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 24, width: 280 }}>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '0 0 8px' }}>Placeholder</p>
        <Search value="" placeholder="Search" />
      </div>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '0 0 8px' }}>Filled</p>
        <Search value="Value" placeholder="Search" />
      </div>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '0 0 8px' }}>Disabled</p>
        <Search value="" placeholder="Search" state="Disabled" />
      </div>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '0 0 8px' }}>Disabled Filled</p>
        <Search value="Value" placeholder="Search" state="Disabled" />
      </div>
    </div>
  ),
}