import { ComponentMeta, ComponentStory } from '@storybook/react'
import StorePage from './StorePage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'pages/StorePage',
	component: StorePage,
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof StorePage>

const Template: ComponentStory<typeof StorePage> = args => (
	<StorePage {...args} />
)

export const Ordinary = Template.bind({})
Ordinary.args = {}
