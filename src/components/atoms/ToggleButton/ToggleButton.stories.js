import ToggleButton from './ToggleButton'

const Template = (args) => <ToggleButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
}

export default {
  title: 'atoms/ToggleButton',
  component: ToggleButton,
}
