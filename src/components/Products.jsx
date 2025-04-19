
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createContext } from 'react';
import { FaChevronDown } from "react-icons/fa";


function Products(props) {
    const navigate = useNavigate()
    const usecontext = createContext() 
  return (
         <div className='product' >
          <img onClick={()=>{navigate('/products/'+props.id)}} src={props.image} alt="image" />
          <h4 onClick={()=>{navigate('/products/'+props.id)}}>{props.name}</h4>
          <h4>{props.title}</h4>
          <p className='off-price'>Offer price: {"Rs."+props.offerPrice}</p>
          <p className='price-Strik'>{"Rs."+props.originalPrice}</p>
          <button className='view-more-btn' onClick={()=>{navigate('/products/'+props.id)}}>View More<FaChevronDown /></button>
        </div>
  )
 
}

export default Products;