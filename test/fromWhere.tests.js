assert.equal(fromWhere('CY 567489'), 'Bellville'); 
assert.equal(fromWhere('CJ 343502'), 'Paarl');
assert.equal(fromWhere('CA 987504'), 'Cape Town');
assert.equal(fromWhere('ZN 568593'), 'Some other place!');

describe('The fromWhere function test' , function(){
    it('should return Bellville' , function(){
        assert.equal("Bellville",fromWhere('CY 567489'), 'Bellville');
    });
    
    it('should return Paarl' , function(){
        assert.equal("Paarl",fromWhere('CJ 343502'), 'Paarl');
    });

    it('should return Cape Town' , function(){
        assert.equal("Cape Town",fromWhere('CA 987504'), 'Cape Town');
    });
});