import { useState } from "react";
import OneDonate from "./OneDonate";
import BasicCard from "./CardDonate"
import AlignItemsList from './listD'
import { List } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";


const DonationList = (props) => {
  
  let {myDonorArr}=props
  let [newMyDonorArr,setNewMyDonorArr]=useState([])
  useEffect(()=>
    setNewMyDonorArr(myDonorArr)
  )
  let i=0;
  let [findSum,setFindSum]=useState("");
  let[findInscription,setFindInscription]=useState("")
  let changeSumToShow=(event)=>{
      let _name=event.target.name
      if(_name==="findInscription")
      setFindInscription(event.target.value)
       else
      setFindSum(event.target.value)   
       console.log(findSum)
  }
   let state=true
  

 const SortBySum=()=>{
  newMyDonorArr.sort((a,b)=>{return a.sumMoney-b.sumMoney})
 console.log(newMyDonorArr)
 setNewMyDonorArr(...newMyDonorArr)
}
const SortByBigDate=()=>{
  newMyDonorArr.sort((a,b)=>{return a.date.getTime()-b.date.getTime()})
  console.log(myDonorArr)
  console.log(newMyDonorArr)
  setNewMyDonorArr(...newMyDonorArr)
}
const SortBySmallDate=()=>{
  newMyDonorArr.sort((a,b)=>{return b.date.getTime()-a.date.getTime()})
  console.log(myDonorArr)
  console.log(newMyDonorArr)
  setNewMyDonorArr(...newMyDonorArr)
}

  // return (<> {myDonorArr.map((item)=>{return<li key={i++}><OneDonate myDonate={item}/></li>})}</>   )
return(<>
<div onClick={SortBySum}>סכום</div>
<div onClick={SortByBigDate}>הישן</div>
<div onClick={SortBySmallDate}>החדש</div>

<input type="text"placeholder="found by sum" name="findSum1" on onBlur={changeSumToShow}/><input type="text" placeholder="found by Inscription " name="findInscription"  on onBlur={changeSumToShow}/>
{myDonorArr.filter(donor=>(donor.sumMoney===findSum|| findSum==="")
&&( donor.inscription.includes(findInscription)||findInscription==="")).map((item)=>{return<li key={i++}><AlignItemsList myDonate={item} /></li>
} )
}</>)
    // return (<>
    //  {myDonorArr.map((item)=>{return<li><AlignItemsList myDonate={item}/></li>})}</>   )
   
}

export default DonationList;