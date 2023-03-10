import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthByEmailResponse } from '../../types/AuthByEmailSchema'
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '@/shared/consts'
import { userActions } from '@/entities/User'
import { ThunkConfig } from '@/app/providers/storeProvider'
import { fetchCart } from '@/features/cartInteraction'

export interface SignInFields {
	email: string
	password: string
}

export const signIn = createAsyncThunk<
	AuthByEmailResponse,
	SignInFields,
	ThunkConfig<string>
>('authByEmail/signIn', async (inputData, thunkAPI) => {
	const { dispatch, extra, rejectWithValue } = thunkAPI
	try {
		const response = await extra.api.post<AuthByEmailResponse>(
			'/auth/login',
			inputData,
		)

		if (!response.data) {
			throw new Error()
		}
		console.log('signin response.data:', response.data)

		localStorage.setItem(
			ACCESS_TOKEN_LOCAL_STORAGE_KEY,
			response.data.accessToken,
		)
		dispatch(fetchCart())
		dispatch(userActions.setAuthData(response.data.user))

		return response.data
	} catch (e: any) {
		console.log('e.response.data.message:', e.response.data.message)
		return rejectWithValue(e.response.data.message)
	}
})
