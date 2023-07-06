import { StateSchema } from '@/app/providers/storeProvider'

export const getUserCartError = (state: StateSchema) => state.userCart?.error
