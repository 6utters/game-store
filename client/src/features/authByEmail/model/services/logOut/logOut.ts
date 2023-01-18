import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/storeProvider'
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '@/shared/consts'
import { userActions } from '@/entities/User'

export const logOut = createAsyncThunk<void, void, ThunkConfig<string>>(
	'authByEmail/logOut',
	async (_, thunkAPI) => {
		const { rejectWithValue, dispatch, extra } = thunkAPI
		try {
			const response = await extra.api.post('/auth/logout')
			if (!response.data) {
				throw new Error()
			}
			localStorage.removeItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY)
			dispatch(userActions.removeAuthData())

			return response.data
		} catch (e: any) {
			rejectWithValue(e.response.data.message)
		}
	},
)
