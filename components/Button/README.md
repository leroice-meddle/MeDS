# Button

Core action component. Four variants across two sizes.

## Usage

```jsx
import Button from './Button'

<Button label="Save" variant="Primary" size="Medium" />
<Button label="Cancel" variant="Neutral" size="Medium" />
<Button label="Delete" variant="Ghost" size="Small" disabled />
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| label | string | 'Button' | — |
| variant | string | 'Primary' | Primary, Neutral, Subtle, Ghost |
| size | string | 'Medium' | Medium, Small |
| disabled | boolean | false | — |
| iconStart | node | null | Any React node |
| iconEnd | node | null | Any React node |
| onClick | function | — | — |
