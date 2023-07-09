import { removeGameFromCart } from './removeGameFromCart'
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk'

describe('fetchCart', () => {
	test('success result', async () => {
		const thunk = new TestAsyncThunk(removeGameFromCart)
		thunk.api.delete.mockReturnValue(
			Promise.resolve({ data: { status: 'fullfield' } }),
		)
		const result = await thunk.callThunk(1)

		expect(thunk.api.delete).toBeCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
	})

	test('error result', async () => {
		const thunk = new TestAsyncThunk(removeGameFromCart)
		thunk.api.delete.mockReturnValue(Promise.reject({ status: 403 }))
		const result = await thunk.callThunk(12312312412412)

		expect(thunk.api.delete).toBeCalled()
		expect(result.meta.requestStatus).toBe('rejected')
	})
})
