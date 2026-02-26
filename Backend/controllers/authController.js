const userModel=require('../models/user.model')


async function registerUser(req,res) {
   try {
     const {name,email,phone,password}=req.body
    const isUserAlreadyExists=await userModel.findOne({email:email})
    if(isUserAlreadyExists){
       return res.status(401).json({
        message:'Email already exists'
        })
    }
    const user=await userModel.create({
        name,email,phone,password
    })
    res.status(201).json({
        message:'User register Successfully',
        user
    })
   } catch (error) {
    console.log('Inetrnal Error',error)
    res.status(500).json({message:'Server Error'})
   }
    
}

async function loginUser(req,res) {
    
}

module.exports={registerUser,loginUser}