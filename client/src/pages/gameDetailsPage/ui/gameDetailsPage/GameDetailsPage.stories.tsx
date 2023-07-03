import { ComponentMeta, ComponentStory } from '@storybook/react'
import GameDetailsPage from './GameDetailsPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { QueryDecorator } from '@/shared/config/storybook/QueryDecorator'

export default {
	title: 'pages/GameDetailsPage',
	component: GameDetailsPage,
	decorators: [StoreDecorator(), QueryDecorator()],
	args: {
		game: {
			id: 1,
			gameName: 'test game',
			gamePrice: 100,
			gameRating: 5,
			gameImage: '',
			gameAbout: {
				gameId: 1,
				fstP: 'test',
				ftsP: 'test',
				mainInfo: 'test',
				sndP: 'test',
				thdP: 'test',
				thsP: 'test',
			},
			gameMedia: [{ id: 2, url: '', type: 'image' }],
			features: [{ id: 1, featureName: 'test feature' }],
			genres: [{ id: 1, genreName: 'test genre' }],
			gameInfo: {
				gameId: 1,
				releaseDate: 'date',
				storage: 'test storage',
				publisher: 'test publisher',
				memory: 'test memory',
				graphics: 'test',
				developer: 'test developer',
				processor: 'test processor',
				os: 'test OS',
			},
		},
	},
} as ComponentMeta<typeof GameDetailsPage>

const Template: ComponentStory<typeof GameDetailsPage> = args => (
	<GameDetailsPage {...args} />
)

export const Ordinary = Template.bind({})
Ordinary.args = {}
