'use strict';

/**
 * solution-case service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::solution-case.solution-case');
