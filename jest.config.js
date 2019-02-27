module.exports = {
    "moduleFileExtensions": ["ts", "tsx", "js"],
    "transform": {
      "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "setupFiles": [
      "raf/polyfill"
	],
	"testRegex": "/src/.*\\.(spec|test).(ts|tsx)$",
    "setupFilesAfterEnv": ["<rootDir>/tests/setupTests.ts"],
    "snapshotSerializers": [
		"enzyme-to-json/serializer"
	]
}
