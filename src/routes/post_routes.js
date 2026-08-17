const { Router } = require('express')
const postController= require('../controllers/post_controllers')
const router = Router()
router.get('/',postController.getAllPosts)
module.exports=router
