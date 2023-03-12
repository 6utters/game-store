import { convertImagePath } from './convertImagePath'

describe('convertImagePath', () => {
	test('with "/"', () => {
		expect(convertImagePath('/testUrl')).toBe('/testUrl')
	})

	test('without "/"', () => {
		expect(convertImagePath('testUrl')).toBe('/testUrl')
	})
})
