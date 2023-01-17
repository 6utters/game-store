import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import GameService from '../../src/services/game.service'
import { IGame } from '../../src/models/IGame'
import Layout from '../../src/components/layout/Layout.'
import GamePage from '../../src/components/pages/gamePage/GamePage'

const Game: NextPage<{ game: IGame }> = (props) => {
	return (
		<Layout
			title={`D&D Games | ${props.game.gameName}`}
			showHeader={true}
			showFooter={true}
		>
			<GamePage />
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const games = await GameService.fetchGames().then((data) => data)
		const paths = games.map((game) => ({
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
		const game = await GameService.fetchOneGame(gameId).then(
			({ data }) => data || ({} as IGame),
		)
		return {
			props: {
				game,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				game: {} as IGame,
			},
		}
	}
}
export default Game
