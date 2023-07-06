import { StateSchema } from '@/app/providers/storeProvider'

export const getUserCartIsLoading = (state: StateSchema) => state.userCart?.isLoading ?? false
