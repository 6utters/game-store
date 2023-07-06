import { ComponentMeta, ComponentStory } from '@storybook/react'
import Filters from './Filters'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'widgets/Filters',
	component: Filters,
	args: {
		genres: [
			{ genreName: 'test genre 1', id: 1 },
			{ genreName: 'test genre 2', id: 2 },
		],
		features: [
			{ featureName: 'test genre 1', id: 1 },
			{ featureName: 'test genre 2', id: 2 },
		],
	},
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Filters>

const Template: ComponentStory<typeof Filters> = args => <Filters {...args} />

export const Ordinary = Template.bind({})
Ordinary.args = {}
