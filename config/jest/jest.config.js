module.exports = {
    collectCoverageFrom: ['../../src/**/*.(ts|tsx)', '!../../src/*.(ts|tsx)', '!../../src/theme/**', '!../../node_modules/**'],
    coverageDirectory: '../../coverage/',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    roots: ['../../src/'],
    setupFilesAfterEnv: ['./enzymeSetup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testEnvironment: 'jsdom',
    testMatch: ['**/*.(spec|test).(ts|tsx)'],
    verbose: true
};
