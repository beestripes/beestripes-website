const reactRefresh = require('@vitejs/plugin-react-refresh')

module.exports = {
  plugins: [reactRefresh()],
  build: {
    minify: true,
  },
}
