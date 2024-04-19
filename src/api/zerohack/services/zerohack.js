'use strict';

/**
 * zerohack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::zerohack.zerohack');
