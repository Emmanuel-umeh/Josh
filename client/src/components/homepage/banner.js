import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

class Banner extends React.Component{


    render(){
        return(


            <React.Fragment>
    <section className="banner-section">
  <div className="container">
    <div className="banner set-bg" data-setbg="https://www.seattlespermbank.com/wp-content/uploads/2018/09/underwear-affects-sperm-production.jpg">
      <div className="tag-new">NEW</div>
      <span>New Arrivals</span>
      <h2>STRIPED UNDERWEAR</h2>
      <a href="#" className="site-btn">SHOP NOW</a>
    </div>
  </div>
</section>


            </React.Fragment>
        )
    }
}

export default withRouter(Banner)