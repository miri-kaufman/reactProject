import {calcDonations,calcPrecent}from "./Functions"
const  DetailsConclution= (props) => {
    let {myDonorArr}=props
    const purpose=2000000; 
    

    return (<> <p>sumDonations {calcDonations(myDonorArr)}<br/> </p> 
    <p>numDonors {myDonorArr.length} <br/> </p>
    <p>percentDonations{calcPrecent(purpose,myDonorArr)}<br/></p>
    {purpose}</>);
}
 
export default DetailsConclution;