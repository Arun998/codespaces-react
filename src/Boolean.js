import React,{useState} from 'react'
function Boolean(){
    const[isLoading,setLoading]=useState(true)
    return(
        <>
        <h3>Updating boolean Value using state hook</h3>
        <button onClick={()=>setLoading(prev=>!prev)}>Toggle</button>
        {isLoading?<p>Loading...</p>:<p>Data will display here</p>}
        </>
    )
}
export default Boolean