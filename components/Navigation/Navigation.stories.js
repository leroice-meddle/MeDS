import React, { useState } from 'react'
import { NavigationButton, NavigationButtonList, NavigationPill, NavigationPillList } from './Navigation'

export default {
  title: 'Meddle DS/Navigation',
  component: NavigationButtonList,
}

export const ButtonStates = {
  name: 'Navigation Button States',
  render: () => (
    <div style={{ display: 'flex', gap: 8, padding: 24, alignItems: 'center' }}>
      <NavigationButton label="Default" state="Default" />
      <NavigationButton label="Active"  state="Active" />
    </div>
  ),
}

export const ButtonListRow = {
  name: 'Navigation Button List — Row',
  render: () => {
    const [active, setActive] = useState(1)
    return (
      <div style={{ padding: 24 }}>
        <NavigationButtonList
          direction="Row"
          items={['Home', 'Search', 'Activity', 'Profile', 'More']}
          activeIndex={active}
          onItemClick={setActive}
        />
      </div>
    )
  },
}

export const ButtonListColumn = {
  name: 'Navigation Button List — Column',
  render: () => {
    const [active, setActive] = useState(1)
    return (
      <div style={{ padding: 24 }}>
        <NavigationButtonList
          direction="Column"
          items={['Home', 'Search', 'Activity', 'Profile', 'More']}
          activeIndex={active}
          onItemClick={setActive}
        />
      </div>
    )
  },
}

export const PillStates = {
  name: 'Navigation Pill States',
  render: () => (
    <div style={{ display: 'flex', gap: 8, padding: 24, alignItems: 'center' }}>
      <NavigationPill label="Default" state="Default" />
      <NavigationPill label="Hover"   state="Hover" />
      <NavigationPill label="Active"  state="Active" />
    </div>
  ),
}

export const PillListRow = {
  name: 'Navigation Pill List — Row',
  render: () => {
    const [active, setActive] = useState(0)
    return (
      <div style={{ padding: 24 }}>
        <NavigationPillList
          direction="Row"
          items={['Home', 'Explore', 'Activity', 'Messages', 'Profile', 'Settings', 'Help']}
          activeIndex={active}
          onItemClick={setActive}
        />
      </div>
    )
  },
}

export const PillListColumn = {
  name: 'Navigation Pill List — Column',
  render: () => {
    const [active, setActive] = useState(1)
    return (
      <div style={{ padding: 24 }}>
        <NavigationPillList
          direction="Column"
          items={['Home', 'Explore', 'Activity', 'Messages', 'Profile', 'Settings']}
          activeIndex={active}
          onItemClick={setActive}
        />
      </div>
    )
  },
}