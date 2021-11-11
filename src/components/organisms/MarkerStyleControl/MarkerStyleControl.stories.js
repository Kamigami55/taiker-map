import MarkerStyleControl from './MarkerStyleControl'

const Template = (args) => <MarkerStyleControl {...args} />

export const Default = Template.bind({})
Default.args = {
  aProp: 'placeholder',
}

export default {
  title: 'organisms/MarkerStyleControl',
  component: MarkerStyleControl,
}
