const jwt=require('jsonwebtoken')
const userModel=require('../models/user.model')
async function authMiddleware(req,res,next) {
    try {
        const token=req.cookies.token
        console.log(token)
        if(!token){
            res.status(401).json({
                message:'Unathorized,token is missing'
            })
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const userId=decoded.userId
        console.log(userId)
        if(userId){
            const userData=await userModel.findOne({_id:userId},"-password")
            console.log(userData)
        }
    } catch (error) {
        console.log('Internal server error',error)
    }
    
}
module.exports={authMiddleware}