import React from 'react'
import Card from './Card'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    heading: { control: 'text' },
    body: { control: 'text' },
    variant: { control: 'select', options: ['stroke', 'default'] },
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
    assetType: { control: 'select', options: ['icon', 'image'] },
    showAsset: { control: 'boolean' },
    showButtons: { control: 'boolean' },
    primaryLabel: { control: 'text' },
    secondaryLabel: { control: 'text' },
  }
}

export const StrokeHorizontalIcon = { args: { variant: 'stroke', direction: 'horizontal', assetType: 'icon' } }
export const DefaultHorizontalIcon = { args: { variant: 'default', direction: 'horizontal', assetType: 'icon' } }
export const StrokeVerticalIcon = { args: { variant: 'stroke', direction: 'vertical', assetType: 'icon' } }
export const DefaultVerticalIcon = { args: { variant: 'default', direction: 'vertical', assetType: 'icon' } }
export const StrokeHorizontalImage = { args: { variant: 'stroke', direction: 'horizontal', assetType: 'image' } }
export const StrokeVerticalImage = { args: { variant: 'stroke', direction: 'vertical', assetType: 'image' } }
export const NoAsset = { args: { variant: 'stroke', direction: 'horizontal', showAsset: false } }
export const NoButtons = { args: { variant: 'stroke', direction: 'horizontal', showButtons: false } }
