import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from './Logo'

export default {
	title: 'shared/Logo',
	component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />

export const Ordinary = Template.bind({})
Ordinary.args = {
	size: 45,
}

export const Large = Template.bind({})
Large.args = {
	size: 60,
	textSize: 1,
}

export const Small = Template.bind({})
Small.args = {
	size: 30,
	textSize: 0.5,
}
