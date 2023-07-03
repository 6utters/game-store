import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Spinner } from './Spinner'

export default {
	title: 'shared/Spinner',
	component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = () => <Spinner />

export const Ordinary = Template.bind({})
Ordinary.args = {}
