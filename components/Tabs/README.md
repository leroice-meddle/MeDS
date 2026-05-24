# Tabs

Underline-style tab bar for switching content panels.

## Usage

```jsx
import Tabs from './Tabs'

<Tabs
  items={['Overview', 'Notes', 'History', 'Files']}
  activeIndex={0}
  onTabClick={(i) => setTab(i)}
/>
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| items | string[] | [] | — |
| activeIndex | number | 0 | — |
| onTabClick | function | — | — |
