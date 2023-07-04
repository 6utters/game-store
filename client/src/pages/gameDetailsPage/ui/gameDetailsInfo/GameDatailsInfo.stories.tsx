import { ComponentMeta, ComponentStory } from '@storybook/react'
import { GameDetailsInfo } from './GameDetailsInfo'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { GameSchema } from '@/entities/Game'

const mockedGame: GameSchema = {
	id: 1,
	gameName: 'test game',
	gamePrice: 100,
	gameRating: 5,
	gameImage: '',
	gameAbout: {
		id: 1,
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
}

export default {
	title: 'pages/GameDetailsInfo',
	component: GameDetailsInfo,
	args: {
		game: mockedGame,
	},
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof GameDetailsInfo>

const Template: ComponentStory<typeof GameDetailsInfo> = args => (
	<GameDetailsInfo {...args} />
)

export const Ordinary = Template.bind({})
Ordinary.args = {}
