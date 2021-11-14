import AboutPageTemplate from './AboutPageTemplate'

const Template = (args) => <AboutPageTemplate {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'templates/AboutPageTemplate',
  component: AboutPageTemplate,
}
