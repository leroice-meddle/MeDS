# Sidebar

Vertical nav sidebar with logo, nav items, user profile and footer.

## Usage

```jsx
import Sidebar from './Sidebar'

<Sidebar
  items={['Dashboard', 'Patients', 'Appointments', 'Team', 'Settings']}
  userName="Jane Smith"
  userEmail="jane@clinic.com"
  footerItems={['Help & Support', 'Log Out']}
  onItemClick={(item) => navigate(item)}
/>
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| items | string[] | [...] | — |
| activeItem | string | first item | — |
| userName | string | 'Ariana Venti' | — |
| userEmail | string | — | — |
| footerItems | string[] | [...] | — |
| onItemClick | function | — | — |
