export const createProduct=async({product})=>{
     const data=new FormData()
    Object.entries(product).map(([key,value])=>{
        data.append(key,value)
    })
    try {
        const response=await fetch('http://localhost:3000/api/product/create',{
            method:'POST',
            body:data,
            credentials:'include'
        })
        if(!response.ok){
            return 'error'
        }
        const productdata=await response.json()
        return productdata
    } catch (error) {
        throw new Error("Internal server",error)
    }
}
export const getProductDetails=async()=>{
    try {
        const response=await fetch('http://localhost:3000/api/product/getAllProduct',{}
        )
        const productData=await response.json()
        return productData
    } catch (error) {
        console.log("Internal Server Error",error)
    }

}
