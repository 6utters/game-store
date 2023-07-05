import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Navbar } from './Navbar'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ABOUT_ROUTE } from '@/shared/consts'

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />

export const StorePageOpened = Template.bind({})
StorePageOpened.args = {}

export const AboutPageOpened = Template.bind({})
AboutPageOpened.parameters = {
	nextRouter: {
		asPath: ABOUT_ROUTE,
	},
}

export const Authorized = Template.bind({})
Authorized.decorators = [
	StoreDecorator({
		user: {
			authData: {
				userName: 'MockedUser',
				id: 1,
			},
		},
	}),
]
