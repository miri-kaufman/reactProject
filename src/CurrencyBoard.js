import { useContext } from "react";
import { DollarContext } from "./App";
const CurenncyBoard = () => {
    let contexObject=useContext(DollarContext)
    return ( 
        <input type="button" value="chang" onClick={contexObject.changeCurrencyInSite}/>
     );
}
 
export default CurenncyBoard;