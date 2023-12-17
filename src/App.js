import logo from './logo.svg';
import './App.css';
import DonateForm1 from './DonateForm1'
import Doonations from './Donations';
import { createContext, useEffect, useState } from 'react'; 
import DetailsConclution from './DetailsConclution';
import { Route,Routes } from 'react-router-dom';
import DonationList from './DonationList';
import NavBar from './NavBar'
import { date } from 'yup';
import { create } from '@mui/material/styles/createTransitions';
import CurenncyBoard from './CurrencyBoard'
import { MyColorContxt } from './ColorContex';
import MaterialUISwitch from './Button'

 export const DollarContext=createContext()

function App() {
  let [rate,setRate]=useState({dollar:undefined,currencyInSite:"ILS"})
  let [textColor,setTextColor]=useState()
  let[bgColor,setBgColor]=useState()
  let [donorArr,setDonorArr]=useState([{name:"miri",
  sumMoney:600,
  inscription:"באהבה ובהערכה",
  date:new Date(2000,3,5)},{name:"chaim",
  sumMoney:1200,
  inscription:"לזכות ר' שעיה בן ר' משה",
  date:new Date("2021-07-08")},{name:"rachel",
  sumMoney:20,
  inscription:"להצלחת בחזית",
  date:new Date("2023-05-03")}])
  const updateArr=(activeDonor)=>{
    let copyArrD=[...donorArr,activeDonor]
    setDonorArr(copyArrD)    
  }
// useEffect(()=>{
//   fetch("https://v6.exchangerate-api.com/v6/f32cbe0c20539cda898c545e/latest/USD")
//   .then(response => response.json())
//   .then(value =>{ console.log(value.conversion_rates.ILS)
//    setRate({...rate,dollar:value.conversion_rates.ILS,currencyInSite:"ILS"})}
//   )})
//  const changCurrencyInSite=()=>{
//    setRate({...rate,currencyInSite:rate.currencyInSite=="ILS"?"USD":"ILS"})
  return (
   <>
   {/* <DollarContext.Provider value={{dollar:rate.dollar,currencyInSite:rate.currencyInSite,changCurrencyInSite:changCurrencyInSite}}> 
  <DetailsConclution/>
   </DollarContext.Provider>  */}

   <MyColorContxt.Provider  value={{colorValue:textColor,changColorValue:setTextColor,
    colorValue2:bgColor,changColorValue2:setBgColor}}>
   <NavBar myDonorArr={donorArr} />
   <Routes>   
    <Route path='AllDonation' element={<DonationList  myDonorArr={donorArr}/>}/>
    <Route path='ToDonoate' element={<DonateForm1 myDonorArr={donorArr} myUpdate={updateArr} />}/>
    
   </Routes>
   </MyColorContxt.Provider>
   
  {/* <Formyup/> */}
   {/* <Doonations myDonorArr={donorArr}/>
   <DonateForm myDonorArr={donorArr} myUpdate={updateArr} />
   <DetailsConclution myDonorArr={donorArr} /> */}
   </>

  )}
  
export default App;
