module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/jest.stubs.js", "<rootDir>/src/rxjs-imports.ts"],
  testURL: "http://localhost/",
  moduleNameMapper: {
    "@src/(.*)$": "<rootDir>/src/$1",
    "@locales/(.*)$": "<rootDir>/locales/$1",
  },
};
