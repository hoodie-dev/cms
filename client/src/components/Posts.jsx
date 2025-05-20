import React from "react"
import { useState, useEffect } from "react"

function Posts(){

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    async function deletePost(id){
        const res = await fetch(`http://localhost:3000/posts/${id}`,{
            method:"DELETE"
        })
        return
    }

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
    },[])
    return(
        <>
            <section id="posts">
                {posts.map((post)=>(
                    <section className="card" key={post.id}>
                        <div className="card-image"></div>
                        <h4 className="card-title">{post.title}</h4>
                        <p className="card-content">{`${post.content} Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
                        <div className="card-btn-wrapper">
                            <button className="card-btn-read-more">Read More</button>
                            <button className="card-btn-delete" onClick={()=>deletePost(post.id)}>Delete</button>
                        </div>
                        
                    </section>
                ))
                }
                {posts.map(post=>console.log(`id = ${post.id}`))}
                
            </section>
        </>
    )
}

export default Posts