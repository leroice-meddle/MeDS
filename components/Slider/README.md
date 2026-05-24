# Slider

Range slider with label and description.

## Usage

```jsx
import SliderField from './Slider'

<SliderField label="Price range" description="Drag to filter" prefix="$" min={0} max={500} />
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| label | string | 'Label' | — |
| description | string | — | — |
| state | string | 'Default' | Default, Disabled |
| min | number | 0 | — |
| max | number | 100 | — |
| prefix | string | '$' | — |
