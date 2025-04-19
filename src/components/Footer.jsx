import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>ShopEase</h3>
          <p>Your one-stop online store for everything!</p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h3>Newsletter</h3>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">🐦</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 ShopEase. All Rights Reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer