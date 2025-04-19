
import NavBar from './NavBar.jsx'
import Products from './Products.jsx'
import useFetch from './useFetch.jsx'

function ProductList() {
    const [product,error]=useFetch('http://localhost:8080/api/products')
    if(!product){
      return( <>
                {!error?<div >
                  <div class="loader-wrapper">
                  <div class="loader">
                    <div class="bag-icon">🛍️</div>
                    <p class="loading-text">Loading your style...</p>
                  </div>
                </div>
                  </div>: <p className='error'>{error}</p>}
              </>)
    }
 
    const productItem = product.map(details =>
        <Products key={details.id} id={details.id}   name ={details.name} title={details.title} image ={details.image} originalPrice ={details.orginalPrize} offerPrice={details.offerprice} />
    )
   

  return (
    <>
      
       <NavBar />
      <div className='product-wrap'>
        {productItem}
       </div>
    </>
  )
}

export default ProductList