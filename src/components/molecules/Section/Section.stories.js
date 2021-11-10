import Section from './Section'

const Template = (args) => <Section {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'molecules/Section',
  component: Section,
}
