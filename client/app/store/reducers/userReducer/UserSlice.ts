import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../../models/IUser'

interface IUserState {
	user: IUser | null
	isAuth: boolean
}

const initialState: IUserState = {
	user: {} as IUser,
	isAuth: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
		setUser: (state, action: PayloadAction<any>) => {
			state.user = action.payload
		},
	},
})

export const { setIsAuth, setUser } = userSlice.actions

export default userSlice.reducer
