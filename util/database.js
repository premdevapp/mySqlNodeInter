const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `nodecomplete`,
  "root",
  "fbedc263cfc84e2eaa498f97b09626d3@321!_321",
  { dialect: "mysql", host: "localhost" }
);

module.exports = sequelize;
