const defaultConfig = {
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: [ 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  maxWorkers: "50%",
  watchPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['node_modules'],
}

export default {
  projects: [
    {
      ...defaultConfig,
      displayName: 'backend',
      testEnvironment: 'node',
      collectCoverageFrom: [
        "server/",
        "!server/index.js",
      ],
      transformIgnorePatterns: [
        ...defaultConfig.transformIgnorePatterns,
        "public"
      ],
      testMatch: [
        "**/tests/**/server/**/*.test.js"
      ],
    },
    {
      ...defaultConfig,
      displayName: 'frontend',
      testEnvironment: 'jsdom',
      collectCoverageFrom: [
        "public/",

      ],
      transformIgnorePatterns: [
        ...defaultConfig.transformIgnorePatterns,
        "server"
      ],
      testMatch: [
        "**/tests/**/public/**/*.test.js"
      ],
    }
  ]
}
