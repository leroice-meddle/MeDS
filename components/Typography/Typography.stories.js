import React from 'react'
import TextBody, { TextStrong, TextEmphasis, TextLink, TextSmall, TextLabel, TextCaption, TextHeading, TextTitle, TextPrice, TextListItem, TextLinkListItem, TextList, TextLinkList } from './Typography'

export default {
  title: 'Meddle DS/Typography',
  component: TextBody,
}

export const BodyScale = {
  name: 'Body Scale',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 24 }}>
      <div><p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 4 }}>TextBody</p><TextBody text="The quick brown fox jumps over the lazy dog" /></div>
      <div><p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 4 }}>TextStrong</p><TextStrong text="The quick brown fox jumps over the lazy dog" /></div>
      <div><p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 4 }}>TextEmphasis</p><TextEmphasis text="The quick brown fox jumps over the lazy dog" /></div>
      <div><p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 4 }}>TextLink</p><TextLink text="The quick brown fox jumps over the lazy dog" /></div>
      <div><p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 4 }}>TextSmall</p><TextSmall text="The quick brown fox jumps over the lazy dog" /></div>
      <div><p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 4 }}>TextLabel</p><TextLabel text="The quick brown fox jumps over the lazy dog" /></div>
      <div><p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 4 }}>TextCaption</p><TextCaption text="The quick brown fox jumps over the lazy dog" /></div>
    </div>
  ),
}

export const HeadingScale = {
  name: 'Heading Scale',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24 }}>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 8 }}>TextHeading</p>
        <TextHeading heading="Heading" subheading="Subheading" />
      </div>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 8 }}>TextHeading (Center)</p>
        <TextHeading heading="Heading" subheading="Subheading" align="Center" />
      </div>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 8 }}>TextTitle</p>
        <TextTitle title="Title" subtitle="Subtitle" />
      </div>
    </div>
  ),
}

export const PriceScale = {
  name: 'Price',
  render: () => (
    <div style={{ display: 'flex', gap: 32, padding: 24, alignItems: 'flex-end' }}>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 8 }}>Large</p>
        <TextPrice currency="$" price="50" label="/ mo" size="Large" />
      </div>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 8 }}>Small</p>
        <TextPrice currency="$" price="50" label="/ mo" size="Small" />
      </div>
    </div>
  ),
}

export const Lists = {
  name: 'Text List',
  render: () => (
    <div style={{ display: 'flex', gap: 48, padding: 24, alignItems: 'flex-start' }}>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 8 }}>Default</p>
        <TextList items={['List item', 'List item', 'List item', 'List item']} hasTitle title="Title" />
      </div>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 8 }}>Tight</p>
        <TextList items={['List item', 'List item', 'List item', 'List item']} density="Tight" hasTitle title="Title" />
      </div>
    </div>
  ),
}

export const LinkLists = {
  name: 'Text Link List',
  render: () => (
    <div style={{ display: 'flex', gap: 48, padding: 24, alignItems: 'flex-start' }}>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 8 }}>Default</p>
        <TextLinkList items={['Link item', 'Link item', 'Link item', 'Link item']} hasTitle title="Title" />
      </div>
      <div>
        <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, color: '#757575', marginBottom: 8 }}>Tight</p>
        <TextLinkList items={['Link item', 'Link item', 'Link item', 'Link item']} density="Tight" hasTitle title="Title" />
      </div>
    </div>
  ),
}