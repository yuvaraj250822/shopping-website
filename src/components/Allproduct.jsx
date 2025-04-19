import React from 'react'
import  { useState } from 'react';
import Products from './Products'; 
import NavBar from './NavBar';

function Allproduct() {
    

 const [product,error]=useFetch('http://localhost:8080/api/products')
        if(!product){
          return( <>
                    {!error?<div className='loading'>
                      loading...
                      </div>: <p className='error'>{error}</p>}
                  </>)
        }
      const [searchTerm, setSearchTerm] = useState('');
    
      const filteredProducts = product.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      return (
        <>
          <NavBar onSearch={setSearchTerm} />
          <div className="product-wrap">
            {filteredProducts.map((prod) => (
              <Products key={prod.id}  />
            ))}
          </div>
        </>
      );
    }
    

export default Allproduct