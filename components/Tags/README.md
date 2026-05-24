# Tag

Colour-coded label chip. Five schemes, two variants, removable.

## Usage

```jsx
import Tag, { TagToggle, TagToggleGroup } from './Tag'

<Tag label="Active" scheme="Positive" variant="Secondary" removable={false} />
<Tag label="Urgent" scheme="Danger" variant="Primary" onRemove={() => {}} />

<TagToggleGroup
  items={['All', 'Active', 'Archived']}
  activeIndices={[0]}
  onToggle={(active) => setFilters(active)}
/>
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| label | string | 'Tag' | — |
| scheme | string | 'Brand' | Brand, Neutral, Danger, Positive, Warning |
| variant | string | 'Primary' | Primary, Secondary |
| removable | boolean | true | — |
| onRemove | function | — | — |
