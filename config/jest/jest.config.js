module.exports = {
    collectCoverageFrom: [
        '<rootDir>/src/**/*.(ts|tsx)',
        '!<rootDir>/src/*.(ts|tsx)',
        '!<rootDir>/src/theme/**',
        '!<rootDir>/node_modules/**'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    roots: ['<rootDir>/src/'],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>/config/jest/enzymeSetup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testEnvironment: 'jsdom',
    testMatch: ['**/*.(spec|test).(ts|tsx)'],
    verbose: true,
    moduleNameMapper: {
        '^@styled': '<rootDir>/src/utils/styled',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@containers(.*)$': '<rootDir>/src/containers$1',
        '^@store(.*)$': '<rootDir>/src/store$1',
        '^@theme(.*)$': '<rootDir>/src/theme$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1'
    }
};
