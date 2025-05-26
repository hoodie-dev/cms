import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreatePost(){
    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    const navigate = useNavigate()

    async function addPostSubmit(newPost){
        try {
            const res = await fetch('http://localhost:3000/posts', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(newPost),
        })
        } catch (error) {
            console.log(err)
        } finally {
            return
        }
        
        
    }

    function handlePublishBtn(e){
        e.preventDefault()

        const newPost={
            title,
            content
        }

        addPostSubmit(newPost)
        return navigate('/posts')
    }
    
    return(
        <>
        
            <form id="create-post" onSubmit={handlePublishBtn}>
                <h2>Create Post</h2>
                <span>Title :</span>
                <input type="text" placeholder="post title" id="input-title" value={title} required onChange={e=>setTitle(e.target.value)}/>
                <span>Content :</span>
                <textarea name="content" id="content" placeholder="post content goes here" rows="10" value={content} required onChange={e=>setContent(e.target.value)}></textarea>
                <button id="publish-btn" type="submit">Publish</button>
            </form>  
    
        </>
    )
}

export default CreatePost