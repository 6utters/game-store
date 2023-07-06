import { StateSchema } from '@/app/providers/storeProvider'

export const getSelectedGenres = (state: StateSchema) =>
	state?.genresPanel?.selectedGenres ?? []
