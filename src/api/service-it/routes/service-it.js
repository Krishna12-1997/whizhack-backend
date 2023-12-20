'use strict';

/**
 * service-it router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-it.service-it');
