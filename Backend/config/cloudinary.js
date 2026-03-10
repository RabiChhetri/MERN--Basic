const cloudinary=require('cloudinary').v2
const fs=require('fs')

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDNARY_SECRET_KEY
})

async function uploadOnCloudinary(filepath) {
    try {
        const uploadResult=await cloudinary.uploader.upload(filepath)
        fs.unlinkSync(filepath)
        return uploadResult.secure_url
    } catch (error) {
        if(fs.existsSync){
            fs.unlinkSync(filepath)
        }
    }
    throw new Error('Cloudinary Uplaod failed')
}

module.exports={uploadOnCloudinary}