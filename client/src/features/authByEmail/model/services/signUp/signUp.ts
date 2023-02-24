import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthByEmailResponse } from '../../types/AuthByEmailSchema'
import { ThunkConfig } from '@/app/providers/storeProvider'
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '@/shared/consts'
import { userActions } from '@/entities/User'
import { fetchCart } from '@/features/cartInteraction'

export interface SignUpFields {
	email: string
	password: string
	userName: string
}

export const signUp = createAsyncThunk<
	AuthByEmailResponse,
	SignUpFields,
	ThunkConfig<string>
>('authByEmail/signUp', async (inputData, thunkAPI) => {
	const { dispatch, rejectWithValue, extra } = thunkAPI
	try {
		const response = await extra.api.post('/auth/register', inputData)
		if (!response.data) {
			throw new Error()
		}
		localStorage.setItem(
			ACCESS_TOKEN_LOCAL_STORAGE_KEY,
			response.data.accessToken,
		)
		dispatch(fetchCart())
		dispatch(userActions.setAuthData(response.data.user))

		return response.data
	} catch (e: any) {
		rejectWithValue(e.response.data.message)
	}
})
