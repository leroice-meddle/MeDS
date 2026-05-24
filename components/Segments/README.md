# Segments

Pill-style segmented control for switching views.

## Usage

```jsx
import Segments from './Segments'

<Segments
  items={['Day', 'Week', 'Month']}
  activeIndex={0}
  onSegmentClick={(i) => setView(i)}
/>
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| items | string[] | [] | — |
| activeIndex | number | 0 | — |
| onSegmentClick | function | — | — |
