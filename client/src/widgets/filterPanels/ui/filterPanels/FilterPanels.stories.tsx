import { ComponentMeta, ComponentStory } from '@storybook/react'
import FilterPanels from './FilterPanels'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'widgets/FilterPanels',
	component: FilterPanels,
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
} as ComponentMeta<typeof FilterPanels>

const Template: ComponentStory<typeof FilterPanels> = args => (
	<FilterPanels {...args} />
)

export const Ordinary = Template.bind({})
Ordinary.args = {}
