import DetailsConclution from './DetailsConclution';
import { NavLink,Link } from 'react-router-dom';
import MaterialUISwitch from './Button'
import CurenncyBoard from './CurrencyBoard'
import { useContext, useState } from 'react';
import { MyColorContxt } from './ColorContex';
const NavNar = (props) => {

let myColor=useContext(MyColorContxt);
    let {myDonorArr}=props
     return ( < >
     {/* <input type='button' value="chang color" onClick={ClickButton}/> */}
    
    
    
    <nav><ul><li><MaterialUISwitch/> <NavLink className={(data)=>data.isActive? "active" :" "} to ="AllDonation">תרומות</NavLink>  </li>
    <li><NavLink className={(data)=>data.isActive? "active":""} to ="ToDonoate">לתרומה</NavLink></li>
    </ul> <DetailsConclution myDonorArr={myDonorArr} /> </nav></>);
}
 
export default NavNar;