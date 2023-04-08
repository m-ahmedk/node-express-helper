const express = require('express')
const { StatusCodes } = require('http-status-codes')
require('express-async-errors')
const { InternalServerError } = require('./errors/index')

// environment variables
require('dotenv').config()

// 3rd party security middlewares
const helmet = require('helmet') // secure express apps by setting various http headers
const cors = require('cors') // allows access to public domain
const xss = require('xss-clean') // sanitize/clean req.body, req.params and req.query and secure cross origin request
const rateLimiter = require('express-rate-limit') // limit calls to functions

// import custom middlewares
const errorHandler = require('./middleware/error-handler')
const pageNotFound = require('./middleware/not-found')

const app = express();

// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// middlewares
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(rateLimiter({
    windowsMs: 5 * 60 * 1000, // 5 minutes converted to milliseconds. 300,000 ms = 300 sec = 5 minutes
    max: 500 // limit each IP 100 requests per 5 minutes(windowsMs)
}));

// controller routes
require('./routes/main')(app)

// default route
app.get('/', (req, res) => {
    res.send('Node Express Helper')
})

// error handler
app.use(errorHandler);
app.use(pageNotFound);

const port = process.env.PORT || 3010;

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Listening on port: ${port}`)
        })
    }
    catch (error) {
        throw new InternalServerError(`An error ocurred while connecting to database.. ${error}`)
    }
}

start();