import Checkbox from './Checkbox'
import { CHECKBOX_STATUS } from './CheckboxStatus'

const Template = (args) => <Checkbox {...args} />

export const Unchecked = Template.bind({})
Unchecked.args = {
  status: CHECKBOX_STATUS.Unchecked,
}

export const Checked = Template.bind({})
Checked.args = {
  status: CHECKBOX_STATUS.Checked,
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  status: CHECKBOX_STATUS.Indeterminate,
}

export default {
  title: 'atoms/Checkbox',
  component: Checkbox,
}
