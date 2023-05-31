assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

assert.equal(regCheck('5566 L', 'L'), true);
assert.equal(regCheck('5566 L', 'M'), false);

assert.equal(regCheck('ERT 123 EC', 'EC'), true);
assert.equal(regCheck('ERT 123 EC', 'GP'), false);

assert.equal(regCheck('FGT 123 MP', 'MP'), true);
assert.equal(regCheck('FGT 123 MM', 'MP'), false);

describe('The regCheck function test' , function(){
    it('should return true for number plates ending in GP' , function(){
        assert.equal(true,regCheck('DC 55 YU GP', 'GP'), true);
    });
    
    it('should return false for number plates ending in EC' , function(){
        assert.equal(false,regCheck('DC 55 YU GP', 'EC'), false);
    });

});