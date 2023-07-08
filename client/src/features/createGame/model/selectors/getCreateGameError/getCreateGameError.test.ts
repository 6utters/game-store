import { StateSchema } from '@/app/providers/storeProvider'
import { getCreateGameError } from './getCreateGameError'

describe('getCreateGameError', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			createGame: {
				error: 'error',
			},
		}
		expect(getCreateGameError(state as StateSchema)).toEqual('error')
	})
	test('should return undefined if state is empty', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getCreateGameError(state as StateSchema)).toEqual(undefined)
	})
})
