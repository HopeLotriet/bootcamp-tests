var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3);

var regCount = countRegNumber('CA 182736')
assert.equal(regCount, 1);


describe('The countRegNumber function test' , function(){
    it('Should return 3 registration numbers', function(){
        assert.equal(3,countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    
    it('should return 1 registration number' , function(){
        assert.equal(1,countRegNumber('CA 182736'), 1);
    });

});