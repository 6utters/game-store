import { AppDispatch } from '../../store'
import GameService from '../../../services/game.service'
import {
	removeFeature,
	removeGame,
	removeGenre,
	setFeatures,
	setGenres,
} from './GameSlice'

export const createGenre =
	(genreName: string) => async (dispatch: AppDispatch) => {
		try {
			await GameService.createGenre(genreName)
			GameService.fetchGenres().then((data) => dispatch(setGenres(data)))
		} catch (e) {
			console.log(e)
		}
	}

export const deleteGame = (gameId: number) => async (dispatch: AppDispatch) => {
	try {
		await GameService.deleteGame(gameId)
		dispatch(removeGame(gameId))
	} catch (e) {
		console.log(e)
	}
}

export const deleteGenre =
	(genreId: number) => async (dispatch: AppDispatch) => {
		try {
			await GameService.deleteGenre(genreId)
			dispatch(removeGenre(genreId))
		} catch (e) {
			console.log(e)
		}
	}

export const createFeature =
	(featureName: string) => async (dispatch: AppDispatch) => {
		try {
			await GameService.createFeature(featureName)
			GameService.fetchFeatures().then((data) => dispatch(setFeatures(data)))
		} catch (e) {
			console.log(e)
		}
	}

export const deleteFeature =
	(featureId: number) => async (dispatch: AppDispatch) => {
		try {
			await GameService.deleteFeature(featureId)
			dispatch(removeFeature(featureId))
		} catch (e) {
			console.log(e)
		}
	}
