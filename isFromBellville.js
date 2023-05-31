function isFromBellville (registrationNumber){
    return registrationNumber.startsWith("CY");
  }
  
  assert.equal(isFromBellville('CY 123'), true);
  console.log(isFromBellville("CY 123"));
  console.log(isFromBellville("JY 123"));