import React from "react"
import { posts } from "../App"
import { useState } from "react"

function CreatePost(){
    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    function titleInput(event){
        setTitle(event.target.value)
    }

    function contentInput(event){
        setContent(event.target.value)
    }

    function handlePublishBtn(){
        posts.push({
            title:title,
            content:content
        })
        alert('Submit successful')
        console.log(posts)
    }
    
    return(
        <>
        <section id="create-post">
            <h2>Create Post</h2>
            <span>Title :</span>
            <input type="text" placeholder="post title" id="input-title" value={title} onChange={titleInput}/>
            <span>Content :</span>
            <textarea name="content" id="content" placeholder="post content goes here" rows="10" value={content} onChange={contentInput}></textarea>
            <button id="publish-btn" onClick={handlePublishBtn}>Publish</button>
        </section>  
        </>
    )
}

export default CreatePost