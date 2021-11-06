import SpotsPanel from './SpotsPanel'

const Template = (args) => <SpotsPanel {...args} />

export const Default = Template.bind({})
Default.args = {
  aProp: 'placeholder',
}

export default {
  title: 'organisms/SpotsPanel',
  component: SpotsPanel,
}
