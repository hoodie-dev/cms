import React from "react"
import { useState, useEffect } from "react"
import Card from "./Card"

function Posts(){

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

   

    useEffect(()=>{
        async function fetchPosts(){
            try {
                const res = await fetch("http://localhost:3000/posts")
                const data = await res.json()
                setPosts(data)
            } catch (error) {   
                console.log('error fetching data : ', error)
            } finally {
                setLoading(false)
            }
           
        }
        fetchPosts()
    },[posts])
    return(
        <>
            <section id="posts">
                {posts.map((post)=>(
                   <Card post={post} key={post.id}/>
                ))
                }
                
            </section>
        </>
    )
}

export default Posts