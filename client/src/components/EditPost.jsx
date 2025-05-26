import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function EditPost(){
    const {id} = useParams()
    const [post, setPost] = useState()
    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    const navigate = useNavigate()

    useEffect(()=>{
        async function fetchPost(){
            try {
                const res = await fetch(`http://localhost:3000/posts/${id}`)
                const data = await res.json()
                setPost(data)
                setTitle(data.title)
                setContent(data.content)
            } catch (error) {
                console.log('error fetching data : ', error)
            }
        }
        fetchPost()
        console.log('re rendering')
    },[])

    async function updatePost(updatedPost){
        try {
            const res = await fetch(`http://localhost:3000/posts/${id}`, {
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(updatedPost),
        })
        } catch (error) {
            console.log(error)
        } finally {
            return
        }
    }
    
    function handleSaveBtn(e){
        e.preventDefault()

        const updatedPost = {
            id,
            title, 
            content,
        }

        updatePost(updatedPost)
        return navigate(`/posts/${id}`)
    }
        if(post){
            
            return(
                <form id="edit-post" onSubmit={handleSaveBtn}>
                     <h2>Edit Post</h2>
                     <span>Title :</span>
                     <input type="text" placeholder="post title" id="input-title" value={title} required onChange={e=>setTitle(e.target.value)}/>
                     <span>Content :</span>
                     <textarea name="content" id="content" placeholder="post content goes here" rows="10" value={content} required onChange={e=>setContent(e.target.value)}></textarea>
                     <button id="save-changes-btn" type="submit">Save</button>
                 </form>  
             )
        } else{
            return <h2>loading...</h2>
        }
        
    }
    
export default EditPost