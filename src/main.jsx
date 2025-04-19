
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import EachProductDetails from './components/EachProductDetails'
import PageNotFound from './components/PageNotFound'
import Myorders from './components/Myorders'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<PageNotFound/>
  },
  {
    path:'/products',
    element:<ProductList />,
  },
  {
    path:'/cart/details',
    element:<Cart />
  },
  {
    path:'/products/:id',
    element:<EachProductDetails />
  },
  {
    path:'/products/order/details',
    element:<Myorders/>
  }
])

createRoot(document.getElementById('root')).render(
  <div>
    <RouterProvider router={router} />
  </div>
)
