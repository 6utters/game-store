import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Footer } from './Footer'

export default {
	title: 'shared/Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />

export const Ordinary = Template.bind({})
Ordinary.args = {}
