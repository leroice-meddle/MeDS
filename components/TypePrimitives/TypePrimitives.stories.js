import TypePrimitives, { AllStyles } from './TypePrimitives'

export default {
  title: 'Meddle DS/TypePrimitives',
  component: TypePrimitives,
  argTypes: {
    variant: {
      control: 'select',
      options: ['title-hero','title-page','subtitle','heading','subheading','body-base','body-strong','body-emphasis','body-link','body-small','body-small-strong','input','body-code'],
    },
  },
}

export const Default = { args: { variant: 'body-base', children: 'The quick brown fox jumps over the lazy dog' } }

export const AllVariants = {
  name: 'All Variants',
  render: () => <AllStyles />,
}