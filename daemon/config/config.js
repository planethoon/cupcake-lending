require("dotenv").config();

const config = {
    development: {
        host: "localhost",
        username: "root",
        password: process.env.DATABASE_PASSWORD,
        database: "cupcake",
        provider: "ws://127.0.0.1:7545",
        contractAddr: process.env.CONTRACT_ADDRESS,
        dialect: "mysql",
    },
    test: {
        host: "localhost",
        user: "root",
        password: process.env.DATABASE_PASSWORD,
        database: "cupcake_test",
        database: "ws://127.0.0.1:7545",
        contractAddr: process.env.CONTRACT_ADDRESS,
        dialect: "mysql",
    },
};

module.exports = config;
