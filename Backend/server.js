const express=require('express')
const cors=require('cors')

const corsOption={
    origin:['http://localhost:5173'],
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type','Authorization'],
    credentials:true
}
const app=express()

app.use(cors(corsOption))
app.use(express.json())

app.post('/post',(req,res)=>{
    const {name,password}=req.body
    res.status(201).json({
        mesaage:'Creadted  Successfully',
        name,
        password
    })
})
app.get('/get',(req,res)=>{
    res.status(200).json({
        message:'Fetch sucessfully'
    })
})
app.post('/send',(req,res)=>{
    console.log(req.body)
    const{name,email,phone,password}=req.body
    res.status(201).json({
        message:'User Created Sucessfully',
        data:{
            name,
            email,
            phone,
            password
        }
    })
})

app.listen(3000,()=>{
    console.log('Server is running on the port 3000')
})