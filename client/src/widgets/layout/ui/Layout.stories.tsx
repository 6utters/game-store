import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Layout } from './Layout'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'widgets/Layout',
	component: Layout,
	args: {
		children: <div>Content</div>,
		title: 'Layout',
		withNavbar: true,
		withFooter: true,
	},
	decorators: [StoreDecorator()],
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = args => <Layout {...args} />

export const Ordinary = Template.bind({})
Ordinary.args = {}
