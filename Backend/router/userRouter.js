const express=require('express')
const authController=require('../controllers/authController')
const upload=require('../config/multerConfig')
const authMiddlewares=require('../middlewares/auth.middleware')

const router=express.Router()

router.post('/post', upload.none(),authController.registerUser)

router.post('/login',upload.none(),authController.loginUser)

router.get('/getUserData',authMiddlewares.authMiddleware,authController.getUserDetails)


module.exports=router