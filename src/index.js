const express = require('express')
const app = express()
const PORT =300
app.get('/',(req,res)=>{
    res.send("Welcome to the Blogify API")
})
app.listen(PORT, ()=>{
    console.log("Server is runnig at http://localhost:"+PORT)
})