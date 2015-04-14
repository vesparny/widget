'use strict';

export default class InternalError extends Error {
  constructor(config) {
    super();
    this.stack = new Error().stack;
    this.message = config.message || 'internal server error';
    this.statusCode = config.statusCode || 500;
  }
}
