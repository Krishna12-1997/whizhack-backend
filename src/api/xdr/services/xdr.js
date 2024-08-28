'use strict';

/**
 * xdr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::xdr.xdr');
