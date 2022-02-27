module.exports = {
  transform: { '\\.ts$': ['ts-jest'] },
  moduleNameMapper: {
    '^spite-core$': '<rootDir>/src/core/index.ts',
    '^spite-math$': '<rootDir>/src/math/index.ts',
    '^spite-render$': '<rootDir>/src/render/index.ts',
    '^spite-shaders$': '<rootDir>/src/shaders/index.ts',
  },
};
