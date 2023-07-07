import { StateSchema } from '@/app/providers/storeProvider'

export const getCreateGameError = (state: StateSchema) =>
	state?.createGame?.error
