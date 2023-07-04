import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Navbar } from './Navbar'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />

export const Ordinary = Template.bind({})
Ordinary.args = {}
