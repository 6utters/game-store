import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Toolbar } from './Toolbar'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { QueryDecorator } from '@/shared/config/storybook/QueryDecorator'

export default {
	title: 'widgets/Toolbar',
	component: Toolbar,
	decorators: [StoreDecorator({}), QueryDecorator()],
} as ComponentMeta<typeof Toolbar>

const Template: ComponentStory<typeof Toolbar> = args => <Toolbar {...args} />

export const Ordinary = Template.bind({})
Ordinary.args = {}
