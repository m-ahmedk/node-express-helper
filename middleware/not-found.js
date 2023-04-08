// const {NotFoundError} = require('../errors/index')
const {StatusCodes} = require('http-status-codes')

const notFoundMiddleware = (req, res, next) => {
//    throw new NotFoundError("Route does not exist..")
    res.status(StatusCodes.NOT_FOUND).json({"message": "Route doesn't exist"})
}

module.exports = notFoundMiddleware;