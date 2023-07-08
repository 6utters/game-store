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
		gameId: 1,
		fstP: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		ftsP: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		mainInfo:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		sndP: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		thdP: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		thsP: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
