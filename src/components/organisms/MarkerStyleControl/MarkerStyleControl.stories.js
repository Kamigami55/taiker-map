import MarkerStyleControl from './MarkerStyleControl'

const Template = (args) => <MarkerStyleControl {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'organisms/MarkerStyleControl',
  component: MarkerStyleControl,
}
