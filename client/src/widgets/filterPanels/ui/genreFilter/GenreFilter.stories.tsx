import { ComponentMeta, ComponentStory } from '@storybook/react'
import GenreFilter from './GenreFilter'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'widgets/GenreFilter',
	component: GenreFilter,
	args: {
		genres: [
			{ genreName: 'test genre 1', id: 1 },
			{ genreName: 'test genre 2', id: 2 },
		],
		selectedGenres: [{ genreName: 'test genre 1', id: 1 }],
	},
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof GenreFilter>

const Template: ComponentStory<typeof GenreFilter> = args => (
	<GenreFilter {...args} />
)

export const Ordinary = Template.bind({})
Ordinary.args = {}
