// export const registerUser = async (formData) => {
//   const niceData = new FormData();
//   Object.entries(formData).map(([key, value]) => {
//     niceData.append(key, value);
//   });
//     niceData.forEach((key,value)=>{
//        console.log(key,":",value)
//    })
//   try {
//     const response = await fetch("http://localhost:3000/api/auth/post", {
//       method: "POST",
//       body: niceData,
//       credentials: "include",
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Internal Error",error)
//   }
// };

export const registerUser=async(data)=>{
    const niceData=new FormData()
    Object.entries(data).map(([key,value])=>{
        niceData.append(key,value);
    })
    try {
        const response=await fetch('http://localhost:3000/api/auth/post',{
            method:'POST',
            body:niceData,
            credentials:'include'
        })
        const data=await response.json()
        return data
    } catch (error) {
        console.log('Ineternal Error',error)        
    }

}