'use strict';

/**
 * cyber-module service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cyber-module.cyber-module');
