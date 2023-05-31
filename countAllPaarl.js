function countAllPaarl(string){
    const newArrayList=string.split(",");
    let count = 0;
    for (let i=0;i<newArrayList.length;i++){
      if(newArrayList[i].includes("CJ")){
        count++;
      }
      }
      return count;
    }