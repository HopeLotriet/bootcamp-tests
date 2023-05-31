function countAllFromTown (string, regNum){
    let reg= string.split(",");
    let count=[];
    for (let i=0; i<reg.length; i++){
      if (reg[i].includes(regNum)){
        count.push(reg[i]);
      }
    }
    return count.length;
  }
    
    console.log(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
  console.log(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));