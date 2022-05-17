'use strict';

/**
 * student-distribution service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-distribution.student-distribution');
