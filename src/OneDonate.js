import {calcTime} from "./Functions"
const OneDonate = (props) => {
    return (<><h1>donate:</h1>
    <h2>{props.myDonate.name}</h2>
    <h2>{props.myDonate.sumMoney}</h2>
    <h2>{props.myDonate.inscription}</h2>
    <h2>{calcTime(new Date("December 11, 2023 01:01:00"))}</h2>
      {/* <h2>{calcTime(props.date)}</h2>   */}
    </>  );
}
 
export default OneDonate;