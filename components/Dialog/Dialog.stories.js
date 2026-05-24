import React from 'react'
import Dialog from './Dialog'

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    heading: { control: 'text' },
    body: { control: 'text' },
    dismissible: { control: 'boolean' },
  }
}

export const Default = { args: { heading: 'Confirm Action', body: 'Are you sure you want to proceed? This action cannot be undone.', primaryAction: { label: 'Confirm' }, secondaryAction: { label: 'Cancel' } } }
export const NoDismiss = { args: { heading: 'Required Action', body: 'You must complete this step to continue.', dismissible: false, primaryAction: { label: 'Continue' } } }
export const Simple = { args: { heading: 'Information', body: 'Here is some important information for you to read.', dismissible: true } }
