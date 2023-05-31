function countRegNumber(regNo){
    return regNo.split(",").length;
  }
  
  console.log(countRegNumber("CA 182736,CY 523519,CJ 812328"));
  
  var regCount = countRegNumber("CA 182736")
  assert.equal(regCount, 1);
  
  var regCount = countRegNumber("CA 182736,CY 523519,CJ 812328")
  assert.equal(regCount, 3);