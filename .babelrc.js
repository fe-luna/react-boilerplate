const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  presets: [['@babel/preset-env', { targets: 'defaults' }], '@babel/preset-react', '@babel/preset-typescript'],
  plugins: ['@babel/plugin-transform-runtime', !isProd && 'react-refresh/babel'].filter(Boolean),
}
