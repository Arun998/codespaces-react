import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetching(){
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(result=>{
            console.log(result)
            setPosts(result.data)
        
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    return(
        <>
        <h2>DataFetching</h2>
        <div>
            <ul>
                {
                    posts.map(post=>(<li key={post.id}>{post.title}</li>)
                )}
            </ul>
        </div>
        </>
    )
}
export default DataFetching