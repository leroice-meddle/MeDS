# Icon Button

Icon-only circular button. Four variants across two sizes.

## Usage

```jsx
import IconButton from './IconButton'

<IconButton variant="Primary" size="Medium" aria-label="Save" />
<IconButton variant="Neutral" size="Small" aria-label="Edit" />
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| variant | string | 'Primary' | Primary, Neutral, Subtle, Ghost |
| size | string | 'Medium' | Medium, Small |
| disabled | boolean | false | — |
| icon | node | null | Any React node |
| onClick | function | — | — |
