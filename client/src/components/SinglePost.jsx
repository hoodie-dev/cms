import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function SinglePost(){
    const {id} = useParams()
    const [post, setPost] = useState(null)

    useEffect(()=>{
        async function fetchPost(){
            try {
                const res = await fetch(`http://localhost:3000/posts/${id}`)
                const data = await res.json()
                setPost(data)
                console.log(data)
            } catch (error) {   
                console.log('error fetching data : ', error)
            }
           
        }
        fetchPost()
    },[post])

    return(
        <div id="single-post">
            <h2>{post?post.title:'loading...'}</h2>
            <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="" className="single-post-img"/>
            <p>{post?post.content:'loading...'}</p>
        </div>
    )
    
}

export default SinglePost