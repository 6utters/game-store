import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { GameList } from './GameList'

export default {
	title: 'shared/GameList',
	component: GameList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof GameList>

const Template: ComponentStory<typeof GameList> = args => <GameList {...args} />

export const Primary = Template.bind({})
Primary.args = {}
