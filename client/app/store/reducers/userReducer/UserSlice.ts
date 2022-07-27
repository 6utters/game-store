import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../../models/IUser'

interface IUserState {
	user: IUser | null
	isAuth: boolean
	isLoading: boolean
	error: string
}

const initialState: IUserState = {
	user: {} as IUser,
	isAuth: false,
	isLoading: true,
	error: '',
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
			state.error = ''
		},
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
			state.error = ''
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
		setUserError: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { setIsAuth, setUser, setIsLoading, setUserError } =
	userSlice.actions

export default userSlice.reducer
