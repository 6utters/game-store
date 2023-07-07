import { $rtkApi } from '@/shared/api'
import { GameAbout, GameInfo, GameSchema } from '@/entities/Game'

interface AddMediaArgs {
	media: any
	gameId: number
	type: string
	folder: string
}

export const createGameApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		createGame: build.mutation<GameSchema, any>({
			query: body => ({
				url: `/games`,
				method: 'POST',
				body,
			}),
			invalidatesTags: () => [{ type: 'Game' }],
		}),
		addInfo: build.mutation<void, GameInfo>({
			query: body => ({
				url: `/games-info`,
				method: 'POST',
				body,
			}),
		}),
		addAboutInfo: build.mutation<void, GameAbout>({
			query: body => ({
				url: `/games-about`,
				method: 'POST',
				body,
			}),
		}),
		addMedia: build.mutation<void, AddMediaArgs>({
			query: ({ media, gameId, type, folder }) => ({
				url: `/games/media?folder=${folder}&gameId=${gameId}&type=${type}`,
				method: 'POST',
				body: media,
			}),
		}),
	}),
})

export const createGameMutation = createGameApi.endpoints.createGame.initiate
export const addInfoMutation = createGameApi.endpoints.addInfo.initiate
export const addAboutInfoMutation =
	createGameApi.endpoints.addAboutInfo.initiate
export const addMediaMutation = createGameApi.endpoints.addMedia.initiate
