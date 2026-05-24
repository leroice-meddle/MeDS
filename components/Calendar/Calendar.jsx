import React, { useState } from 'react'
import CalendarButton from './CalendarButton'
import CalendarSelectGroup from './CalendarSelectGroup'

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDay(year, month) {
  return new Date(year, month, 1).getDay()
}

function buildGrid(year, month) {
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDay(year, month)
  const daysInPrev = getDaysInMonth(year, month - 1)
  const cells = []

  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, overflow: true })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, overflow: false })
  }
  while (cells.length % 7 !== 0) {
    cells.push({ day: cells.length - daysInMonth - firstDay + 1, overflow: true })
  }

  const rows = []
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7))
  return rows
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.5 15l-5-5 5-5" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M7.5 5l5 5-5 5" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Calendar({ selectedDate, onDateChange }) {
  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())
  const [selected, setSelected] = useState(selectedDate || null)
  const [rangeStart, setRangeStart] = useState(null)
  const [rangeEnd, setRangeEnd] = useState(null)

  const grid = buildGrid(year, month)

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }

  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  const handleMonthChange = (m) => setMonth(MONTHS.indexOf(m))
  const handleYearChange = (y) => setYear(Number(y))

  const handleDayClick = (day) => {
    const date = new Date(year, month, day)
    setSelected(date)
    onDateChange?.(date)
  }

  const getState = (cell) => {
    if (cell.overflow) return 'Disabled'
    const date = new Date(year, month, cell.day)
    if (selected && date.toDateString() === selected.toDateString()) return 'Active'
    if (rangeStart && rangeEnd) {
      const start = rangeStart < rangeEnd ? rangeStart : rangeEnd
      const end = rangeStart < rangeEnd ? rangeEnd : rangeStart
      if (date > start && date < end) return 'Range'
    }
    return 'Default'
  }

  return (
    <div style={{
      background: 'white',
      border: '1px solid #e6e6e6',
      borderRadius: 12,
      padding: 16,
      display: 'inline-flex',
      flexDirection: 'column',
      width: 318,
      boxSizing: 'border-box',
      fontFamily: 'Geist, sans-serif',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <button onClick={prevMonth} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '9999px', border: 'none', background: 'transparent', cursor: 'pointer', padding: 8 }}>
          <ChevronLeft />
        </button>
        <CalendarSelectGroup
          month={MONTHS[month]}
          year={String(year)}
          onMonthChange={handleMonthChange}
          onYearChange={handleYearChange}
        />
        <button onClick={nextMonth} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '9999px', border: 'none', background: 'transparent', cursor: 'pointer', padding: 8 }}>
          <ChevronRight />
        </button>
      </div>

      {/* Day headers */}
      <div style={{ display: 'flex', gap: 1, marginBottom: 1 }}>
        {DAYS.map(d => (
          <div key={d} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 40, fontSize: 12, color: '#757575', fontFamily: 'Geist, sans-serif' }}>
            {d}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {grid.map((row, ri) => (
          <div key={ri} style={{ display: 'flex', gap: 1 }}>
            {row.map((cell, ci) => (
              <div key={ci} style={{ flex: 1 }} onClick={() => !cell.overflow && handleDayClick(cell.day)}>
                <CalendarButton
                  number={String(cell.day)}
                  state={getState(cell)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar