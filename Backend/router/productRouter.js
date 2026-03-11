const express=require('express')
const upload=require('../config/multerConfig')
const authMiddlewares=require('../middlewares/auth.middleware')
const productController=require('../controllers/productController')

const router=express.Router()

router.post('/create',upload.single('image'),authMiddlewares.authMiddleware,productController.productUpload)

router.get('/getAllProduct',productController.getProduct)

module.exports=router