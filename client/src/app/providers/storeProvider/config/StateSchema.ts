import { AuthSchema } from '@/store/auth/auth.interface'
import { ICartState } from '@/store/reducers/cartReducer/CartSlice'
import { IGameState } from '@/store/reducers/gameReducer/GameSlice'
import { api } from '@/store/api/api'
import { UserSchema } from '@/entities/User'

export interface StateSchema {
	user: UserSchema
	auth: AuthSchema
	cart: ICartState
	game: IGameState
	[api.reducerPath]: ReturnType<typeof api.reducer>
}
