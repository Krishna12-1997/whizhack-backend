'use strict';

/**
 * latest-blog router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-blog.latest-blog');
