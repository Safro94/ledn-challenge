/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx'],
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx)$',
  coverageReporters: ['html'],
  coverageDirectory: 'report',
  collectCoverageFrom: [
    '**/*.{ts, tsx}',
    '!**/*.{ts, tsx}.styles.ts',
    '!**/assets/**',
    '!**/node_modules/**',
    '!**/__tests__/**',
  ],
  transform: {
    '^.+\\.tsx$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
}
