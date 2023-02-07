module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    testMatch: [
        "**/test/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
     ]
}