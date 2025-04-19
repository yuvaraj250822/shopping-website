import React from 'react'
import useFetch from './useFetch'
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';

function EachProductDetails() {
  const {id} = useParams();
  const [details,error]=useFetch(`http://localhost:8080/api/products/${id}`);
  if(!details){
    return( <>
              {!error?<div>
                <div class="loader-wrapper">
                                  <div class="loader">
                                    <div class="bag-icon">🛍️</div>
                                    <p class="loading-text">Loading your style...</p>
                                  </div>
                                </div>
              </div>: <p className='error'>{error}</p>}
            </>)
  }

  const addCart = async (id,name,image,price)=>{
    const addData ={
      "id":id,
      "name":name,
      "imageUrl":image,
      "price":price
    }
      axios.post('http://localhost:8080/api/cart/add',addData)
    console.log(id,name,price,image)
    alert('cart added successfully')
  }
  return (
    <>
      <NavBar/>
      <div className='detailed-product-wrap'>
          <div>
            <img src={details.image} alt="" />
          </div>
          <div className='each-product-details'>
            <h1>{details.name}</h1>
            <h2>{details.title}</h2>
            <h3>{"category : "+details.category}</h3>
            <p>{"stocks : "+details.delivery}</p>
            <p className='off-price'>{"Rs."+details.offerprice}</p>
            <p className='price-Strik'>{"Rs."+details.orginalPrize}</p>
            {0<details.delivery ? <>
              <button className='add-cart-btn' onClick={()=>addCart(details.id,details.name,details.image,details.offerprice)}>AddCart</button>
            </>:<p className='unavailable'>Unavailable</p>}
          
          </div>
      </div>
    </>
  )
}

export default EachProductDetails