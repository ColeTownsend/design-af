const webpack = require('webpack');

// get all the environment variables
const env = Object.keys(process.env).reduce((o, k) => {
  o[`process.env.${k}`] = JSON.stringify(process.env[k]);
  return o;
}, {});

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
};
