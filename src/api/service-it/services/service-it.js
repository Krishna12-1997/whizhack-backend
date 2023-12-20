'use strict';

/**
 * service-it service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-it.service-it');
