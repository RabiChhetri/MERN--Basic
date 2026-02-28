require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const userRouter=require('./router/userRouter')
const dns=require('dns')
dns.setServers(['8.8.8.8','8.8.4.4'])
const cookieParser=require('cookie-parser')

const app=express()
const corsOption={
    origin:['http://localhost:5173'],
    methods:['POST','GET','PUT','DELETE'],
    allowedHeaders:['Content-Type','Authorization'],
    credentials:true
}

app.use(express.json())
app.use(cors(corsOption))
app.use(cookieParser())

app.use('/api/auth',userRouter)


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('Connected to Database Successfully')
})
.catch((error)=>{
    console.log('Database Connection Error',error)
})

app.listen(3000,()=>{
    console.log('Sever is running on the port 3000')
})