'use strict';

/**
 * ransomeware service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ransomeware.ransomeware');
