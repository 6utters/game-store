import { StateSchema } from '@/app/providers/storeProvider'
import { getCreateGameIsLoading } from './getCreateGameIsLoading'

describe('getCreateGameIsLoading', () => {
	test('should return loading', () => {
		const state: DeepPartial<StateSchema> = {
			createGame: {
				isLoading: true,
			},
		}
		expect(getCreateGameIsLoading(state as StateSchema)).toEqual(true)
	})
	test('should return undefined if state is empty', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getCreateGameIsLoading(state as StateSchema)).toEqual(undefined)
	})
})
