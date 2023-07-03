import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { default as Input } from './Input'

export default {
	title: 'shared/Input',
	component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Ordinary = Template.bind({})
Ordinary.args = {
	placeholder: 'test',
	value: 'test',
}
