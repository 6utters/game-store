import { StateSchema } from '@/app/providers/storeProvider'

export const getCreateGameIsLoading = (state: StateSchema) =>
	state?.createGame?.isLoading ?? false
