import { ICartState } from '@/store/reducers/cartReducer/CartSlice'
import { IGameState } from '@/store/reducers/gameReducer/GameSlice'
import { api } from '@/store/api/api'
import { UserSchema } from '@/entities/User'
import { AxiosInstance } from 'axios'
import { AuthByEmailSchema } from '@/features/authByEmail'
import {
	AnyAction,
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit'

export interface StateSchema {
	user: UserSchema
	cart: ICartState
	game: IGameState
	[api.reducerPath]: ReturnType<typeof api.reducer>

	authByEmail?: AuthByEmailSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArgs
	state: StateSchema
}
