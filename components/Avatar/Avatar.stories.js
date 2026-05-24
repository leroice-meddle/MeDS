import React from 'react'
import Avatar from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    type: { control: 'select', options: ['image', 'initials', 'default'] },
    size: { control: 'select', options: ['small', 'medium', 'large', 'xlarge'] },
    initial: { control: 'text' },
    src: { control: 'text' },
  }
}

export const Image = { args: { type: 'image', src: 'https://i.pravatar.cc/150?img=47', alt: 'User avatar', size: 'large' } }
export const Initials = { args: { type: 'initials', initial: 'L', size: 'large' } }
export const Small = { args: { type: 'initials', initial: 'A', size: 'small' } }
export const Medium = { args: { type: 'initials', initial: 'B', size: 'medium' } }
export const XLarge = { args: { type: 'image', src: 'https://i.pravatar.cc/150?img=47', size: 'xlarge' } }
