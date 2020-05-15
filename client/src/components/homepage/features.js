import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

class Features extends React.Component{

    render(){
        return(
            <React.Fragment>

                {/* Features section */}
<section className="features-section" style ={{marginTop : "-50px"}}> 
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 p-0 feature">
        <div className="feature-inner">
          <div className="feature-icon">
            <img src="img/icons/1.png" alt="#" />
          </div>
          <h2>Fast Secure Payments</h2>
        </div>
      </div>
      <div className="col-md-4 p-0 feature">
        <div className="feature-inner">
          <div className="feature-icon">
            <img src="img/icons/2.png" alt="#" />
          </div>
          <h2>Premium Products</h2>
        </div>
      </div>
      <div className="col-md-4 p-0 feature">
        <div className="feature-inner">
          <div className="feature-icon">
            <img src="img/icons/3.png" alt="#" />
          </div>
          <h2>Free &amp; fast Delivery</h2>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Features section end */}

            </React.Fragment>
        )
    }
}


export default withRouter(Features)