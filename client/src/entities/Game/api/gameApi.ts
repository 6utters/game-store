import { $rtkApi } from '@/shared/api'

const gameApi = $rtkApi.injectEndpoints({
	endpoints: build => ({
		deleteGame: build.mutation<void, number>({
			query: id => ({
				url: `games/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [{ type: 'Game' }],
		}),
	}),
})

export const useDeleteGame = gameApi.useDeleteGameMutation
