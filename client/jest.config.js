module.exports = {
	clearMocks: true,
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	moduleNameMapper: {
		'\\.(scss|sass|css)$': 'identity-obj-proxy',
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.svg': '<rootDir>/config/jest/JestEmptyComponent.tsx',
	},
	moduleDirectories: ['node_modules'],
	modulePaths: ['<rootDir>src'],
	testEnvironment: 'jsdom',
}
