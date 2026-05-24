# Select Inline

Inline label + dropdown for use inside list rows or forms.

## Usage

```jsx
import SelectInline from './SelectInline'

<SelectInline label="Type" value="Option 1" options={['Option 1', 'Option 2']} />
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| label | string | 'Label' | — |
| value | string | 'Value' | — |
| options | string[] | [...] | — |
| state | string | 'Default' | Default, Error, Disabled |
| hasLabel | boolean | true | — |
