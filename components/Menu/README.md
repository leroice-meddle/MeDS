# Menu

Dropdown menu with icon, label, shortcut, sections and separators.

## Usage

```jsx
import Menu, { MenuItem, MenuHeader, MenuSeparator, MenuSection } from './Menu'

<Menu>
  <MenuHeader heading="Section" subheading="Actions" />
  <MenuSeparator />
  <MenuSection>
    <MenuItem label="Copy" shortcut="⌘C" hasIcon hasShortcut />
    <MenuItem label="Paste" shortcut="⌘V" hasIcon hasShortcut />
    <MenuItem label="Delete" state="Disabled" hasIcon />
  </MenuSection>
</Menu>
```

## MenuItem Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| label | string | 'Menu Label' | — |
| description | string | — | — |
| shortcut | string | '⇧A' | — |
| hasIcon | boolean | true | — |
| hasShortcut | boolean | true | — |
| state | string | 'Default' | Default, Disabled |
