const express = require('express')
const app = express()
const PORT =300
app.get('/',(req,res)=>{
    res.send("Welcome to the Blogify API")
})
app.get('/api/v1/posts',(req,res)=>{
    res.send('Sending all blogs...')
})
const post = [
    {id:1,tittle:"Welcome to the blog"},
    {id:2,tittle:"my second post"}
]
app.get('/api/v1/post',(req,res)=>{
    res.json(post)
})
app.post('/api/v1/posts',(req,res)=>{
    res.send('The post is made successfully.')
})
app.listen(PORT, ()=>{
    console.log("Server is runnig at http://localhost:"+PORT)
})