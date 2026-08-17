const getAllPosts= (req,res)=>{
    res.status(200).json({message:'All post feteched succesfully '})
}

module.exports={ getAllPosts}