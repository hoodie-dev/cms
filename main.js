document.addEventListener('DOMContentLoaded', ()=>{
    const link = document.getElementById('addPost')
    const main = document.getElementById('main')
    if(link) {
        link.addEventListener('click', (e)=>{
            e.preventDefault()
            main.innerHTML=`
            <section id="create-post">
                <h2>Create Post</h2>
                <span>Title :</span>
                <input type="text" placeholder="post title">
                <span>Content :</span>
                <textarea name="content" id="content" placeholder="post content goes here" rows="10"></textarea>
                <button>Publish</button>
            </section>  `
        })
    }
   
})