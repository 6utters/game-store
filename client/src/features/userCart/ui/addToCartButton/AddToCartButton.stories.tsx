import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AddToCartButton } from './AddToCartButton'
import { GameSchema } from '@/entities/Game'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'features/AddToCartButton',
	component: AddToCartButton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AddToCartButton>

const Template: ComponentStory<typeof AddToCartButton> = args => (
	<AddToCartButton {...args} />
)

export const WithoutGameInCard = Template.bind({})
WithoutGameInCard.args = {
	game: {
		id: 1,
	} as GameSchema,
}
WithoutGameInCard.decorators = [StoreDecorator({})]

export const WithGameInCard = Template.bind({})
WithGameInCard.args = {
	game: {
		id: 1,
	} as GameSchema,
}
WithGameInCard.decorators = [
	StoreDecorator({
		cart: {
			games: [{ gameId: 1, id: 1, cartId: 1 }],
		},
	}),
]
