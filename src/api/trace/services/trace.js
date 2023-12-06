'use strict';

/**
 * trace service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trace.trace');
