import { ComponentMeta, ComponentStory } from '@storybook/react'
import GenresPanel from './GenresPanel'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'widgets/GenresPanel',
	component: GenresPanel,
	args: {
		genres: [
			{ genreName: 'test genre 1', id: 1 },
			{ genreName: 'test genre 2', id: 2 },
		],
	},
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof GenresPanel>

const Template: ComponentStory<typeof GenresPanel> = args => (
	<GenresPanel {...args} />
)

export const FirstSelected = Template.bind({})
FirstSelected.args = {
	selectedGenres: [{ genreName: 'test genre 1', id: 1 }],
}

export const SecondSelected = Template.bind({})
SecondSelected.args = {
	selectedGenres: [{ genreName: 'test genre 2', id: 2 }],
}
