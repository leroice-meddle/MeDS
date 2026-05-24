# Dialog

Modal overlay. Card (centered) or Sheet (bottom) type.

## Usage

```jsx
import Dialog from './Dialog'

<Dialog
  open={true}
  type="Card"
  heading="Confirm action"
  body="Are you sure you want to continue?"
  onPrimary={() => {}}
  onDismiss={() => {}}
/>
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| open | boolean | true | — |
| type | string | 'Card' | Card, Sheet |
| heading | string | 'Text Heading' | — |
| body | string | 'Body text' | — |
| dismissible | boolean | true | — |
| primaryLabel | string | 'Confirm' | — |
| secondaryLabel | string | 'Cancel' | — |
| onPrimary | function | — | — |
| onDismiss | function | — | — |
