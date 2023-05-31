assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));


describe('The yearsAgo function test' , function(){
    it('should return 47 for the number of years' , function(){
        assert.equal(new Date().getFullYear()-1976,yearsAgo(1976), 47);
    });
    
    it('should return 23 for the number of years' , function(){
        assert.equal(new Date().getFullYear()-2000,yearsAgo(2000), 23);
    });

});

