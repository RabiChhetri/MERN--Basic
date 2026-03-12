const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products'
    },
    total:{
        type:Number,
    },
    status:{
        type:String,
        enum:['pending','completed','cancel'],
        default:'pending'
    }
},{timestamps:true})

const orderModel=mongoose.model('Order',orderSchema)
module.exports=orderModel