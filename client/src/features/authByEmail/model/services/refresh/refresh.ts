import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthByEmailResponse } from '../../types/AuthByEmailSchema'
import { ThunkConfig } from '@/app/providers/storeProvider'
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '@/shared/consts'
import { userActions } from '@/entities/User'
import { fetchCart } from '@/entities/Cart'

export const refresh = createAsyncThunk<
	AuthByEmailResponse,
	void,
	ThunkConfig<string>
>('authByEmail/check', async (_, ThunkAPI) => {
	const { rejectWithValue, extra, dispatch } = ThunkAPI
	try {
		const response = await extra.api.get<AuthByEmailResponse>('/auth/refresh', {
			withCredentials: true,
		})
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
		return rejectWithValue(e.response.data.message)
	}
})
