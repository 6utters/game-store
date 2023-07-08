import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/storeProvider'
import { GameArgs } from '../types/CreateGame'
import {
	createGameAboutInfoFD,
	createGameBaseFD,
	createGameInfoFD,
	createGameMediaFD,
} from '../lib/createGameFormdata'
import {
	addAboutInfoMutation,
	addInfoMutation,
	addMediaMutation,
	createGameMutation,
} from '../../api/createGameApi'

export interface CreateGameProps {
	gameData: GameArgs
	gameImage: File | null
	genres: string[]
	features: string[]
	videos: File[]
	images: File[]
}

export const createGame = createAsyncThunk<
	void,
	CreateGameProps,
	ThunkConfig<string>
>('articlesPage/fetchArticleList', async (gameProps, thunkAPI) => {
	const { rejectWithValue, dispatch } = thunkAPI
	const { gameData, gameImage, images, videos, features, genres } = gameProps

	const gameBase = createGameBaseFD(
		gameData.gameName,
		gameData.gamePrice,
		gameImage,
		genres,
		features,
	)
	const gameInfo = createGameInfoFD(gameData)
	const aboutInfo = createGameAboutInfoFD(gameData)
	const gameVideos = createGameMediaFD(videos)
	const gameImages = createGameMediaFD(images)

	try {
		const createdGameBase = await dispatch(
			createGameMutation(gameBase),
		).unwrap()
		if (!createdGameBase) {
			throw new Error()
		}
		await dispatch(
			addInfoMutation({ ...gameInfo, gameId: createdGameBase.id }),
		).unwrap()
		await dispatch(
			addAboutInfoMutation({ ...aboutInfo, gameId: createdGameBase.id }),
		).unwrap()
		await dispatch(
			addMediaMutation({
				gameId: createdGameBase.id,
				media: gameVideos,
				type: 'video',
				folder: 'videos',
			}),
		).unwrap()
		await dispatch(
			addMediaMutation({
				gameId: createdGameBase.id,
				media: gameImages,
				type: 'image',
				folder: 'images',
			}),
		).unwrap()
	} catch (e) {
		return rejectWithValue('error')
	}
})
