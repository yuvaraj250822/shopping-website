import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Cart() {
   const [cartDetails,setCartDetails] = useState(null)
   const [error,setError]=useState(null);
   const [del,setDel]=useState(true)
   const navigate = useNavigate()

   
    useEffect(()=>{
      axios.get('https://shopping-website-backend-mtnr.onrender.com/api/cart/details')
      .then(data =>{console.log(data.data),setCartDetails(data.data), console.log(data.data.length)})
      .catch(err=>setError(err.message))
      
     
    },[del])
    
    if(!cartDetails){
      return( <>
                {!error?<div>
                  <div class="loader-wrapper">
  <div class="loader">
    <div class="bag-icon">🛍️</div>
    <p class="loading-text">Loading...</p>
  </div>
</div>
                  </div>: <p className='error'>{error}</p>}
              </>)
    }

    const cartTotal= cartDetails.reduce((acc,item)=>acc+item.price,0)

    
    
   const handleCartRemove = async(id)=>{
    await axios.delete(`https://shopping-website-backend-mtnr.onrender.com/api/cart/${id}`)
    .then(setDel(!del)).then(alert("product removed"))
    .catch(err=>console.log("cartErr"+err))
  
}

    const handleCartClear = async ()=>{
       await axios.delete('https://shopping-website-backend-mtnr.onrender.com/api/cart/clearAll')
       .then(setDel(!del)).catch(err =>console.log("Cartclear err"+err))
    }

    const handlePlaceOrder = async (cartDetails)=>{
      try{
        axios.post('https://shopping-website-backend-mtnr.onrender.com/api/products/order/place',cartDetails)
        .then(handleCartClear()).then(alert("order placed"))
      }catch{
        console.log("error for place order")
      }
          
    }
  return (
    <>
        {cartDetails.length >= 1 ? (
  <div className='cart-wrapper'>
    <div className='cart-items'>
      {cartDetails.map(details => (
        <div className='cart-item' key={details.cartId}>
          <img onClick={() => {navigate('/products/' + details.id)}} src={details.imageUrl} alt="Product" />
          <div className='cart-item-info'>
            <h4 onClick={() => {navigate('/products/' + details.id)}}>{details.name}</h4>
            <p className='quantity'>Quantity: 1</p>
            <p className='cart-item-price'>{"Rs."+details.price}</p>
            <button className='remove-btn' onClick={() => {handleCartRemove(details.cartId)}}>Remove</button>
          </div>
        </div>
      ))}
    </div>

    <div className='cart-summary'>
      <div className='total'>
        <span>Total: </span>
        <span>{"Rs."+cartTotal}</span>
      </div>
      <button className='place-order-btn' onClick={() => {handlePlaceOrder(cartDetails, cartTotal)}}>Place Order</button>
    </div>
  </div>
) : (
  <div className='empty-cart'>
    <p>Your cart is empty.</p>
  </div>
)}

            
    </>

   
  )
}

export default Cart