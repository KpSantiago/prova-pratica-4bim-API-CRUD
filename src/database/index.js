// importing sequelize
const Sequelize = require("sequelize");
// importing products model
const Products = require("../model/Products");

// importing configuration file
const databaseConfig = require("../config/database");

// creating the connection
const connection = new Sequelize(databaseConfig);

// connecting
Products.init(connection);

module.exports = connection;
