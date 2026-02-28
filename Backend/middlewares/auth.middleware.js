const jwt=require('jsonwebtoken')
const userModel=require('../models/user.model')
async function authMiddleware(req,res,next) {
    try {
        const token=req.cookies.token
        console.log(token)
        if(!token){
            res.status(201).json({
                message:'Unauthorized,Token is missing'
            })
        }
    } catch (error) {
        console.log('Internal server error',error)
    }
    
}
module.exports={authMiddleware}