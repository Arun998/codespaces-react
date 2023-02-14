import React,{useState} from 'react'
function UserForm(){
    const initialObject={
        userName:"",
        password:""
    }
    const[user,setUser]=useState(initialObject)
    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    return(
        <>
        <h3>Using objects in use state</h3>
        <label>UserName:
            <input type="text" name="userName" onChange={handleChange}/> <br></br>
        </label>
        <label>password:
            <input type="text" name="password" onChange={handleChange}/> <br></br>
        </label>
        <p>{JSON.stringify(user)}</p>
        </>
    )
}
export default UserForm