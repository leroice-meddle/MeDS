# Date Input

DD / MM / YYYY segmented date entry field.

## Usage

```jsx
import DateInput from './DateInput'

<DateInput label="Date of birth" />
<DateInput label="Date of birth" state="Error" hasError error="Invalid date" />
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| label | string | 'Label' | — |
| hasLabel | boolean | true | — |
| state | string | 'Default' | Default, Error, Disabled |
| valueType | string | 'Default' | Default, Placeholder |
| hasError | boolean | false | — |
| error | string | 'Error' | — |
