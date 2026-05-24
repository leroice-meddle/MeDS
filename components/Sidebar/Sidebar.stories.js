import React from 'react'
import Sidebar, { NavItem } from './Sidebar'

export default {
  title: 'Meddle DS/Sidebar',
  component: Sidebar,
}

export const Default = {
  name: 'Sidebar',
  render: () => (
    <div style={{ height: '100vh', padding: 24, background: '#f5f5f5' }}>
      <Sidebar />
    </div>
  ),
}

export const NavItemStates = {
  name: 'Nav Item States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 24, width: 240 }}>
      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '0 0 8px' }}>Default</p>
      <NavItem label="Sidebar" state="Default" />
      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '8px 0' }}>With Dropdown</p>
      <NavItem label="Sidebar" state="Default" showDropdown />
      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '8px 0' }}>Disabled</p>
      <NavItem label="Sidebar" state="Disabled" showDropdown />
    </div>
  ),
}