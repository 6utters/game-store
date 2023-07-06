import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { addGameToCart } from './addGameToCart'

describe('fetchCart', () => {
	test('success result', async () => {
		const thunk = new TestAsyncThunk(addGameToCart)
		thunk.api.post.mockReturnValue(
			Promise.resolve({ data: { status: 'fulfilled' } }),
		)
		const result = await thunk.callThunk('Fallout 4')

		expect(thunk.api.post).toBeCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
	})

	test('error result', async () => {
		const thunk = new TestAsyncThunk(addGameToCart)
		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
		const result = await thunk.callThunk('test')

		expect(thunk.api.post).toBeCalled()
		expect(result.meta.requestStatus).toBe('rejected')
	})
})
