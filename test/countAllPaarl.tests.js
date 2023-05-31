assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));



describe('The countAllPaarl function test' , function(){
    it('Should return 3 for registration numbers starting with CJ' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
    });
    
    it('Should return 2 for registration numbers starting with CJ' , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'), 2);
    });

});

