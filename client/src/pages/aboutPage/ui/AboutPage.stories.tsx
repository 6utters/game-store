import { ComponentMeta, ComponentStory } from '@storybook/react'
import AboutPage from './AboutPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'pages/AboutPage',
	component: AboutPage,
	decorators: [StoreDecorator()],
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Ordinary = Template.bind({})
Ordinary.args = {}
