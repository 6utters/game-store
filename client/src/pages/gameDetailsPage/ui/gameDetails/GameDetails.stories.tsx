import { ComponentMeta, ComponentStory } from '@storybook/react'
import { GameDetails } from './GameDetails'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

export default {
	title: 'pages/StorePage',
	component: GameDetails,
	decorators: [StoreDecorator()],
} as ComponentMeta<typeof GameDetails>

const Template: ComponentStory<typeof GameDetails> = args => (
	<GameDetails {...args} />
)

export const Ordinary = Template.bind({})
Ordinary.args = {}
