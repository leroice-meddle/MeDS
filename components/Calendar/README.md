# Calendar

Date picker with month/year navigation and range support.

## Usage

```jsx
import Calendar from './Calendar'

<Calendar />
<Calendar selectedDate={new Date()} onDateChange={(date) => console.log(date)} />
```

## Props

| Prop | Type | Default | Options |
|------|------|---------|---------|
| selectedDate | Date | — | — |
| onDateChange | function | — | — |
