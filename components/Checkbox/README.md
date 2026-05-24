# Checkbox

Checkbox field with label, description, and indeterminate state.

## Usage

```jsx
import CheckboxField, { CheckboxGroup } from './Checkbox'

<CheckboxField label="Accept terms" valueType="Checked" />
<CheckboxField label="Select all" valueType="Indeterminate" />
<CheckboxGroup items={[
  { label: 'Option 1', valueType: 'Checked' },
  { label: 'Option 2', valueType: 'Unchecked' },
]} />
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| label | string | 'Label' | — |
| description | string | — | — |
| hasDescription | boolean | true | — |
| valueType | string | 'Checked' | Checked, Unchecked, Indeterminate |
| state | string | 'Default' | Default, Disabled |
