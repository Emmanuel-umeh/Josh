import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Slider extends React.Component{

    render(){
        return(

            <React.Fragment>


                {/* Hero section */}
<section className="hero-section">
  <div className="hero-slider owl-carousel">
    <div className="hs-item set-bg" data-setbg="/img/bg.jpg">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 text-white">
            <span>New Arrivals</span>
            <h2>denim jackets</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <a href="#" className="site-btn sb-line">DISCOVER</a>
            <a href="#" className="site-btn sb-white">ADD TO CART</a>
          </div>
        </div>
        <div className="offer-card text-white">
          <span>from</span>
          <h2>$29</h2>
          <p>SHOP NOW</p>
        </div>
      </div>
    </div>
    <div className="hs-item set-bg" data-setbg="/img/bg-2.jpg">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 text-white">
            <span>New Arrivals</span>
            <h2>denim jackets</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <a href="#" className="site-btn sb-line">DISCOVER</a>
            <a href="#" className="site-btn sb-white">ADD TO CART</a>
          </div>
        </div>
        <div className="offer-card text-white">
          <span>from</span>
          <h2>$29</h2>
          <p>SHOP NOW</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="slide-num-holder" id="snh-1" />
  </div>
</section>
{/* Hero section end */}

            </React.Fragment>
        )
    }
}


export default withRouter(Slider)