var chai = require("chai");
var chaiHttp = require("chai-http");
var expect = chai.expect;
//var connModel = require("./../../models/connection");

chai.use(chaiHttp);

describe("Connection Model", function () {
  it("test function should return string only", function () {
    //console.log("conn", process.env.APP_PORT);
    //console.log("conn", process.env.MYSQL_DB_HOST);
    //expect(get_data).to.be.a("string");
  });
});