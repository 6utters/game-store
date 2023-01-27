import { StateSchema } from '@/app/providers/storeProvider'

export const getCartGames = (state: StateSchema) => state.cart.games || []