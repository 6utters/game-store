import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AdminLayout } from './AdminLayout'

export default {
	title: 'widgets/AdminLayout',
	component: AdminLayout,
	args: {
		children: <div>Content</div>,
	},
} as ComponentMeta<typeof AdminLayout>

const Template: ComponentStory<typeof AdminLayout> = args => (
	<AdminLayout {...args} />
)

export const Ordinary = Template.bind({})
Ordinary.args = {}
