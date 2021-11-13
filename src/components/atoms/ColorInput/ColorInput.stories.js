import ColorInput from './ColorInput'

const Template = (args) => <ColorInput {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'atoms/ColorInput',
  component: ColorInput,
}
