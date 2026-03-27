const orderModel=require('../models/order.model')
const productModel=require('../models/product.model')

async function createOrder(req,res) {
    // console.log(req.body)
    const card=req.body.cart
    let productItems=[]

    for(let item of card){
        console.log(item)
       
    }
}
module.exports={createOrder}