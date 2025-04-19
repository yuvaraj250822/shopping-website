import { useEffect, useState } from "react"

const useFetch =(api)=>{
    const [product,setProduct]=useState(null)
    const [error,setError]=useState(null)

    useEffect( ()=>{
      
       fetch(api)
       .then(res => res.json()).then(data =>
        {
          console.log(data)
          return setProduct(data)
        }).catch((error)=> setError(error.message))
    },[])
    return ([product,error]);
}
export default useFetch;