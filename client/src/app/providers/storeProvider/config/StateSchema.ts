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
import { $rtkApi } from '@/shared/api'
import { Cart } from '@/entities/Cart'
import { UserCartSchema } from '@/features/userCart'
import { FeaturesPanel } from '@/features/featuresPanel/model/types/FeaturesPanel'
import { GenresPanel } from '@/features/genresPanel/model/types/GenresPanel'
import { CreateGameSchema } from '@/features/createGame'

export interface StateSchema {
	user: UserSchema
	cart: Cart
	[$rtkApi.reducerPath]: ReturnType<typeof $rtkApi.reducer>

	authByEmail?: AuthByEmailSchema
	featuresPanel?: FeaturesPanel
	genresPanel?: GenresPanel
	userCart?: UserCartSchema
	createGame?: CreateGameSchema
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
