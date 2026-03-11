const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        
    }
},{timestamps:true})

const productModel=mongoose.model('Products',productSchema)
module.exports=productModel