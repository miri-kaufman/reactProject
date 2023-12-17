import * as yup from "yup"
import './Desgin.css'
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { MyColorContxt } from "./ColorContex";

const validationSchema=yup.object({
    name:yup.string().required("required field"),
    sumMoney:yup.number().required("required field"),
    inscription:yup.string(),
    
 
})
    const Formyup=(props)=>{
     let {myUpdate}=props
    let myColor=useContext(MyColorContxt)
     const { register, handleSubmit, formState: { errors }, reset } = useForm({
         resolver: yupResolver(validationSchema),
       });
       const onSubmitHandler = (data) => {
        data["date"]=new Date()
         myUpdate(data)
         console.log({ data });
        reset();
       };
      return (
         <form className={myColor.colorValue}  onSubmit={handleSubmit(onSubmitHandler)} >
           <h2>Lets donate</h2>
          <br />
             <label> Enter your name</label>
          <input {...register("name")} placeholder="name" />
          <p>{errors.name?.message}</p>
          <br />
    
         <label> Enter your amountDonation</label>
         <input
            {...register("sumMoney")}
            placeholder="sumMoney"
            
           />
          <p>{errors.sumMoney?.message}</p>
          <br />
          <label> Enter your inscription</label>
          <input
            {...register("inscription")}
            placeholder="inscription"
          />
          <p>{errors.inscription?.message}</p>
          <br />
          <button type="submit">Donate</button>
         </form>
       )}

      
  
//     const Formyup=(props)=>{
//         let {myUpdate}=props
//         let { register, handleSubmit, getValues, formState: { errors,dirtyFields,isValid } } = useForm({mode:"onSubmit",
//             resolver: yupResolver(validationSchema)
//         });
//         const save = data => {
//             myUpdate(data)
//             console.log(JSON.stringify(data));
            
//         }
//         return(<form noValidate="true" onSubmit={handleSubmit(save)}>
//   <label> Enter your name</label>
//         <input type="text"  name="name" {...register("name")}/>
//         {errors.name&&<span className="err-message"></span>}
//         <label> Enter your amountDonation</label>
//         <input type="text" name="sumMoney"{...register("sumMoney")}/>
//         {errors.sumMoney&&<span className="err-message"></span>}
//         <label> Enter your inscription</label>
//         <input type="text"  name="inscription" />
//         {errors.sumMoney&&<span className="err-message"></span>}

//         <input type="submit" disabled={!isValid}  />
//         </form>)
//     }
    export default Formyup;