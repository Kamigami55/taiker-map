import ShowcaseSection from './ShowcaseSection'

const Template = (args) => <ShowcaseSection {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'organisms/ShowcaseSection',
  component: ShowcaseSection,
}
