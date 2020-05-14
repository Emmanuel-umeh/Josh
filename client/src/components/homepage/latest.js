import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Latest extends React.Component{


    render(){
        return(
            <React.Fragment>
                {/* letest product section */}
<section className="top-letest-product-section">
  <div className="container">
    <div className="section-title">
      <h2>LATEST PRODUCTS</h2>
    </div>
    <div className="product-slider owl-carousel">
      <div className="product-item">
        <div className="pi-pic">
          <img src="./img/product/1.jpg" alt="" />
          <div className="pi-links">
            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
          </div>
        </div>
        <div className="pi-text">
          <h6>$35,00</h6>
          <p>Flamboyant Pink Top </p>
        </div>
      </div>
      <div className="product-item">
        <div className="pi-pic">
          <div className="tag-new">New</div>
          <img src="./img/product/2.jpg" alt="" />
          <div className="pi-links">
            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
          </div>
        </div>
        <div className="pi-text">
          <h6>$35,00</h6>
          <p>Black and White Stripes Dress</p>
        </div>
      </div>
      <div className="product-item">
        <div className="pi-pic">
          <img src="./img/product/3.jpg" alt="" />
          <div className="pi-links">
            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
          </div>
        </div>
        <div className="pi-text">
          <h6>$35,00</h6>
          <p>Flamboyant Pink Top </p>
        </div>
      </div>
      <div className="product-item">
        <div className="pi-pic">
          <img src="./img/product/4.jpg" alt="" />
          <div className="pi-links">
            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
          </div>
        </div>
        <div className="pi-text">
          <h6>$35,00</h6>
          <p>Flamboyant Pink Top </p>
        </div>
      </div>
      <div className="product-item">
        <div className="pi-pic">
          <img src="./img/product/6.jpg" alt="" />
          <div className="pi-links">
            <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
            <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
          </div>
        </div>
        <div className="pi-text">
          <h6>$35,00</h6>
          <p>Flamboyant Pink Top </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* letest product section end */}

            </React.Fragment>
        )
    }
}


export default withRouter(Latest)