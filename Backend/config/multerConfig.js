const multer=require('multer')

const storage=multer.memoryStorage()

const upload={
    storage:storage,
    limits:{
        fullSize:50*1024*1024
    }
}
module.exports=upload