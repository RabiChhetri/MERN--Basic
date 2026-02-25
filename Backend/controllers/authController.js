const registerUser=async(req,res)=>{
    try {
        console.log(req.body)
    } catch (error) {
        console.log('Internal Error',error)
    }
}
module.exports={registerUser}