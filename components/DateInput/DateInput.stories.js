import React from 'react'
import DateInput from './DateInput'

export default {
  title: 'Components/Date Input',
  component: DateInput,
  argTypes: {
    state:     { control: 'select', options: ['Default', 'Error', 'Disabled'] },
    valueType: { control: 'select', options: ['Default', 'Placeholder'] },
    hasLabel:  { control: 'boolean' },
    hasError:  { control: 'boolean' },
  },
}

export const Default     = { args: { state: 'Default',  valueType: 'Default',     hasLabel: true, hasError: false } }
export const Placeholder = { args: { state: 'Default',  valueType: 'Placeholder', hasLabel: true, hasError: false } }
export const Error       = { args: { state: 'Error',    valueType: 'Default',     hasLabel: true, hasError: true  } }
export const Disabled    = { args: { state: 'Disabled', valueType: 'Default',     hasLabel: true                  } }

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', padding: 24 }}>
      {[
        { state: 'Default',  valueType: 'Default'     },
        { state: 'Default',  valueType: 'Placeholder' },
        { state: 'Error',    valueType: 'Default'     },
        { state: 'Error',    valueType: 'Placeholder' },
        { state: 'Disabled', valueType: 'Default'     },
        { state: 'Disabled', valueType: 'Placeholder' },
      ].map(({ state, valueType }) => (
        <div key={state + valueType} style={{ minWidth: 200 }}>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: '#757575', margin: '0 0 8px' }}>
            {state} / {valueType}
          </p>
          <DateInput state={state} valueType={valueType} hasLabel hasError={state === 'Error'} />
        </div>
      ))}
    </div>
  ),
}