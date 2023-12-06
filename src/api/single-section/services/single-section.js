'use strict';

/**
 * single-section service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-section.single-section');
