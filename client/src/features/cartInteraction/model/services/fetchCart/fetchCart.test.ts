import { fetchCart } from './fetchCart'
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { CartSchema } from '@/entities/Cart'

const data: CartSchema = {
	id: 1,
	userId: 1,
	games: [
		{
			id: 1,
			gameId: 2,
			cartId: 1,
		},
		{
			id: 2,
			gameId: 3,
			cartId: 1,
		},
	],
}

describe('fetchCart', () => {
	test('success result', async () => {
		const thunk = new TestAsyncThunk(fetchCart)
		thunk.api.get.mockReturnValue(Promise.resolve({ data }))
		const result = await thunk.callThunk()

		expect(result.payload).toEqual(data)
		expect(thunk.api.get).toBeCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
	})

	test('error result', async () => {
		const thunk = new TestAsyncThunk(fetchCart)
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
		const result = await thunk.callThunk()

		expect(thunk.api.get).toBeCalled()
		expect(result.meta.requestStatus).toBe('rejected')
	})

	test('error result with empty data', async () => {
		const thunk = new TestAsyncThunk(fetchCart)
		thunk.api.get.mockReturnValue(Promise.resolve({ data: undefined }))
		const result = await thunk.callThunk()

		expect(thunk.api.get).toBeCalled()
		expect(result.meta.requestStatus).toBe('rejected')
	})
})
