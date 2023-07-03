import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StarsRating } from './StarsRating'

export default {
	title: 'shared/StarsRating',
	component: StarsRating,
} as ComponentMeta<typeof StarsRating>

const Template: ComponentStory<typeof StarsRating> = args => (
	<StarsRating {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
