'use strict';

/**
 * about-cyber service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-cyber.about-cyber');
