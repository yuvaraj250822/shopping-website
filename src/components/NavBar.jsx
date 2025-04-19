import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import logo from "./icon/1744974446444.jpg"

function NavBar({ onSearch }) {

  const handleSearch =(e)=>{
    onSearch(e.target.value)
    
  }


  return (
    <div className='nav-bar'>
        <nav>
          <Link to={'/'}>
          <img className='logo' src={logo} />
          </Link>
       
        <div>
        <input placeholder='Search..' type="text" onChange={(e)=>handleSearch(e)}/>
        <IoSearchOutline className='search-icon' />
        </div>
       
        <ul>
            <Link  className='nav-link' to='/cart/details'><FiShoppingCart className='cart-icon' /></Link> 
        </ul>
    </nav>
    </div>
   
  )
}

export default NavBar