require('dotenv').config();
module.exports =
    {
        "development": {
            "username": "postgres",
            "password": "postgres",
            "database": "booksapi",
            "host": "127.0.0.1",
            "dialect": "postgres"
        },
        "test": {
            "username": "postgres",
            "password": "postgres",
            "database": "booksapi_test",
            "host": "127.0.0.1",
            "dialect": "postgres"
        },
        "production": {
            "username": "postgres",
            "password": "postgres",
            "database": "booksapi",
            "host": "127.0.0.1",
            "dialect": "postgres"
        }
    };
