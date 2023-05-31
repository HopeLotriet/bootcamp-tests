assert.equal(transportFee('morning'), 'R20');

assert.equal(transportFee('afternoon'), 'R10');

assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

describe('The transportFee function test' , function(){
    it('should return R20 for the morning shift' , function(){
        assert.equal("R20",transportFee('morning'), 'R20');
    });
    
    it('should return R10 for the afternoon shift' , function(){
        assert.equal("R10",transportFee('afternoon'), 'R10');
    });

});