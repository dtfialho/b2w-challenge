module.exports = {
  setupFiles: ['<rootDir>/tests/setup.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    './tests/setup.js',
    './webpack/',
  ],
  moduleNameMapper: {
    '^.+\\.(svg|css|styl)$': 'identity-obj-proxy',
  },
};
