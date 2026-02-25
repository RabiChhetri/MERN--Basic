export const registerUser=async(formData)=>{
    console.log(formData)
    const niceData=new FormData()
    Object.entries(formData).map(([key,value])=>{
        niceData.append(key,value)
    })
    niceData.forEach((key,value)=>{
        console.log(key,":",value)
    })
    return
    try {
      const response=await fetch('http://localhost:3000/api/auth/post',{
      method:'POST',
      body:JSON.stringify(formData)
    })
    const data=await response.json()
    return data
    } catch (error) {
        console.log(error)
    }
}