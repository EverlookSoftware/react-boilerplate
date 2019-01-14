/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

/**
 * Eventually we will generate a '.env' file during CI/CD
 * which will be parsed here using
 * dotenv.parsed
 */
const env = {};

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin(env),
  ],
});
