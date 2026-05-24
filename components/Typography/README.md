# Typography

Text primitives, heading scale, price display, and list components.

## Usage

```jsx
import TextBody, {
  TextStrong, TextEmphasis, TextLink, TextSmall, TextLabel, TextCaption,
  TextHeading, TextTitle, TextPrice, TextList, TextLinkList
} from './Typography'

<TextHeading heading="Patient Record" subheading="Last updated today" />
<TextPrice currency="$" price="99" label="/ mo" size="Large" />
<TextList items={['Item one', 'Item two', 'Item three']} hasTitle title="Summary" />
```

## Components

| Component | Size | Weight | Use |
|-----------|------|--------|-----|
| TextBody | 16px | 400 | Default body copy |
| TextStrong | 16px | 500 | Emphasis in body |
| TextEmphasis | 16px | 400 italic | Italic body |
| TextLink | 16px | 400 underline | Inline links |
| TextSmall | 14px | 400 | Secondary text |
| TextLabel | 12px | 500 | Form labels |
| TextCaption | 11px | 400 | Captions |
| TextHeading | 24px | 550 | Section headings |
| TextTitle | 72px | 500 | Hero titles |
| TextPrice | 48/24px | 600 | Pricing display |
