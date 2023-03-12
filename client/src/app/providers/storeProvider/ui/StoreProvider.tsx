import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { createStore } from '../config/store'
import { StateSchema } from '@/app/providers/storeProvider'
import { ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
	children: ReactNode
	initialState?: DeepPartial<StateSchema>
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = props => {
	const { children, asyncReducers, initialState } = props

	return (
		<Provider
			store={createStore(
				initialState as StateSchema,
				asyncReducers as ReducersMapObject<StateSchema>,
			)}
		>
			{children}
		</Provider>
	)
}
