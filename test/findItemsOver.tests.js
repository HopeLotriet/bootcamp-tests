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



console.log('findItemsOver passed!');


describe('The findItemsOver function test' , function(){
    it('should return 2 items with threshold over 20 from results' , function(){
        assert.deepEqual(results, findItemsOver(itemList, 20), "This should be true");
    });
    
    it('should return 0 items with threshold over 20 from results2' , function(){
        assert.deepEqual(results2, findItemsOver(itemList2, 20), "This should be true");
    });

});

