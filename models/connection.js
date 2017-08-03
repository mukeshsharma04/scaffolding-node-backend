var caminte = require("caminte"),
  Schema = caminte.Schema,
  config = {
    driver     : "mysql",    // or mariadb
    host       : process.env.MYSQL_DB_HOST,
    port       : process.env.MYSQL_DB_PORT,
    username   : process.env.MYSQL_DB_USERNAME,
    password   : process.env.MYSQL_DB_PASSWORD,
    database   : process.env.MYSQL_DB_NAME,
    pool       : false // optional for use pool directly
  };

var schema = new Schema(config.driver, config);
module.exports = schema;