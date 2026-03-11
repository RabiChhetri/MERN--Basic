const productModel=require('../models/product.model')
const uploadOnCloudinary=require('../config/cloudinary')

async function productUpload(req,res) {
    const {name,price}=req.body
    if(!name || !price){
        return res.status(403).json({
            message:'name or price is missing'
        })
    }
    const imageUrl=await uploadOnCloudinary(req.file.path)
    const product=await productModel.create({
      name,
      price,
      imageUrl
    })
    res.status(201).json({
      message:'Product Added Successfully',
      product
    })
}
module.exports={productUpload}