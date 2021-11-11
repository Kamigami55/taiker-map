import MarkerShapeCircle from './MarkerShapeCircle'

const Template = (args) => <MarkerShapeCircle {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'atoms/MarkerShapeCircle',
  component: MarkerShapeCircle,
}
