import { FC, ReactNode, useEffect } from 'react'
import {
	ReduxStoreWithManager,
	StateSchemaKey,
} from '@/app/providers/storeProvider'
import { Reducer } from '@reduxjs/toolkit'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
	[name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
	children?: ReactNode
	reducers: ReducerList

	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
	const { children, removeAfterUnmount, reducers } = props

	const store = useStore() as ReduxStoreWithManager
	const dispatch = useDispatch()

	useEffect(() => {
		const mountedReducers = store.reducerManager.getReducerMap()

		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = mountedReducers[name as StateSchemaKey]

			if (!mounted) {
				store.reducerManager.add(name as StateSchemaKey, reducer)
				dispatch({ type: `@INIT ${name} reducer` })
			}
		})

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StateSchemaKey)

					dispatch({ type: `@DESTROY ${name} reducer` })
				})
			}
		}
	}, [])

	return <>{children}</>
}
