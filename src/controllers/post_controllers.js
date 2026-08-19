let posts=[
    {id:1, tittle:"My first post",date:'2026-08-19'},
    {id:2, tittle:"My second post",date:'2026-08-20'},
]
const getAllPosts= (req,res)=>{
    const {sortby }=req.query
if (sortby=='date'){
    posts.sort((a,b)=>{
        return new Date(b.date)-new Date(a.date)
        console.log("posts have been sorted by date")
    })
}
    res.status(200).json({message:'All post feteched succesfully ',
        data: posts
    })
}

module.exports={ getAllPosts}