const registerUser=async(req,res)=>{
    try {
        const{name,email,phone,password}=req.body
        res.status(201).json({
            message:'User Created Sucessfully',
            name,
            email,
            phone,
            password
        })
    } catch (error) {
        console.log('Internal Error',error)
    }
}
module.exports={registerUser}