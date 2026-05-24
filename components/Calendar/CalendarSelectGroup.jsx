import React from 'react'
import CalendarMonthField from './CalendarMonthField'
import CalendarYearField from './CalendarYearField'

function CalendarSelectGroup({ month, year, onMonthChange, onYearChange }) {
  return (
    <div style={{ display: 'flex', gap: 8, flex: 1 }}>
      <CalendarMonthField value={month} onChange={onMonthChange} />
      <CalendarYearField value={year} onChange={onYearChange} />
    </div>
  )
}

export default CalendarSelectGroup
