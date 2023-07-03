import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Skeleton } from './Skeleton'

export default {
	title: 'shared/Skeleton',
	component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = args => <Skeleton {...args} />

export const Normal = Template.bind({})
Normal.args = {}
