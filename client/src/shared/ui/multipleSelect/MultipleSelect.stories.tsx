import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MultipleSelect } from './MultipleSelect'

export default {
	title: 'shared/MultipleSelect',
	component: MultipleSelect,
	args: {
		placeHolder: 'Choose something',
		options: [
			{ value: 'option1', label: 'option1' },
			{ value: 'option2', label: 'option2' },
			{ value: 'option3', label: 'option3' },
		],
		currentOptions: ['option1'],
	},
} as ComponentMeta<typeof MultipleSelect>

const Template: ComponentStory<typeof MultipleSelect> = args => (
	<MultipleSelect {...args} />
)

export const Ordinary = Template.bind({})
Ordinary.args = {}
