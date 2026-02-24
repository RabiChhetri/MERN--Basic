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

app.listen(5000,()=>{
    console.log('Server is running on the port 5000')
})