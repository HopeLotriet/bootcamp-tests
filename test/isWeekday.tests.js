assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Sunday'), false);
assert.equal(isWeekday('Monday'), true);
assert.equal(isWeekday('Tuesday'), true);
assert.equal(isWeekday('Wednesday'), true);
assert.equal(isWeekday('Thursday'), true);
assert.equal(isWeekday('Friday'), true);

describe('The isWeekday function test' , function(){
    it('should return true if it is a Wednesday' , function(){
        assert.equal(true, isWeekday('Wednesday'), true);
    });
    
    it('should return false if it is a Saturday' , function(){
        assert.equal(false, isWeekday('Saturday'), false);
    });

});