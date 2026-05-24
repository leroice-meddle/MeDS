import React, { useState } from 'react'

const f = { fontFamily: 'Geist, sans-serif', margin: 0 }

export function PaginationPage({ number = '1', state = 'Default', onClick }) {
  const [hovered, setHovered] = useState(false)
  const isCurrent = state === 'Current'
  const bg = isCurrent ? (hovered ? '#001b1f' : '#005e70') : hovered ? '#f5f5f5' : 'transparent'
  const color = isCurrent ? '#f0f7f8' : '#1e1e1e'
  return (
    <div onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 12px', borderRadius: 8, background: bg, cursor: 'pointer', transition: 'background 0.1s', minWidth: 36, boxSizing: 'border-box' }}>
      <p style={{ ...f, fontSize: 16, fontWeight: 400, lineHeight: 1, color, whiteSpace: 'nowrap' }}>{number}</p>
    </div>
  )
}

export function PaginationGap() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 16px' }}>
      <p style={{ ...f, fontSize: 16, fontWeight: 600, lineHeight: 1.4, color: '#1e1e1e' }}>...</p>
    </div>
  )
}

export function PaginationPrevious({ state = 'Default', onClick }) {
  const [hovered, setHovered] = useState(false)
  const isDisabled = state === 'Disabled'
  return (
    <div onClick={isDisabled ? undefined : onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '8px 12px', borderRadius: 8, background: hovered && !isDisabled ? '#f5f5f5' : 'transparent', cursor: isDisabled ? 'not-allowed' : 'pointer', opacity: isDisabled ? 0.5 : 1, transition: 'background 0.1s' }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <p style={{ ...f, fontSize: 16, fontWeight: 400, lineHeight: 1, color: isDisabled ? '#757575' : '#1e1e1e', whiteSpace: 'nowrap' }}>Previous</p>
    </div>
  )
}

export function PaginationNext({ state = 'Default', onClick }) {
  const [hovered, setHovered] = useState(false)
  const isDisabled = state === 'Disabled'
  return (
    <div onClick={isDisabled ? undefined : onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '8px 12px', borderRadius: 8, background: hovered && !isDisabled ? '#f5f5f5' : 'transparent', cursor: isDisabled ? 'not-allowed' : 'pointer', opacity: isDisabled ? 0.5 : 1, transition: 'background 0.1s' }}>
      <p style={{ ...f, fontSize: 16, fontWeight: 400, lineHeight: 1, color: isDisabled ? '#757575' : '#1e1e1e', whiteSpace: 'nowrap' }}>Next</p>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#1e1e1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
  )
}

export function PaginationList({ pages = [], currentPage = 1, onPageChange }) {
  const displayPages = pages.length ? pages : [1, 2, 3, null, 67, 68]
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {displayPages.map((p, i) =>
        p === null
          ? <PaginationGap key={'gap' + i} />
          : <PaginationPage key={p} number={String(p)} state={p === currentPage ? 'Current' : 'Default'} onClick={() => onPageChange?.(p)} />
      )}
    </div>
  )
}

function Pagination({ totalPages = 68, initialPage = 1 }) {
  const [current, setCurrent] = useState(initialPage)
  const getPages = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
    if (current <= 3) return [1, 2, 3, null, totalPages - 1, totalPages]
    if (current >= totalPages - 2) return [1, 2, null, totalPages - 2, totalPages - 1, totalPages]
    return [1, null, current - 1, current, current + 1, null, totalPages]
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <PaginationPrevious state={current === 1 ? 'Disabled' : 'Default'} onClick={() => setCurrent(p => Math.max(1, p - 1))} />
      <PaginationList pages={getPages()} currentPage={current} onPageChange={setCurrent} />
      <PaginationNext state={current === totalPages ? 'Disabled' : 'Default'} onClick={() => setCurrent(p => Math.min(totalPages, p + 1))} />
    </div>
  )
}

export default Pagination