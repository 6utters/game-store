import { AuthSchema } from '@/store/auth/auth.interface'
import { ICartState } from '@/store/reducers/cartReducer/CartSlice'
import { IGameState } from '@/store/reducers/gameReducer/GameSlice'
import { api } from '@/store/api/api'
import { UserSchema } from '@/entities/User'
import { AxiosInstance } from 'axios'

export interface StateSchema {
	user: UserSchema
	auth: AuthSchema
	cart: ICartState
	game: IGameState
	[api.reducerPath]: ReturnType<typeof api.reducer>
}

export interface ThunkExtraArgs {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArgs
	state: StateSchema
}
