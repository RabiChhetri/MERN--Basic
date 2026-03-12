export const createOrder=async({cart})=>{
    try {
        const response=await fetch('http://localhost:3000/api/order/createOrder',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({cart}),
            credentials:'include'
        })
        const result=await response.json()
        return result
    } catch (error) {
        console.log('Internal error',error)
    }
}