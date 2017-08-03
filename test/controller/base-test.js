var chai = require("chai");
var chaiHttp = require("chai-http");
var expect = chai.expect;
var app = require("express")();
var baseController = require("./../../controller/base");

chai.use(chaiHttp);

describe("Base Controller", function () {
  it("test function should return string only", function () {
    let get_data = baseController.test();
    expect(get_data).to.be.a("string");
  });
});