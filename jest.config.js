// jest.config.js
module.exports = {
    preset: 'ts-jest', // Use ts-jest for TypeScript files
    testEnvironment: 'jsdom', // Use JSDOM for DOM-related tests
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Setup Testing Library
  };
  