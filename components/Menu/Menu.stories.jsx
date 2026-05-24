import React from 'react'
import Menu, { MenuItem, MenuHeader, MenuSeparator, MenuSection, MenuShortcut } from './Menu'

export default {
  title: 'Meddle DS/Menu',
  component: Menu,
}

export const Default = {
  name: 'Menu (composed)',
  render: () => (
    <div style={{ padding: 40 }}>
      <Menu>
        <MenuHeader heading="Heading" subheading="Heading" />
        <MenuSeparator />
        <MenuSection>
          <MenuItem label="Menu Label" description="Menu description." shortcut="⇧A" hasIcon hasDescription hasShortcut />
          <MenuItem label="Menu Label" description="Menu description." shortcut="⇧A" hasIcon hasDescription hasShortcut />
          <MenuItem label="Menu Label" description="Menu description." shortcut="⇧A" hasIcon hasDescription hasShortcut />
        </MenuSection>
        <MenuSeparator />
        <MenuSection>
          <MenuItem label="Menu Label" description="Menu description." shortcut="⇧A" hasIcon hasDescription hasShortcut />
          <MenuItem label="Menu Label" description="Menu description." shortcut="⇧A" hasIcon hasDescription hasShortcut />
        </MenuSection>
      </Menu>
    </div>
  ),
}

export const MenuItemStates = {
  name: 'Menu Item States',
  render: () => (
    <div style={{ padding: 40 }}>
      <Menu>
        <MenuItem label="Default"  description="Menu description." shortcut="⇧A" state="Default"  hasIcon hasDescription hasShortcut />
        <MenuItem label="Hover"    description="Menu description." shortcut="⇧A" state="Hover"    hasIcon hasDescription hasShortcut />
        <MenuItem label="Disabled" description="Menu description." shortcut="⇧A" state="Disabled" hasIcon hasDescription hasShortcut />
      </Menu>
    </div>
  ),
}

export const NoIcons = {
  name: 'No Icons',
  render: () => (
    <div style={{ padding: 40 }}>
      <Menu>
        <MenuItem label="Menu Label" description="Menu description." shortcut="⌘K" hasIcon={false} hasDescription hasShortcut />
        <MenuItem label="Menu Label" description="Menu description." shortcut="⌘K" hasIcon={false} hasDescription hasShortcut />
        <MenuItem label="Menu Label" description="Menu description." shortcut="⌘K" hasIcon={false} hasDescription hasShortcut />
      </Menu>
    </div>
  ),
}

export const Primitives = {
  name: 'Primitives',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 40 }}>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '0 0 8px' }}>MenuHeader</p>
        <div style={{ border: '1px solid #e6e6e6', borderRadius: 8, width: 301 }}>
          <MenuHeader heading="Heading" subheading="Heading" />
        </div>
      </div>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '0 0 8px' }}>MenuSeparator</p>
        <div style={{ border: '1px solid #e6e6e6', borderRadius: 8, width: 301 }}>
          <MenuSeparator />
        </div>
      </div>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '0 0 8px' }}>MenuShortcut</p>
        <div style={{ display: 'flex', gap: 16 }}>
          {['⌘K', '⇧A', '⌥Z', '⌃C'].map(s => <MenuShortcut key={s} shortcut={s} />)}
        </div>
      </div>
    </div>
  ),
}