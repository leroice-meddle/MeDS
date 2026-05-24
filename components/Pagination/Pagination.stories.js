import React from 'react'
import Pagination, { PaginationPage, PaginationPrevious, PaginationNext, PaginationList, PaginationGap } from './Pagination'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    totalPages:  { control: 'number' },
    initialPage: { control: 'number' },
  },
}

export const Default    = { args: { totalPages: 68, initialPage: 1 } }
export const MiddlePage = { args: { totalPages: 68, initialPage: 34 } }
export const LastPage   = { args: { totalPages: 68, initialPage: 68 } }

export const PageStates = {
  name: 'Page States',
  render: () => (
    <div style={{ display: 'flex', gap: 8, padding: 24, alignItems: 'center' }}>
      <PaginationPage number="1" state="Default" />
      <PaginationPage number="2" state="Current" />
      <PaginationGap />
    </div>
  ),
}

export const PrevNextStates = {
  name: 'Previous / Next States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 24 }}>
      <PaginationPrevious state="Default" />
      <PaginationPrevious state="Disabled" />
      <PaginationNext state="Default" />
      <PaginationNext state="Disabled" />
    </div>
  ),
}