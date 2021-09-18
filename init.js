var expect  = require("chai").expect;
var request = require("request");


describe("Cuenta de Usuario", function() {

  describe("Ver login", function() {

    var url = "https://demoqa.com/login";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("login de usuario", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("");
        done();
      });
    });

  });

  describe("Catalogo de articulos", function() {
    var url = "https://demoqa.com/books";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("Ver catalogo", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("[0,255,0]");
        done();
      });
    });
  });

});