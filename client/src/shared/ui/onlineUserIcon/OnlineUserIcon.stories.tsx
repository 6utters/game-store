import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OnlineUserIcon } from './OnlineUserIcon'

export default {
	title: 'shared/OnlineUserIcon',
	component: OnlineUserIcon,
} as ComponentMeta<typeof OnlineUserIcon>

const Template: ComponentStory<typeof OnlineUserIcon> = args => (
	<OnlineUserIcon {...args} />
)

export const Ordinary = Template.bind({})
Ordinary.args = {}
