const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,"./public")
    },
    filename:(req,file,cd)=>{
        cd(null,file.originalname)
    }
})
const upload=multer({storage})

module.exports=module