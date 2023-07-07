import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { GenreList } from './GenreList'

export default {
	title: 'shared/GenreList',
	component: GenreList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof GenreList>

const Template: ComponentStory<typeof GenreList> = args => (
	<GenreList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
