var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var results2 = [];

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];



console.log('findItemsOver20 passed!')

describe('The findItemsOver20 function test' , function(){
    it('should return Pears and Bananas as results' , function(){
        assert.deepEqual(results,findItemsOver20(itemList), "This should be true");
    });
    
    it('should return Apples, Bananas and Apples as results' , function(){
        assert.deepEqual(results2 ,findItemsOver20(itemList2), "This should be true");
    });

});