import React from "react"
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom"

function Card(props){
    const {post} = props

    const navigate = useNavigate()

    async function deletePost(id){
        const res = await fetch(`http://localhost:3000/posts/${id}`,{
            method:"DELETE"
        })
        return
    }

    return (
        <section className="card" key={post.id}>
            <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="" className="card-image" />
            <h4 className="card-title">{post.title}</h4>
            <p className="card-content">{`${post.content} Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
            <div className="card-btn-wrapper">
                <button className="card-btn-read-more" onClick={()=>{return navigate(`/posts/${post.id}`)}}>Read More</button>
                <button className="card-btn-edit" onClick={()=> {return navigate(`/posts/${post.id}/edit`)}}><MdEdit size={20}/></button>
                <button className="card-btn-delete" onClick={()=>deletePost(post.id)}><MdDelete size={20}/></button>
            </div>    
        </section>
    )
}

export default Card