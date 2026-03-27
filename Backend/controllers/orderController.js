const orderModel=require('../models/order.model')
const productModel=require('../models/product.model')

async function createOrder(req,res) {
    // console.log(req.body)
    try {
       const card=req.body.cart
       const productItems=[]

       for(let item of card){
        // console.log(item)
        const product=await productModel.findById({_id:item._id})
        console.log("Product",product)
      if(!product){
         return res.status(404).json({
            message:"Product is Not Found"
         })
      }
      productItems.push(product._id)
      console.log(productItems)
      }
      const cardPrice=card.reduce((accumulator,currentValue)=>{
         return accumulator+parseInt(currentValue.price)
      },0)
      console.log("card",cardPrice)

    } catch (error) {
        console.log(error)
    }
    
   }
module.exports={createOrder}