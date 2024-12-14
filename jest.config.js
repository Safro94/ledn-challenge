/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePaths: ['<rootDir>/src/'],
  roots: ['<rootDir>/src'],
  coverageReporters: ['html'],
  coverageDirectory: 'report',
  collectCoverageFrom: [
    '**/*.{ts, tsx}',
    '!**/*.{ts, tsx}.styles.ts',
    '!**/client/**',
    '!**/routes/**',
    '!**/node_modules/**',
    '!**/__tests__/**',
  ],
  transform: {
    '^.+\\.tsx$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '^axios$': 'axios/dist/node/axios.cjs',
  },
}
