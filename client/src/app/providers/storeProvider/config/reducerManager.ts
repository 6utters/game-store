import { combineReducers, ReducersMapObject } from '@reduxjs/toolkit'
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema'

export function createReducerManager(
	initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
	const reducers = { ...initialReducers }

	let combinedReducer = combineReducers(reducers)
	let keysToRemove: Array<StateSchemaKey> = []

	return {
		getReducerMap: () => reducers,
		reduce: (state, action) => {
			if (keysToRemove.length > 0) {
				state = { ...state }

				keysToRemove.forEach(key => {
					delete state[key]
				})
			}

			return combinedReducer(state, action)
		},
		add: (key, reducer) => {
			if (!key || reducers[key]) {
				return
			}

			reducers[key] = reducer
			combinedReducer = combineReducers(reducers)
		},
		remove: key => {
			if (!key || !reducers[key]) {
				return
			}

			delete reducers[key]

			keysToRemove.push(key)

			combinedReducer = combineReducers(reducers)
		},
	}
}
