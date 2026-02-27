async function authMiddleware(req,res,next) {
    try {
        console.log('data')
    } catch (error) {
        console.log('Internal server error',error)
    }
    
}
module.exports={authMiddleware}