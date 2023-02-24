import { StateSchema } from '@/app/providers/storeProvider'

export const getSelectedGenres = (state: StateSchema) =>
	state?.fetchFilteredGameList?.selectedGenres || []