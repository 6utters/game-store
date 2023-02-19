import { $rtkApi } from '@/shared/api'
import { GameSchema } from '@/entities/Game'

export const gameApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		createGame: build.mutation<GameSchema, any>({
			query: body => ({
				url: `/games`,
				method: 'POST',
				body,
			}),
			// transformResponse: (response: { data: GameSchema }) => response.data,
			// transformErrorResponse: (
			// 	response: { status: string | number },
			// 	meta,
			// 	arg,
			// ) => response.status,
			invalidatesTags: () => [{ type: 'Game' }],
		}),
		deleteGame: build.mutation<void, number>({
			query: id => ({
				url: `games/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [{ type: 'Game' }],
		}),
	}),
})

export const {
	useCreateGameMutation: useCreateGame,
	useDeleteGameMutation: useDeleteGame,
} = gameApi
