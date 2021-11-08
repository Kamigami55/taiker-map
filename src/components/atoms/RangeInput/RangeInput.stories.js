import RangeInput from './RangeInput'

const Template = (args) => <RangeInput {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'atoms/RangeInput',
  component: RangeInput,
}
