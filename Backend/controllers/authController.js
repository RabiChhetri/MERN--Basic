const userModel=require('../models/user.model')
const bcrypt=require('bcryptjs')

async function registerUser(req,res) {
   try {
     const {name,email,phone,password}=req.body
    const isUserAlreadyExists=await userModel.findOne({email:email})
    if(isUserAlreadyExists){
       return res.status(409).json({
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
    try {
        const {email,password}=req.body
    const isUserAlreadyExists=await userModel.findOne({email:email})
    if(isUserAlreadyExists){
        const isValidPassword=await bcrypt.compare(password,isUserAlreadyExists.password)
        if(isValidPassword){
            return res.status(200).json({
                message:'Login Sucessfully'
            })
        }else{
            return res.status(401).json({
                message:'Invalid Credentials'
            })
        }
    }
    } catch (error) {
        console.log('Inetrnal Error',error)
        res.status(500).json({message:'Server Error'})
    }
}

module.exports={registerUser,loginUser}