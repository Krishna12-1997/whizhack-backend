'use strict';

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  config.module.rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
  });
  return config;
};
