import React, { useEffect } from 'react'
import GamePage, {
	IGameProps,
} from '../../app/components/pages/gamePage/GamePage'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import GameService from '../../app/services/game.service'
import { IGame } from '../../app/models/IGame'
import Layout from '../../app/components/layout/Layout.'
import { fetchCartGames } from '../../app/store/reducers/cartReducer/cartAC'
import { useAppDispatch } from '../../app/hooks/redux'

const Game: NextPage<IGameProps> = (props) => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchCartGames())
	}, [])

	return (
		<Layout title={`D&D Games | ${props.game.gameName}`} showHeader={true}>
			<GamePage {...props.game} />
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
