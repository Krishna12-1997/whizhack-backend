'use strict';

/**
 * latest-blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest-blog.latest-blog');
