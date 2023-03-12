import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { UserMenuTrigger } from '@/widgets/navbar/ui/userMenu/userMenuTrigger/UserMenuTrigger'

export default {
	title: 'shared/Dropdown',
	component: Dropdown,
	args: {
		trigger: <UserMenuTrigger userName={'test'} />,
		children: <button>test</button>,
		optionNumber: 1,
		triggerHeight: 1.2,
	},
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />

export const Ordinary = Template.bind({})
Ordinary.args = {}
