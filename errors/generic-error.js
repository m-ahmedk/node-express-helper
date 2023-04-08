/**
 * Extend the built-in "Error" class to have a custom error message 
 */

const { StatusCodes } = require('http-status-codes')

class GenericError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

module.exports = GenericError