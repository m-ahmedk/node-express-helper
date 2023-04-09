# Node.js Helper Functions
This project contains a collection of helper functions that can be used in other Node.js projects. The project has been designed to be modular, meaning that each function can be easily used on its own without requiring any additional code.

## Features
- User CRUD operations (create, read, update, delete)
- Mongoose ORM for database integration
- Swagger UI for API documentation
- Third-party middlewares (helmet, xss-clean, cors, and express rate limit) for security and performance improvements
- A generic response module for all CRUD operations
- Log all errors using Winston logger
- Store logs in a file and automatically delete after 3 days

## Getting Started
To get started with this project, follow these steps:

1. Clone the repository: git clone https://github.com/m-ahmedk/node-mongo-api.git
2. Install dependencies: npm install
3. Start the server: npm start
4. Access the Swagger UI documentation in your web browser at http://localhost:3002

## Prerequisites
To run this project, you need:

- Node.js
- MongoDB
- npm

## Configuration
This project uses environment variables for configuration. The following variables are required:

- MONGO_URI: the URI of the MongoDB database to use
- PORT: default port to run the local host

You can set these variables in a .env file in the root directory of the project.

## Built With
Node.js
Express
Mongoose
Winston
Swagger

## Contributing
If you would like to contribute to the project, please reach out to the repository owner.

## License
This project is licensed under the MIT License - see the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/m-ahmedk/node-mongo-api/blob/main/LICENSE) file for details.