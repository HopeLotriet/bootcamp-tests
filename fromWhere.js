function fromWhere(item){
    if (item.startsWith("CY")) {
      return "Bellville"; }
    else if (item.startsWith("CJ")) {
      return "Paarl"; }
    else if (item.startsWith("CA")) {
      return "Cape Town"; }
    else if (item.startsWith("ZN")) {
      return "Some other place!"; }
  }
  
  console.log(fromWhere("CA 987504"));
  assert.equal(fromWhere('CY 567489'), 'Bellville'); 