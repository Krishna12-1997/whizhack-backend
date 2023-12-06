'use strict';

/**
 * latest-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-blog.latest-blog');
