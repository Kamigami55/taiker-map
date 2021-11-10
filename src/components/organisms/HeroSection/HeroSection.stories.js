import HeroSection from './HeroSection'

const Template = (args) => <HeroSection {...args} />

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'organisms/HeroSection',
  component: HeroSection,
}
