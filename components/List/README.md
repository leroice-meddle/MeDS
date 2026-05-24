# List

iOS-style list rows with configurable trailing content.

## Usage

```jsx
import List from './List'

<List rows={[
  { title: 'Notifications', subtitle: 'Manage alerts', trailingType: 'Toggle', trailingContent: true },
  { title: 'Date', subtitle: 'Select date', trailingType: 'Picker - Date' },
  { title: 'Details', subtitle: 'View more', trailingType: 'Disclosure', trailingContent: 'Detail' },
]} />
```

## Trailing Types

| Value | Renders |
|-------|---------|
| Default | Detail text + chevron |
| Disclosure | Detail + chevron |
| Toggle | Switch |
| Picker - Date | Date pill |
| Picker - Time | Time pill |
| Picker - Date and Time | Date + time pills |
| Stepper | − + control |
| Button | Text button |
| Pop-Up | Label + more icon |
