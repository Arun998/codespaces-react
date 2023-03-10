import React,{useContext} from "react";
import { userContext } from "./Context";
const Subchild = ()=>{
    const data = useContext(userContext);
    const {name,email} = data
  
    return(
        <>
        <h1>Subchild</h1>
        <h2>{name}</h2>
        <p>{email}</p>
        </>
    )
}
export default Subchild