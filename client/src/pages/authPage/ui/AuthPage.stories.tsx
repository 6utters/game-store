import { ComponentMeta, ComponentStory } from '@storybook/react'
import AuthPage from './AuthPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'pages/AuthPage',
	component: AuthPage,
	decorators: [StoreDecorator()],
} as ComponentMeta<typeof AuthPage>

const Template: ComponentStory<typeof AuthPage> = args => <AuthPage {...args} />

export const Ordinary = Template.bind({})
Ordinary.args = {}
