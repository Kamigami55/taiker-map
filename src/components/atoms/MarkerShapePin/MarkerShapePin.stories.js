import MarkerShapePin from './MarkerShapePin'

const Template = (args) => <MarkerShapePin {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'atoms/MarkerShapePin',
  component: MarkerShapePin,
}
