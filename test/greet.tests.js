describe('The greet function test' , function(){
    it('Should return "Hello, Samu" when called with "Samu"' , function(){
        assert.equal("Hello, Samu",greet('Samu'), 'Hello, Samu');
    });
    
    it('Should return "Hello, Bob" when called with "Bob"' , function(){
        assert.equal("Hello, Bob",greet('Bob'), 'Hello, Bob');
    });

});





  