import React, { Component } from 'react'

import {Link,withRouter} from 'react-router-dom'

class Header extends React.Component{


    render(){

        return(
<React.Fragment>
{/* Header section */}
<header className="header-section">
  <div className="header-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-2 text-center text-lg-left">
          {/* logo */}
          <a href="./index.html" className="site-logo">
            <img src="img/logo.png" alt="" />
          </a>
        </div>
        <div className="col-xl-6 col-lg-5">
          <form className="header-search-form">
            <input type="text" placeholder="Search on divisima ...." />
            <button><i className="flaticon-search" /></button>
          </form>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="user-panel">
            <div className="up-item">
              <i className="flaticon-profile" />
              <a href="#">Sign</a> In or <a href="#">Create Account</a>
            </div>
            <div className="up-item">
              <div className="shopping-card">
                <i className="flaticon-bag" />
                <span>0</span>
              </div>
              <a href="#">Shopping Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav className="main-navbar">
    <div className="container">
      {/* menu */}
      <ul className="main-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* <li><a href="#">Jewelry
            <span className="new">New</span>
          </a></li> */}
        {/* <li><a href="#">Shoes</a>
          <ul className="sub-menu">
            <li><a href="#">Sneakers</a></li>
            <li><a href="#">Sandals</a></li>
            <li><a href="#">Formal Shoes</a></li>
            <li><a href="#">Boots</a></li>
            <li><a href="#">Flip Flops</a></li>
          </ul>
        </li> */}
        {/* <li><a href="#">Pages</a>
          <ul className="sub-menu">
            <li><a href="./product.html">Product Page</a></li>
            <li><a href="./category.html">Category Page</a></li>
            <li><a href="./cart.html">Cart Page</a></li>
            <li><a href="./checkout.html">Checkout Page</a></li>
            <li><a href="./contact.html">Contact Page</a></li>
          </ul>
        </li> */}
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
  </nav>
</header>
{/* Header section end */}
</React.Fragment>
        )
    }
}


export default withRouter(Header)