require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const userRouter=require('./router/userRouter')
const dns=require('dns')
dns.setServers(['8.8.8.8','8.8.4.4'])
const app=express()

app.use(express.json())

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