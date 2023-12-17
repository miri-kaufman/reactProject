export let calcDonations=(donorArr)=>{
   console.log(donorArr)
    let sum=0;
   for(let i=0;i<donorArr.length;i++){
   sum+=+donorArr[i].sumMoney;
   console.log(sum)}
return sum;
}
export let calcPrecent=(purpose,donorArr)=>{
   return  Math.ceil((calcDonations(donorArr)*100)/purpose);
 }
 export  const calcTime=(date)=>{
   let today=new Date()
   if(today.getFullYear()===date.getFullYear() && today.getMonth()===date.getMonth() && today.getDay()===date.getDay()&& today.getHours()===date.getHours())
   return today.getMinutes()-date.getMinutes()+"minutes"
else if(today.getFullYear()===date.getFullYear() && today.getMonth()===date.getMonth() && today.getDay()===date.getDay())
      return today.getHours()-date.getHours()+"hours"
   else if (today.getFullYear()===date.getFullYear() && today.getMonth()===date.getMonth())
   return today.getDay()-date.getDay()+"days"
      else if(today.getFullYear()===date.getFullYear())
      return today.getMonth()-date.getMonth()+"month"
   else return today.getFullYear()-date.getFullYear()+"years" 
 }
 
export function fromShekelTo(sum,dollar,currencyType){
if(currencyType=="USD")
   return sum/dollar
return sum
}
export function fromShekel(sum,dollar,currencyType){
   if (currencyType=="ILS")
   return sum*dollar
return sum
}

