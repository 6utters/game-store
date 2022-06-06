import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../../models/IUser'

interface IUserState {
	user: IUser | null
	isAuth: boolean
	isLoading: boolean
}

const initialState: IUserState = {
	user: {} as IUser,
	isAuth: false,
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
	},
})

export const { setIsAuth, setUser, setIsLoading } = userSlice.actions

export default userSlice.reducer
