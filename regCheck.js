function regCheck(regNo, location){
    return regNo.endsWith(location);
  }
  
  console.log(regCheck("RG 45 HN GP", "GP"));
  console.log(regCheck("LKG 679 EC", "EC"));
  console.log(regCheck("GHT 456 MP", "MP"));
  console.log(regCheck("FGT 491 L", "L"));
  console.log(regCheck("ND 123-456", "ND"));
  
  assert.equal(regCheck("ND 123-456", "ND"). false);