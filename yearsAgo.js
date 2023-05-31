function yearsAgo(numOfYearsAgo){
return new Date().getFullYear() - numOfYearsAgo;
}

assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));