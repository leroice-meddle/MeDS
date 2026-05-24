# Navigation

Tab bar buttons (icon + label) and pill-style nav links.

## Usage

```jsx
import { NavigationButtonList, NavigationPillList } from './Navigation'

<NavigationButtonList
  direction="Row"
  items={['Home', 'Search', 'Activity', 'Profile']}
  activeIndex={0}
  onItemClick={(i) => setActive(i)}
/>

<NavigationPillList
  items={['Overview', 'Details', 'History']}
  activeIndex={0}
/>
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| direction | string | 'Row' | Row, Column |
| items | string[] | [] | — |
| activeIndex | number | 0 | — |
| onItemClick | function | — | — |
