import React from 'react'

import {connect} from 'react-redux'
import './button.css'
import {Link} from 'react-router-dom'

import Header from '../homepage/header'
class Cart extends React.Component{



  state = {
    quantity : 1,
    total : 0,
    data : []
  }

  componentDidMount(){

   const data=  JSON.parse(localStorage.getItem("cart"))
   console.log(data)
   this.setState({data : data})

  //  var i = 0
  //  var amount = 0
  //  for(i;  i < data.length, i++ ; ){
  //    const cash = data[i].price
  //    amount = amount + cash
  //  }

  Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}

// console.log(data.sum("price"))
this.setState({
  total : data.sum("price")
})


  }
  updatePrice =(e) =>{
    // this.setState({
    //   quantity : [e.target.value]
    // })

    // console.log(e.target.value)
    // console.log(e.target.id)

const items = JSON.parse(localStorage.getItem("cart"))
    var data = this.state.data
    // console.log("data ", data)
    data[e.target.id].price = items[e.target.id].price * e.target.value
    // console.log(data[e.target.id].price * e.target.value)


    this.setState({
      data : data
    })

    Array.prototype.sum = function (prop) {
      var total = 0
      for ( var i = 0, _len = this.length; i < _len; i++ ) {
          total += this[i][prop]
      }
      return total
  }
  
  // console.log(data.sum("price"))
  this.setState({
    total : data.sum("price")
  })
  
  }



    render(){


      const {items} = this.props.items
      const data=  JSON.parse(localStorage.getItem("cart"))

      if(items){
        // console.log("items ", items .slice(0,4))

        // this.setState({
        //   items : items .slice(0,4)
        // })
       
      }
    

        return(

            <div>
  {/* Page Preloder */}
  {/* <div id="preloder">
    <div className="loader" />
  </div> */}


<Header/>

  {/* Page info */}
  <div className="page-top-info">
    <div className="container">
      <h4>Your cart</h4>
      <div className="site-pagination">
        <a href>Home</a> /
        <a href>Your cart</a>
      </div>
    </div>
  </div>
  {/* Page info end */}
  {/* cart section end */}
  <section className="cart-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="cart-table">
            <h3>Your Cart</h3>
            <div className="cart-table-warp">
              <table>
                <thead>
                  <tr>
                    <th className="product-th">Product</th>
                    <th className="quy-th">Quantity</th>
                    <th className="size-th">Gender</th>
                    <th className="total-th">Price</th>
                  </tr>
                </thead>
                <tbody>

                  {this.state.data.map((item, key) => (

                    
  <tr key = {key}>
  <td className="product-col">
    <img src={item.imageUrl} alt="" />
    <div className="pc-title">
      <h4>{item.name}</h4>
      <p>₦{item.price}</p>
    </div>
  </td>
  <td className="quy-col">
    <div className="quantity">
      <div className="pro-qty">
        <input id = {key} type="number" defaultValue={1} onChange = {(e)=>{
          this.updatePrice(e)
        }} />
      </div>
    </div>
  </td>
  <td className="size-col"><h4>{item.category[0]}</h4></td>
  {/* {this.setState({total : this.state.total + item.price })} */}
  <td className="total-col"><h4>₦{item.price }</h4></td>
</tr>
                  ))}
                
                
                </tbody>
              </table>
            </div>
            <div className="total-cost">
              <h6>Total <span>{this.state.total} </span></h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 card-right">
          <form className="promo-code-form">
            <input type="text" placeholder="Enter promo code" />
            <button>Submit</button>
          </form>
          <a href="#0" style ={{width : "100%"}} class="btn10">
     <span>Checkout</span>
  <div class="transition"></div>
</a>
<Link to="/" class="btn11" >
     <span>Continue Shopping</span>
  <div class="transition"></div>
</Link>
        </div>
      </div>
    </div>
  </section>
  {/* cart section end */}
  {/* Related product section */}
  <section className="related-product-section">
    <div className="container">
      <div className="section-title text-uppercase">
        <h2>Continue Shopping</h2>
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
  {/* Related product section end */}
  {/* Footer section */}
  <section className="footer-section">
    <div className="container">
      <div className="footer-logo text-center">
        <a href="index.html"><img src="./img/logo-light.png" alt="" /></a>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget about-widget">
            <h2>About</h2>
            <p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam frin-gilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</p>
            <img src="img/cards.png" alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget about-widget">
            <h2>Questions</h2>
            <ul>
              <li><a href>About Us</a></li>
              <li><a href>Track Orders</a></li>
              <li><a href>Returns</a></li>
              <li><a href>Jobs</a></li>
              <li><a href>Shipping</a></li>
              <li><a href>Blog</a></li>
            </ul>
            <ul>
              <li><a href>Partners</a></li>
              <li><a href>Bloggers</a></li>
              <li><a href>Support</a></li>
              <li><a href>Terms of Use</a></li>
              <li><a href>Press</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget about-widget">
            <h2>Questions</h2>
            <div className="fw-latest-post-widget">
              <div className="lp-item">
                <div className="lp-thumb set-bg" data-setbg="img/blog-thumbs/1.jpg" />
                <div className="lp-content">
                  <h6>what shoes to wear</h6>
                  <span>Oct 21, 2018</span>
                  <a href="#" className="readmore">Read More</a>
                </div>
              </div>
              <div className="lp-item">
                <div className="lp-thumb set-bg" data-setbg="img/blog-thumbs/2.jpg" />
                <div className="lp-content">
                  <h6>trends this year</h6>
                  <span>Oct 21, 2018</span>
                  <a href="#" className="readmore">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget contact-widget">
            <h2>Questions</h2>
            <div className="con-info">
              <span>C.</span>
              <p>Your Company Ltd </p>
            </div>
            <div className="con-info">
              <span>B.</span>
              <p>1481 Creekside Lane  Avila Beach, CA 93424, P.O. BOX 68 </p>
            </div>
            <div className="con-info">
              <span>T.</span>
              <p>+53 345 7953 32453</p>
            </div>
            <div className="con-info">
              <span>E.</span>
              <p>office@youremail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="social-links-warp">
      <div className="container">
        <div className="social-links">
          <a href className="instagram"><i className="fa fa-instagram" /><span>instagram</span></a>
          <a href className="google-plus"><i className="fa fa-google-plus" /><span>g+plus</span></a>
          <a href className="pinterest"><i className="fa fa-pinterest" /><span>pinterest</span></a>
          <a href className="facebook"><i className="fa fa-facebook" /><span>facebook</span></a>
          <a href className="twitter"><i className="fa fa-twitter" /><span>twitter</span></a>
          <a href className="youtube"><i className="fa fa-youtube" /><span>youtube</span></a>
          <a href className="tumblr"><i className="fa fa-tumblr-square" /><span>tumblr</span></a>
        </div>
        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */} 
        <p className="text-white text-center mt-5">Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
      </div>
    </div>
  </section>
  {/* Footer section end */}
</div>

        )
    }
}



const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error,
    items : state.items
  });
  export default connect(mapStateToProps, null)(
    Cart
  );