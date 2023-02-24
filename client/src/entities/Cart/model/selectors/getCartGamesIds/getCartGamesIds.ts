import { createSelector } from 'reselect'
import { getCartGames } from '../getCartGames/getCartGames'

export const getCartGamesIds = createSelector(getCartGames, cartGames =>
	cartGames?.filter(Boolean).map(cartGame => cartGame.gameId),
)
