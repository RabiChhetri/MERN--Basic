const orderModel=require('../models/order.model')
const productModel=require('../models/product.model')

async function createOrder(req,res) {
    // console.log(req.body)
    const card=req.body.cart
    let productItems=[]

    for(let item of card){
        console.log(item)
        const product=await productModel.findById({_id:item._id})
        console.log("Product",product)
    }
}
module.exports={createOrder}