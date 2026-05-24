# Select

Dropdown select field with label and error state.

## Usage

```jsx
import SelectField from './Select'

<SelectField
  label="Country"
  value="Australia"
  options={['Australia', 'New Zealand', 'Singapore']}
  onChange={(val) => setCountry(val)}
/>
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| label | string | 'Label' | — |
| value | string | 'Value' | — |
| options | string[] | [...] | — |
| state | string | 'Default' | Default, Error, Disabled |
| hasError | boolean | false | — |
| error | string | 'Error' | — |
