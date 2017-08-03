var chai = require("chai");
var chaiHttp = require("chai-http");
var expect = chai.expect;
var app = require("express")();


chai.use(chaiHttp);

describe("Server", function () {
  it("listening port should have to be same as process", function () {
    let get_port = app.get("port");
    expect(get_port).to.equal(process.env.port);
  });
});