const { Sequelize } = require('sequelize');

const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'jair',
	password: 'root',
	database: 'repairs',
	logging: false,
});

module.exports = { db };
