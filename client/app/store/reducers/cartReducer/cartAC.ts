import { AppDispatch } from '../../store'
import CartService from '../../../services/cart.service'
import GameService from '../../../services/game.service'
import { removeGame, setCartGames } from './CartSlice'

export const fetchCartGames = () => async (dispatch: AppDispatch) => {
	try {
		const response = await CartService.fetchCart().then((data) => data.games)
		const gameIds = response.map((game: { gameId: number }) => game.gameId)
		let games = []
		for (let i = 0; i < gameIds.length; i++) {
			const game = await GameService.fetchOneGame(gameIds[i]).then(
				(data) => data.data,
			)
			games.push(game)
		}
		dispatch(setCartGames(games))
	} catch (e) {
		console.log(e)
	}
}

export const addGameToCart =
	(gameId: string) => async (dispatch: AppDispatch) => {
		try {
			await CartService.removeFromCart(gameId).then((data) => data)
			dispatch(removeGame(Number(gameId)))
		} catch (e) {
			console.log(e)
		}
	}
