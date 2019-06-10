module.exports = {
	preset: 'jest-preset-angular',
	testURL: 'http://localhost',
	setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
	globals: {
		'ts-jest': {
			tsConfig: '<rootDir>/src/tsconfig.spec.json',
			stringifyContentPathRegex: '\\.html$',
			astTransformers: ['jest-preset-angular/InlineHtmlStripStylesTransformer']
		}
	},
	transform: {
		'^.+\\.(ts|js|html)$': 'ts-jest'
	},
	moduleNameMapper: {
		'@app-core/(.*)': '<rootDir>/src/app/modules/core/$1',
		'@app-type': '<rootDir>/src/types'
	},
	testMatch: ['<rootDir>/src/**/+(*.)+(spec|test).+(ts|js)?(x)'],
	testEnvironment: 'jest-environment-jsdom-thirteen',
	testPathIgnorePatterns: ['node_modules/(?!@ngrx)', '<rootDir>/e2e/'],
	coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/e2e', '<rootDir>/src/setupJest.ts'],
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageThreshold: {
		global: {
			branches: 50,
			functions: 50,
			lines: 70,
			statements: 70
		}
	},
	coverageReporters: ['json', 'lcov', 'text'],
	snapshotSerializers: [
		'jest-preset-angular/AngularSnapshotSerializer.js',
		'jest-preset-angular/HTMLCommentSerializer.js'
	]
};
