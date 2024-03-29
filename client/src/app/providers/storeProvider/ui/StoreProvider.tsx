import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { createReduxStore, store } from '../config/store'
import { StateSchema } from '@/app/providers/storeProvider'
import { ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
	children: ReactNode
	initialState?: DeepPartial<StateSchema>
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = props => {
	const { children, initialState, asyncReducers } = props

	const backedUpStore = createReduxStore(
		initialState as StateSchema,
		asyncReducers as ReducersMapObject<StateSchema>,
	)

	return (
		<Provider store={initialState ? backedUpStore : store}>{children}</Provider>
	)
}
