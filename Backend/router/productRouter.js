const express=require('express')
const multerConfig=require('../config/multerConfig')
const authMiddlewares=require('../middlewares/auth.middleware')

const router=express.Router()

router.post('/create',authMiddlewares.authMiddleware)

module.exports=router