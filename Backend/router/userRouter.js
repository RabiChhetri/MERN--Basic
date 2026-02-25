const express=require('express')
const authController=require('../controllers/authController')
const upload=require('../config/multerConfig')

const router=express.Router()

router.post('/post', upload.none(), authController.registerUser)

module.exports=router