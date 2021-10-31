import ExportButton from './ExportButton'

const Template = (args) => <ExportButton {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'atoms/ExportButton',
  component: ExportButton,
}
