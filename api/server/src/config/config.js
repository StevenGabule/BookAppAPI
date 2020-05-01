require('dotenv').config();
module.exports = {
    development: {
        database: 'booksapi',
        username: 'postgres',
        password: 'postgres',
        host: '127.0.0.1',
        dialect: 'postgres'
    },
    test: {
        database: 'booksapi_test',
        username: 'postgres',
        password: 'postgres',
        host: '127.0.0.1',
        dialect: 'postgres'
    },
    production: {
        username: 'postgres',
        password: 'postgres',
        database: 'booksapi',
        host: '127.0.0.1',
        dialect: 'postgres'
    }
};
