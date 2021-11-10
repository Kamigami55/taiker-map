import EditorPageTemplate from './EditorPageTemplate'

const Template = (args) => <EditorPageTemplate {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'templates/EditorPageTemplate',
  component: EditorPageTemplate,
}
