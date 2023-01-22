import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { GameDetailsPage } from '@/pages/gameDetailsPage'

import { API_URL } from '@/shared/api'
import axios from 'axios'

import { GameSchema } from '@/entities/Game'

interface GameProps {
	game?: GameSchema
}

const GameDetails: NextPage<GameProps> = ({ game }) => {
	return <GameDetailsPage game={game} />
}

export default GameDetails

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const games = await axios
			.get<GameSchema[]>(`${API_URL}/games`)
			.then(response => response.data)
		const paths = games.map(game => ({
			params: {
				id: String(game.id),
			},
		}))
		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const gameId = String(params?.id)
		const game = await axios
			.get<GameSchema>(`${API_URL}/games/${gameId}`)
			.then(response => response.data)
		return {
			props: {
				game,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				game: {} as GameSchema,
			},
		}
	}
}
