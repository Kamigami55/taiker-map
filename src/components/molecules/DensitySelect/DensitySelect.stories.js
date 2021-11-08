import DensitySelect from './DensitySelect'

const Template = (args) => <DensitySelect {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'molecules/DensitySelect',
  component: DensitySelect,
}
