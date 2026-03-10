const productModel=require('../models/product.model')
const uploadOnCloudinary=require('../config/cloudinary')

async function productUpload(req,res) {
    const {name,price}=req.body
    if(!name || !price){
        return res.status(403).json({
            message:'name or price is missing'
        })
    }
    console.log(req.file)
    console.log(name,price)

    const imageUrl=await uploadOnCloudinary(req.file.path)
    console.log(imageUrl)
}
module.exports={productUpload}