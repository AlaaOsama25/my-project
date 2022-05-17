'use strict';

/**
 * student-transaction service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-transaction.student-transaction');
