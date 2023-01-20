import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { API_URL } from './axiosApi'

const baseQuery = fetchBaseQuery({
	baseUrl: API_URL,
	prepareHeaders: headers => {
		const accessToken = localStorage.getItem('token')
		if (accessToken) {
			headers.set('authorization', `Bearer ${accessToken}`)
		}
		return headers
	},
})

export const $rtkApi = createApi({
	reducerPath: 'api',
	baseQuery,
	tagTypes: ['Game', 'Genre', 'Feature', 'Rating'],
	endpoints: build => ({}),
})
