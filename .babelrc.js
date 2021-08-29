const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  presets: [['@babel/preset-env', { targets: 'defaults' }], '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [!isProd && 'react-refresh/babel'].filter(Boolean),
}
