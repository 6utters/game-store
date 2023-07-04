import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Toolbar } from './Toolbar'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'widgets/Toolbar',
	component: Toolbar,
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Toolbar>

const Template: ComponentStory<typeof Toolbar> = args => <Toolbar {...args} />

export const WithoutGamesInCart = Template.bind({})
WithoutGamesInCart.args = {}

export const WithSeveralGamesInCart = Template.bind({})
WithSeveralGamesInCart.decorators = [
	StoreDecorator({
		cart: {
			games: [
				{
					id: 1,
					gameId: 1,
				},
				{
					id: 2,
					gameId: 2,
				},
			],
		},
	}),
]
