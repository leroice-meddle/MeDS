import BrandTest from './BrandTest'

export default {
  title: 'Meddle DS/BrandTest',
  component: BrandTest,
  argTypes: { text: { control: 'text' } },
}

export const Default = { args: { text: 'Brand Text Test' } }

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 24 }}>
      <BrandTest text='Brand Text Test' />
      <BrandTest text='Shorter' />
    </div>
  ),
}
