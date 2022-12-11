/** @type {import('jest').Config} */
const config = {
  verbose: true,
  clearMocks: true,
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
}

module.exports = config
