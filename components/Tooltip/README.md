# Tooltip

Contextual popover with title and body. Four placements.

## Usage

```jsx
import Tooltip from './Tooltip'

<Tooltip title="More info" body="This field is required." placement="Top">
  <button>Hover me</button>
</Tooltip>
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| title | string | 'Title' | — |
| body | string | 'Body text' | — |
| hasBody | boolean | true | — |
| placement | string | 'Top' | Top, Bottom, Left, Right |
| children | node | — | Trigger element |
