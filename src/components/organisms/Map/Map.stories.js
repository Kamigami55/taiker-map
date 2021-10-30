import Map from './Map'

const Template = (args) => <Map {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'organisms/Map',
  component: Map,
}
