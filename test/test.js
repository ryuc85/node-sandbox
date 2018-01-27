var assert = require("assert");
var auth = require("../modules/auth.js");

describe('Array', function () {
    describe('#indexOf()', function () {
        it("should return -1 when the value is not present", function () {
            assert([1, 2, 3].indexOf(4), -1)
        });
    });
});

describe('Hash password#1', function () {
   describe('#hash free1985', function () {
       it("should return '2b31976cb3e414c093b6a291df7aba59'", function () {
           assert(auth.md5("free1985"), '2b31976cb3e414c093b6a291df7aba59');
       });
       it("should return 'e80b5017098950fc58aad83c8c14978e'", function () {
           assert(auth.md5('abcdef'), 'e80b5017098950fc58aad83c8c14978e');
       });
       it("should return 'fa5102e854abe69c5328faaf7361d6ce'", function () {
           assert(auth.md5('showpassword'), 'fa5102e854abe69c5328faaf7361d6ce');
       });
   });
});