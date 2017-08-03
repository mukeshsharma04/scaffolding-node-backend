var chai = require("chai");
var chaiHttp = require("chai-http");
var expect = chai.expect;
var baseModel = require("./../../models/base");

chai.use(chaiHttp);

describe("Base Model", function () {
  it("test function should return string only", function () {
    let get_data = baseModel.testMod();
    expect(get_data).to.be.a("string");
  });
});