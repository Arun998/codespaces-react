import React,{useState} from "react";
function Counter(){
    const[count,setCount]=useState(0)
    let increment=()=>{
       setCount(prev=>prev+1)
       setCount(prev=>prev+1)
       setCount(prev=>prev+1)
    }
    let decrement=()=>{
        setCount(count-1)
    }
    return(
        <>
        <button onClick={increment}>Increment</button><br></br>
        <span>{count}</span><br></br>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}
export default Counter