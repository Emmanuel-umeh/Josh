import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

import '../Cart/button.css'

import Modal from "react-awesome-modal"
class Trending extends React.Component{

  state=  {
    visible :false
  }

   
  openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}

    render(){

      const {items} = this.props.items
      console.log("items ", items)



return(
    <React.Fragment>
        {/* Product filter section */}
<section className="product-filter-section">
  <div className="container">
    <div className="section-title">
      <h2 style ={{fontSize: "48px",
	fontWeight: "700"}}>BROWSE TOP SELLING PRODUCTS</h2>
    </div>
    <ul className="product-filter-menu">
      <li><a href="#">TOPS</a></li>
      <li><a href="#">JUMPSUITS</a></li>
      <li><a href="#">LINGERIE</a></li>
      <li><a href="#">JEANS</a></li>
      <li><a href="#">DRESSES</a></li>
      <li><a href="#">COATS</a></li>
      <li><a href="#">JUMPERS</a></li>
      <li><a href="#">LEGGINGS</a></li>
    </ul>
    <div className="row">

      {items.map((item, key) =>(
    <div className="col-lg-3 col-sm-6" key={key}>
    <div className="product-item">
      <div className="pi-pic">
        <img src={item.imageUrl} alt="" />
        <div className="pi-links">
          <a href={null} className="add-card"><i className="flaticon-bag" /><span onClick = {
            ()=>{
              console.log("key" , key)
              console.log("item" , items[key])
              // const data = JSON.stringify(items[key])
              var existing =  JSON.parse(localStorage.getItem('cart'))
              if(existing === null) existing = []
             if(existing) {
             existing.push(items[key]) 
                localStorage.setItem("cart", JSON.stringify(existing));

                this.openModal()
              
              } else{

                localStorage.setItem(`cart`, items[key])
                this.openModal()
              }  

            
            }
          } >ADD TO CART</span></a>
          <a href={null}  className="wishlist-btn"><i className="flaticon-heart" onClick = {
            ()=>{
              console.log("key" , key)
              console.log("item" , item.name)
            }
          }  /></a>
        </div>
      </div>
      <div className="pi-text">
        <h6>₦{item.price}</h6>
        <p  style ={{fontSize: "20px",
	fontWeight: "700"}}>{item.name} </p>
      </div>
    </div>
  </div>





      ))}
  
  <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className = "container">
                        <h2>Item Has Been Added To Cart</h2>
                        {/* <p>Some Contents</p> */}
                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                        <a href="#" style ={{width : "100%"}} onClick = {()=>{
                          this.closeModal()
                          this.props.history.push("/cart")
                        }} class="btn10">
     <span>Checkout</span>
  <div class="transition"></div>
</a>
<br></br>
                        <a href="#" class="btn11" onClick = {()=>{
                          this.closeModal()
                          // this.props.history.push("/cart")
                        }} >
     <span>Continue Shopping</span>
  <div class="transition"></div>
</a>
                    </div>
                </Modal>


   </div>
    {/* <div className="text-center pt-5">
      <button className="site-btn sb-line sb-dark">LOAD MORE</button>
    </div> */}
  </div>
</section>
{/* Product filter section end */}

    </React.Fragment>
)
    }
}


const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error,
  items : state.items
});
export default connect(mapStateToProps, {})(withRouter(Trending)
  
);