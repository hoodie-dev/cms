import React from "react"
import { posts } from "../App"

function Posts(){

    return(
        <>
            <section id="posts">
                {posts.map((post, index)=>(
                    <section className="card" key={index}>
                        <div className="card-image"></div>
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                    </section>
                ))}
            </section>
        </>
    )
}

export default Posts