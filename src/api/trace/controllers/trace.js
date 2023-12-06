'use strict';

/**
 * trace controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::trace.trace');
