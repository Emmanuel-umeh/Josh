import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import store from '../../store';
import {getSingleItem} from '../../actions/itemActions'
import Lottie from "react-lottie"
import Modal from 'react-awesome-modal'
import Footer from '../homepage/footer'

import * as Loading from '../LottieFiles/JoshLoading.json'
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
    }
class SinglePage extends Component{

    state = {
        Loading : false,
        data : null,
        visible : false
    }

    componentDidMount(){
        this.setState({
            Loading : true
        })
        // console.log(this.state.props.params.id)
        let id = new URLSearchParams(window.location.search).get("id");
        console.log(id)
if(id !==null){
    store.dispatch(getSingleItem(id))
}
     
    }


    componentDidUpdate(prevProps){

        if(prevProps.items.singleItem !== this.props.items.singleItem){
            console.log(this.props.items.singleItem)
            this.setState({
                Loading : false,
                data : this.props.items.singleItem
            })
        }
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

    const item  =this.state.data

    console.log(item)
     return(


        <React.Fragment>

<div>
  {/* Page info */}
  <div className="page-top-info">
    <div className="container">
      <h4>Category Page</h4>
      <div className="site-pagination">
        <Link to ="/">Home</Link> /
        <a href>Shop</a>
      </div>
    </div>
  </div>
  {/* Page info end */}
  {/* product section */}
  <section className="product-section">
    <div className="container">
      <div className="back-link">
        <Link to="/"> &lt;&lt; Back to Home</Link>
      </div>
      <div className="row">

      {this.state.Loading === false? 
      <React.Fragment>
        <div className="col-lg-6">
          <div className="product-pic-zoom">
            <img className="product-big-img" src={item ? item.imageUrl : null} alt="" />
          </div>
          <div className="product-thumbs" tabIndex={1} style={{overflow: 'hidden', outline: 'none'}}>
            <div className="product-thumbs-track">
              <div className="pt active" data-imgbigurl={item ? item.imageUrl : null}><img src={item ? item.imageUrl : null} alt="" /></div>
              <div className="pt" data-imgbigurl="img/single-product/2.jpg"><img src="img/single-product/thumb-2.jpg" alt="" /></div>
              <div className="pt" data-imgbigurl="img/single-product/3.jpg"><img src="img/single-product/thumb-3.jpg" alt="" /></div>
              <div className="pt" data-imgbigurl="img/single-product/4.jpg"><img src="img/single-product/thumb-4.jpg" alt="" /></div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 product-details">
          <h2 className="p-title">{item ? item.name : null}</h2>
          <h3 className="p-price">₦{item ? item.price : null}</h3>
          <h4 className="p-stock">Available: {item ? item.quantityLeft : null}<span>{item ? item.quantityLeft > 0 ? " In Stock" : "Out Of Stock" : null}</span></h4>
          <div className="p-rating">
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o fa-fade" />
          </div>
          <div className="p-review">
            <a href>{item ? item.rating : null} reviews</a>|<a href>Add your review</a>
          </div>
          <div className="fw-size-choose">
            <p>Size</p>
            <div className="sc-item">
              <input type="radio" name="sc" id="xs-size" />
              <label htmlFor="xs-size">32</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="s-size" />
              <label htmlFor="s-size">34</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="m-size" defaultChecked />
              <label htmlFor="m-size">36</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="l-size" />
              <label htmlFor="l-size">38</label>
            </div>
            <div className="sc-item disable">
              <input type="radio" name="sc" id="xl-size" disabled />
              <label htmlFor="xl-size">40</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="xxl-size" />
              <label htmlFor="xxl-size">42</label>
            </div>
          </div>
          <div className="quantity">
            <p>Quantity</p>
            <div className="pro-qty"><input type="number" defaultValue={1} /></div>
          </div>
          <a href="#" className="site-btn" onClick = {()=>{


var data = localStorage.getItem('cartId');


if(data && data.includes(item._id)){
   return  alert(" Already In Cart")
}

   // append the full data to local storage
   console.log("item" , item)
//    console.log("item" , items[key])
   // const data = JSON.stringify(items[key])
   var existing =  JSON.parse(localStorage.getItem('cart'))
   if(existing === null) existing = []
  if(existing) {
  existing.push(item) 
     localStorage.setItem("cart", JSON.stringify(existing));

     this.openModal()
   
   } else{

     localStorage.setItem(`cart`, item)
     this.openModal()
   }  


   // append id of the data to local storage array

   // Get the existing data
var existing = localStorage.getItem('cartId');

// If no existing data, create an array
// Otherwise, convert the localStorage string to an array
existing = existing ? existing.split(',') : [];

// Add new data to localStorage Array
existing.push(`${item._id}`);

// Save back to localStorage
localStorage.setItem('cartId', existing.toString());

          }} >Add To Cart</a>
          <div id="accordion" className="accordion-area">
            <div className="panel">
              <div className="panel-header" id="headingOne">
                <button className="panel-link active" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">information</button>
              </div>
              <div id="collapse1" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="panel-body">
                  <p>{item ? item.description : null}</p>
                  {/* <p>Approx length 66cm/26" (Based on a UK size 8 sample)</p>
                  <p>Mixed fibres</p>
                  <p>The Model wears a UK size 8/ EU size 36/ US size 4 and her height is 5'8"</p> */}
                </div>
              </div> 
            </div>
            <div className="panel">
              <div className="panel-header" id="headingTwo">
                <button className="panel-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">care details </button>
              </div>
              <div id="collapse2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="panel-body">
                  <img src={item ? item.imageUrl : null} alt="" />
                <p>{item ? item.description : null}</p>
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-header" id="headingThree">
                <button className="panel-link" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">shipping &amp; Returns</button>
              </div>
              <div id="collapse3" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="panel-body">
                  <h4>7 Days Returns</h4>
                  <p>Cash on Delivery Available<br />Home Delivery <span>3 - 4 days</span></p>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="social-sharing">
            <a href><i className="fa fa-google-plus" /></a>
            <a href><i className="fa fa-pinterest" /></a>
            <a href><i className="fa fa-facebook" /></a>
            <a href><i className="fa fa-twitter" /></a>
            <a href><i className="fa fa-youtube" /></a>
          </div>
        </div>
        </React.Fragment>
     : 

     <div>
         <Lottie options ={defaultOptions} width ={"300px"} height ={"300px"}  />
     </div>
 }
     </div>
    </div>
  </section>
  {/* product section end */}
  {/* RELATED PRODUCTS section */}
  <section className="related-product-section">
    <div className="container">
      <div className="section-title">
        <h2>RELATED PRODUCTS</h2>
      </div>
      <div className="row">

        {items ? items.slice(0,4).map((item, key) =>(
   <div className="col-lg-3 col-sm-6">
   <div className="product-item">
     <div className="pi-pic">
       <div className="tag-new">New</div>
       <img src={item.imageUrl} alt="" />
       <div className="pi-links">
         <a href="#" className="add-card"><i className="flaticon-bag" /><span>ADD TO CART</span></a>
         <a href="#" className="wishlist-btn"><i className="flaticon-heart" /></a>
       </div>
     </div>
     <div className="pi-text">
        <h6>₦{item.price}</h6>
       <p>{item.description}</p>
     </div>
   </div>
 </div>


        )) : null}
     
      </div>
    </div>
  </section>
  {/* RELATED PRODUCTS section end */}



<Footer />
</div>

 
 }
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


        </React.Fragment>


     )
 }
}


const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error,
    items : state.items
  });
  export default connect(mapStateToProps, {getSingleItem})(
    withRouter(SinglePage)
  );