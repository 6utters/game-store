import { ComponentMeta, ComponentStory } from '@storybook/react'
import { GameDetailsRequirements } from './GameDetailsRequirements'

export default {
	title: 'pages/GameDetailsRequirements',
	component: GameDetailsRequirements,
	args: {
		gameInfo: {
			gameId: 1,
			developer: 'test developer',
			graphics: 'test graphics',
			memory: 'test amount of memory',
			processor: 'test processor',
			os: 'test OS',
			publisher: 'test publisher',
			storage: 'test amount of GB',
			releaseDate: 'test date',
		},
	},
} as ComponentMeta<typeof GameDetailsRequirements>

const Template: ComponentStory<typeof GameDetailsRequirements> = args => (
	<GameDetailsRequirements {...args} />
)

export const Ordinary = Template.bind({})
Ordinary.args = {}
