import React from 'react'
export const userContext=React.createContext();
const obj={
    name:"Arun",
    email:"arunkolukari8@gmail.com"
}

export const UserContextProvider =({children})=>{
    return(
        <userContext.Provider value={obj}>{children}</userContext.Provider>
    );
}