function mostProfitableDepartment(salesData){

    const salesMap={}
    for(let i=0;i<salesData.length;i++){
       const data=salesData[i];
       let currentDepartment=data.department;
       let currentSales=data.sales
       
       if(salesMap[currentDepartment]===undefined){
         salesMap[currentDepartment]=currentSales;
       }
      else{
         salesMap[currentDepartment]+=currentSales;     
      }
    }
    let maxSales=0;
     let maxDep="";
     for(const dep in salesMap){
       const sales =salesMap[dep];
       if(sales>maxSales){
         maxSales=sales;
         maxDep=dep;
       }
     }
   //console.log(maxDep)
   return maxDep
 }
 
 
 function mostProfitableDay(salesData){
 const salesMap={}
    for(let i=0;i<salesData.length;i++){
       const data=salesData[i];
       let currentDay=data.day;
       let currentSales=data.sales
       
       if(salesMap[currentDay]===undefined){
         salesMap[currentDay]=currentSales;
       }
      else{
         salesMap[currentDay]+=currentSales;     
      }
    }
   //console.log(salesMap)
   
     let maxSales=0;
     let maxDay="";
     for(const day in salesMap){
       const sales =salesMap[day];
       if(sales>maxSales){
         maxSales=sales;
         maxDay=day;
       }
     }
   //console.log(maxSales)
   //console.log(maxDay)
   return maxDay
 
 }