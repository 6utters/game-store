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
	},
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof GenreFilter>

const Template: ComponentStory<typeof GenreFilter> = args => (
	<GenreFilter {...args} />
)

export const FirstSelected = Template.bind({})
FirstSelected.args = {
	selectedGenres: [{ genreName: 'test genre 1', id: 1 }],
}

export const SecondSelected = Template.bind({})
SecondSelected.args = {
	selectedGenres: [{ genreName: 'test genre 2', id: 2 }],
}
