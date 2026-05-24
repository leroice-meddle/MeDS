# Card

Content container with heading, body, optional asset and buttons.

## Usage

```jsx
import Card from './Card'

<Card heading="Title" body="Body text." variant="stroke" direction="horizontal" />
<Card heading="Title" body="Body text." variant="stroke" direction="vertical" assetType="image" />
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| heading | string | 'Title' | — |
| body | string | — | — |
| variant | string | 'stroke' | stroke, flat |
| direction | string | 'horizontal' | horizontal, vertical |
| assetType | string | 'icon' | icon, image |
| showAsset | boolean | true | — |
| showButtons | boolean | true | — |
| primaryLabel | string | 'Button' | — |
| secondaryLabel | string | 'Button' | — |
