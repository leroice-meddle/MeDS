# Search

Pill-shaped search input with clear button.

## Usage

```jsx
import Search from './Search'

const [val, setVal] = useState('')

<Search
  value={val}
  placeholder="Search"
  onClear={() => setVal('')}
/>
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| value | string | '' | — |
| placeholder | string | 'Search' | — |
| state | string | 'Default' | Default, Disabled |
| onClear | function | — | — |
