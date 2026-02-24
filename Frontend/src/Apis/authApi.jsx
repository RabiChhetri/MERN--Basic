export const registerUser=async(formData)=>{
    try {
        const response=await fetch('http://localhost:3000/send',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    const data=await response.json()
    return data
    } catch (error) {
        console.log(error)
    }
}