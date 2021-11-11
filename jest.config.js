module.exports = {
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  transform: { "\\.[jt]sx?$": "babel-jest" },
  transformIgnorePatterns: ["\\\\node_modules\\\\", "\\.pnp\\.[^\\\\]+$"],
  moduleDirectories: ["node_modules", "src"],
};
