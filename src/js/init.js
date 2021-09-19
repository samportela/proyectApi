var expect  = require("chai").expect;
var request = require("request");



describe("Cuenta de Usuario", function() {

  describe("Ver login", function() {

    var url = "https://demoqa.com/login/Account​/v1​/Authorized";


    it("login de usuario", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("error de logueo  de usuario", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("string");
        done();
      });
    });

  });

  //describe("Creacion de usuario", function() {

    //var url = "https://demoqa.com/login/Account​/v1​/Authorized";

    //it("Nuevo usuario", function(done) {
     // request(url, function(error, response, body) {
      //  expect(response.statusCode).to.equal(200);
      //  done();
     // });
   // });

 // });

});
function jsonOK(params) {
    var 
    
}