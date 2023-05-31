assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
assert.equal('R3.40', totalPhoneBill('call, sms'));
assert.equal('R1.30', totalPhoneBill('sms, sms'));

describe('The totalPhoneBill function test' , function(){
    it('should return R7.45 for 2 calls and 3 smses' , function(){
        assert.equal("R7.45",totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });
    
    it('should return R3.40 for a call and sms' , function(){
        assert.equal("R3.40",totalPhoneBill('call, sms'), 'R3.40');
    });

});