import {Client} from 'pg'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(express.json())
app.use(cors())

const client = new Client({
    user: process.env.USER,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    port:process.env.PORT,
    database:process.env.DATABASE
})

await client.connect().then(()=>console.log('connected to db'))

app.post('/posts', (req, res)=>{
    const {title, content} = req.body
    const insertQuery = 'INSERT INTO posts (title, content) VALUES ($1, $2)'

    client.query(insertQuery,[title, content],(err, result)=>{
        if(err){
            res.send(err)
        } else {
            console.log(result)
            res.send('Post Created')
        }
    })
})

app.get('/posts', (req, res)=>{
    const fetchQuery = "Select * from posts"
    client.query(fetchQuery, (err, result)=>{
        if (err){
            res.send(err)
        } else {
            res.send(result.rows)
        }

    })
})

app.get('/posts/:id', (req, res)=>{
    const id = req.params.id
    const fetchQuery = "Select * from posts where id = $1"
    client.query(fetchQuery, [id], (err, result)=>{
        if(err){
            res.send(err)
        } else {
            res.send(result.rows[0])
        }
    })
})

app.put('/posts/:id', (req, res)=>{
    const id = req.params.id
    const {title, content} = req.body
    const updateQuery = "UPDATE posts SET title = $1, content=$2 WHERE id = $3"
    client.query(updateQuery, [title, content, id], (err, result)=>{
        if(err){
            res.send(err)
        } else {
            res.send('record updated')
        }
    })
})

app.delete('/posts/:id', (req, res)=>{
    const id = req.params.id
    const deleteQuery = "Delete from posts where id=$1"
    client.query(deleteQuery, [id], (err, result)=>{
        if(err){
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3000,()=>{
    console.log('server running on port 3000')
})