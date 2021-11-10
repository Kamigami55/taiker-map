import Navigation from './Navigation'

const Template = (args) => <Navigation {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'molecules/Navigation',
  component: Navigation,
}
