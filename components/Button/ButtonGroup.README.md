# Button Group

Paired Neutral + Primary buttons with five alignment modes.

## Usage

```jsx
import ButtonGroup from './ButtonGroup'

<ButtonGroup align="Justify" primaryLabel="Confirm" secondaryLabel="Cancel" />
<ButtonGroup align="Stack" primaryLabel="Save" secondaryLabel="Discard" />
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| align | string | 'Justify' | Justify, Start, Center, End, Stack |
| primaryLabel | string | 'Button' | — |
| secondaryLabel | string | 'Button' | — |
| onPrimary | function | — | — |
| onSecondary | function | — | — |
