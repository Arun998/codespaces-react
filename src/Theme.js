import React, { useState } from 'react'
function Theme(){
    const [darkTheme,setTheme]=useState(false)
    const theme={
        darkTheme:{
            backgroundColor:"grey",
            color:"white",
            padding:"20px"
        },
        lightTheme:{
            backgroundColor:"yellow",
            color:"black",
            padding:"20px"
        }
    }
    const handleChange=()=>{
        setTheme((prev=>!prev))
    }
    return(
        <>
        Enable:
        <input type="checkBox" onChange={handleChange} />
        <div style={darkTheme?theme.darkTheme:theme.lightTheme}>
            <h3>useState Hook in React</h3>
            <p>useState hook allow us to use state in functional components</p>
        </div>
        </>
    )
}
export default Theme