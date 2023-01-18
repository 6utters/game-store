import { ICartState } from '@/store/reducers/cartReducer/CartSlice'
import { IGameState } from '@/store/reducers/gameReducer/GameSlice'
import { api } from '@/store/api/api'
import { UserSchema } from '@/entities/User'
import { AxiosInstance } from 'axios'
import { AuthByEmailSchema } from '@/features/authByEmail'

export interface StateSchema {
	user: UserSchema
	authByEmail: AuthByEmailSchema
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
