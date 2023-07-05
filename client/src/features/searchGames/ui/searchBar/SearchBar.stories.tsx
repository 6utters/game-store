import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SearchBar } from './SearchBar'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { GameSchema } from '@/entities/Game'

const mockedGame: Partial<GameSchema> = {
	id: 1,
	gameName: 'Witcher 3 Wild Hunt',
}

export default {
	title: 'features/SearchBar',
	component: SearchBar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> = args => (
	<SearchBar {...args} />
)

export const WithoutValue = Template.bind({})
WithoutValue.args = {}

export const WithValue = Template.bind({})
WithValue.args = {
	initialValue: 'Witcher',
}
