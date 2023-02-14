import React,{useState} from 'react'
function Array(){
    const arr=[{
        id:1,
        name:"arun",
    }
,{
    id:2,
    name:"vasu",  
}]
const[user,setUser]=useState(arr)
 const handleChange=(userName)=>{
    setUser([
        ...user,{
            id:user.length+1,
            name:userName
        }
        
    ])
 }
    return(
        <>
        <h3>Arrays using useState</h3>
        <label>UserName:
            <input type="text" name="userName" onBlur={(e)=>handleChange(e.target.value)}/> <br></br>
        </label>
        <p>{JSON.stringify(user)}</p>
        </>
    )
}
export default Array