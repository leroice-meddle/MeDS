import React from 'react'
import Calendar from './Calendar'
import CalendarButton from './CalendarButton'
import CalendarMonthField from './CalendarMonthField'
import CalendarYearField from './CalendarYearField'

export default {
  title: 'Meddle DS/Calendar',
  component: Calendar,
}

export const Default = { args: {} }

export const WithSelection = {
  args: { selectedDate: new Date() }
}

export const AllButtonStates = {
  name: 'Calendar Button States',
  render: () => (
    <div style={{ display: 'flex', gap: 8, padding: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      {['Default', 'Hover', 'Active', 'Disabled', 'Range', 'Range Disabled'].map(state => (
        <div key={state} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <CalendarButton number="9" state={state} />
          <span style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575' }}>{state}</span>
        </div>
      ))}
    </div>
  )
}

export const MonthField = {
  name: 'Calendar Month Field',
  render: () => (
    <div style={{ padding: 24, width: 200 }}>
      <CalendarMonthField value="September" />
    </div>
  )
}

export const YearField = {
  name: 'Calendar Year Field',
  render: () => (
    <div style={{ padding: 24, width: 200 }}>
      <CalendarYearField value="2025" />
    </div>
  )
}