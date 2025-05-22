import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


function Posts(){

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    async function deletePost(id){
        const res = await fetch(`http://localhost:3000/posts/${id}`,{
            method:"DELETE"
        })
        return
    }

    async function readPost(id){
        const res = await fetch(`http://localhost:3000/posts/${id}`,{
            method:"GET"
        })

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
    },[posts])
    return(
        <>
            <section id="posts">
                {posts.map((post)=>(
                    <section className="card" key={post.id}>
                        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="" className="card-image" />
                        <h4 className="card-title">{post.title}</h4>
                        <p className="card-content">{`${post.content} Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
                        <div className="card-btn-wrapper">
                            <button className="card-btn-read-more" onClick={()=>{return navigate(`/posts/${post.id}`)}}>Read More</button>
                            <button className="card-btn-delete" onClick={()=>deletePost(post.id)}>Delete</button>
                        </div>
                        
                    </section>
                ))
                }
                
            </section>
        </>
    )
}

export default Posts