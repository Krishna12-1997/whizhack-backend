'use strict';

/**
 * cyber-guru service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cyber-guru.cyber-guru');
