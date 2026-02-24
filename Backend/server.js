const express=require('express')


const app=express()


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
    const{name,email,phone,password}=req.body
    res.status(201).json({
        message:'User Created Sucessfully',
        name,
        email,
        phone,
        password
    })
})

app.listen(5000,()=>{
    console.log('Server is running on the port 5000')
})