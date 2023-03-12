import { findSelectedFilterId } from '@/shared/lib'

describe('findSelectedFilterId', () => {
	test('returns filterId', () => {
		const filterArray = [
			{ id: 1, filterName: 'test1' },
			{ id: 2, filterName: 'test2' },
		]
		expect(findSelectedFilterId(1, filterArray)).toBe(1)
	})

	test('returns undefined', () => {
		const filterArray = [
			{ id: 1, filterName: 'test1' },
			{ id: 2, filterName: 'test2' },
		]
		expect(findSelectedFilterId(3, filterArray)).toBe(undefined)
	})
})
