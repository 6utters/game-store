import { ComponentMeta, ComponentStory } from '@storybook/react'
import { default as UserMenu } from './UserMenu'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'widgets/UserMenu',
	component: UserMenu,
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof UserMenu>

const Template: ComponentStory<typeof UserMenu> = args => <UserMenu {...args} />

export const UnAuthorized = Template.bind({})
UnAuthorized.args = {}

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
