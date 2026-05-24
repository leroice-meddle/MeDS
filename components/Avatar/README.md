# Avatar

User avatar component. Image or initials, four sizes.

## Usage

```jsx
import Avatar from './Avatar'

<Avatar type="image" src="https://example.com/photo.jpg" alt="Jane Smith" size="large" />
<Avatar type="initials" initial="J" size="medium" />
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| type | string | 'image' | image, initials |
| src | string | — | URL |
| alt | string | 'User avatar' | — |
| initial | string | — | Single character |
| size | string | 'large' | small, medium, large, xlarge |
