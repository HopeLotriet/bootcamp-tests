var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//fromStellies should contains
assert.equal(fromStellies, 3)

var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
//fromStellies should contains
assert.equal(fromKuilsriver, 1)



describe('The countAllFromTown function test' , function(){
    it('Should return 3 if from Stellies' , function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), "This should be true");
    });
 

    it('Should return 1 if from Kuilsriver' , function(){
        assert.equal(1,countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'), "This should be true");
    });

});

