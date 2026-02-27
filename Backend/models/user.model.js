const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

userSchema.pre('save',async function() {
    const user=this
    if(!user.isModified('password')){
        return
    }
    const salt=await bcrypt.genSalt(10)
    user.password=await bcrypt.hash(user.password,salt)
    return
})
userSchema.methods.generateToken=function(){
    return jwt.sign({
        userId:this._id,
        email:this.email
    },process.env.JWT_SECRET,{expiresIn:'3d'})
}

const userModel=mongoose.model('User',userSchema)
module.exports=userModel

