import SizeControl from './SizeControl'

const Template = (args) => <SizeControl {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'atoms/SizeControl',
  component: SizeControl,
}
