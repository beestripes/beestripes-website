const reactRefresh = require('@vitejs/plugin-react-refresh')

module.exports = {
  base: '/beestripes/beestripes-website/',
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react';`
  },
  build: {
    minify: false
  }
}
