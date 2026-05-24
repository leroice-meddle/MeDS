import TypePrimitives from './TypePrimitives'

export default {
  title: 'Meddle DS/TypePrimitives',
  component: TypePrimitives,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'title-hero', 'title-page', 'subtitle',
        'heading', 'subheading',
        'body-base', 'body-strong', 'body-emphasis', 'body-link',
        'body-small', 'body-small-strong',
        'input', 'body-code',
      ],
    },
  },
}

export const Default = { args: { variant: 'body-base', children: 'The quick brown fox' } }

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 32 }}>
      <TypePrimitives variant='title-hero'>Title Hero</TypePrimitives>
      <TypePrimitives variant='title-page'>Title Page</TypePrimitives>
      <TypePrimitives variant='subtitle'>Subtitle</TypePrimitives>
      <TypePrimitives variant='heading'>Heading</TypePrimitives>
      <TypePrimitives variant='subheading'>Subheading</TypePrimitives>
      <TypePrimitives variant='body-base'>Body Base</TypePrimitives>
      <TypePrimitives variant='body-strong'>Body Strong</TypePrimitives>
      <TypePrimitives variant='body-emphasis'>Body Emphasis</TypePrimitives>
      <TypePrimitives variant='body-link'>Body Link</TypePrimitives>
      <TypePrimitives variant='body-small'>Body Small</TypePrimitives>
      <TypePrimitives variant='body-small-strong'>Body Small Strong</TypePrimitives>
      <TypePrimitives variant='input'>Input</TypePrimitives>
      <TypePrimitives variant='body-code'>Body Code</TypePrimitives>
    </div>
  ),
}
