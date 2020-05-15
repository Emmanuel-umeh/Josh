import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import './animate.css'

class Slider extends React.Component{

    render(){
        return(

            <React.Fragment>

      {/* <!-- Hero section --> */}
      <section class="hero-section" style ={{marginTop : "-18px"}}>
        <div class="hero-slider">
      
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/img/bg.jpg" alt="First slide" />
      <div class="carousel-caption d-none d-md-block">
      <section class="animation-box">
    <div class="first-text">Welcome to Ayewah Store</div>
    {/* <div class="second-text">This is another example text</div>
    <div class="third-text">This is an example of vertical text</div>
    <div class="fourth-text">I will not move, just fade</div>
    <div class="fifth-text">Final text, now I am done</div> */}
  </section>

  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/img/bg-2.jpg" alt="Second slide" />
      <div class="carousel-caption d-none d-md-block">
    <h5>Something</h5>
    <p>Somethin</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/img/bg.jpg" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
    <h5>Something</h5>
    <p>Somethin</p>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
        <div class="container">
          <div class="slide-num-holder" id="snh-1"></div>
        </div>
      </section>
      {/* <!-- Hero section end --> */}


            </React.Fragment>
        )
    }
}


export default withRouter(Slider)