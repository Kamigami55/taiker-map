import MapLockControl from './MapLockControl'

const Template = (args) => <MapLockControl {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'atoms/MapLockControl',
  component: MapLockControl,
}
