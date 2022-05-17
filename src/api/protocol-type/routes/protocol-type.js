'use strict';

/**
 * protocol-type router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::protocol-type.protocol-type');
