import MarkerCustom from './MarkerCustom'

const Template = (args) => <MarkerCustom {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'atoms/MarkerCustom',
  component: MarkerCustom,
}
