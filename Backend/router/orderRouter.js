const express=require('express')
const authMiddlewares=require('../middlewares/auth.middleware')
const orderController=require('../controllers/orderController')

const router=express.Router()

router.post('/createOrder',authMiddlewares.authMiddleware,orderController.createOrder)

module.exports=router