import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ToggleList } from './ToggleList'

export default {
	title: 'shared/ToggleList',
	component: ToggleList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ToggleList>

const Template: ComponentStory<typeof ToggleList> = args => (
	<ToggleList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
