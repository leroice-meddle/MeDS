# Notification

Inline feedback banner. Message (neutral) or Alert (danger) variant.

## Usage

```jsx
import Notification from './Notification'

<Notification
  variant="Message"
  title="Update available"
  body="A new version is ready to install."
  hasButton
  buttonLabel="Install"
  dismissible
/>
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| variant | string | 'Message' | Message, Alert |
| title | string | 'Title' | — |
| body | string | 'Body text.' | — |
| hasIcon | boolean | true | — |
| hasButton | boolean | true | — |
| buttonLabel | string | 'Button' | — |
| dismissible | boolean | true | — |
