import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Myorders() {
    const [ordersData,setOrdersData]=useState(null);
    const [error,setError]=useState(null);
    const [status, setStatus] = useState("ariving");
    useEffect(()=>{
        axios.get('http://localhost:8080/api/products/order/details')
        .then(res=>{console.log(res.data),setOrdersData(res.data)})
        .catch(err=>{console.log(err.message),setError(err.message)})
    },[])

      if(!ordersData){
        return <>{!error? <p>loading...</p>:<p>{error}</p>}</>
      }

      const handleOrderCancel =(id)=>{
        axios.post(`'http://localhost:8080/api/products/order/${id}`,{"orderStatus" : "canceled"}).then(setStatus("canceled"))
      }
        

  return (
    <div>
      {ordersData ? 
      <div >
        {ordersData.map((data)=>
          <div key={data.orderId} className='orders'>
          <img src={data.imageUrl} alt="image" />
          <h4>{data.name}</h4>
          <p>1 </p>
          <p>{data.OrderStatus}</p>
          <button  onClick={()=>{handleOrderCancel
            (data.orderId)
          }}>order cancel</button>
        </div>)
        }
      </div>:<p>empty order</p>}
    </div>
  )
}

export default Myorders