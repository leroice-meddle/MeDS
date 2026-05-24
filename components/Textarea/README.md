# Textarea

Multi-line text input with label and error state.

## Usage

```jsx
import TextareaField from './Textarea'

<TextareaField label="Notes" value="Patient notes here..." />
<TextareaField label="Notes" state="Error" hasError error="Required field" />
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| label | string | 'Label' | — |
| value | string | 'Value' | — |
| hasLabel | boolean | true | — |
| state | string | 'Default' | Default, Error, Disabled |
| valueType | string | 'Default' | Default, Placeholder |
| hasError | boolean | false | — |
