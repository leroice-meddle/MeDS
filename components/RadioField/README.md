# Radio Field

Single-select radio input with label and description.

## Usage

```jsx
import RadioField, { RadioGroup } from './RadioField'

<RadioGroup items={[
  { label: 'Option A', description: 'First choice', checked: true },
  { label: 'Option B', description: 'Second choice', checked: false },
]} />
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| label | string | 'Label' | — |
| description | string | — | — |
| hasDescription | boolean | true | — |
| checked | boolean | false | — |
| state | string | 'Default' | Default, Disabled |
