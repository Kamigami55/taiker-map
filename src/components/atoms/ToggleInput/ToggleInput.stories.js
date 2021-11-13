import ToggleInput from './ToggleInput'

const Template = (args) => <ToggleInput {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'atoms/ToggleInput',
  component: ToggleInput,
}
