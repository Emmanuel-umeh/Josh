import React from 'react';
import {Fragment} from "react"
import {login} from '../../actions/authActions'

import {connect} from 'react-redux'
import { 
    Link,
    withRouter,
    BrowserRouter as Router } from "react-router-dom"
    import {clearErrors} from '../../actions/errorActions'
    


import Lottie from "react-lottie";
import * as shopping from '../LottieFiles/shopping.json'

    
    
    const defaultOptions = {
       loop: true,
       autoplay: true,
       animationData: shopping.default,
       rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
       },
     };

    //  <Lottie
    //     options={defaultOptions}
    //     height={"100%"}
    //     width={"100%"}
    //   /> 


class Login extends React.Component {

    state = {
        email : null,
        password : null,
        loading:false
    }


    componentDidMount(){
      
        const { error, isAuthenticated } = this.props.auth;
        // console.log("is user already logged in ? ", isAuthenticated)
        // if(isAuthenticated){
        //   this.props.history.push('/dashboard')
        // }
    
      }
      

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };


    loginUser = async e =>{
      this.setState({loading:true})
        e.preventDefault()
        this.setState({loading:true})
        const email = this.state.email
        const password = this.state.password

        const newUser = {
            email: email
            ,password:password
            
        }
        // console.log("details ", newUser)

      await  this.props.login(newUser)
    }


    componentDidUpdate(prevProps) {

        const { error, isAuthenticated ,user} = this.props.auth;
     

        if(user && user.length !== 0 && user.class === "Organisation" ){
          // this.props.history.push('/organisation/dashboard')
          window.location.href="/organisation/dashboard"
          this.setState({loading:false})
        }

        else if(user && user.length !== 0 &&  user.class === "Individual" ){
          // this.props.history.push({
          //   pathname:'/dashboard',
          // user:user.user.id})
          window.location.href="/dashboard"
          this.setState({loading:false})
        }
        else if(user && user.length !== 0 &&  user.class === "Admin" ){
          // this.props.history.push({
          //   pathname:'/dashboard',
          // user:user.user.id})
          window.location.href="/admin/dashboard"
          this.setState({loading:false})
        }



        const {type} = this.props.auth
if(type &&  type  !== prevProps.auth.type){

if(type === "LOGIN_FAIL"){
  console.log("login failed")
  this.setState({
    loading:false
  })

  // this.props.clearType()
}

}
        


        if (error && error !== prevProps.error) {
          //
          if (error.id === "REGISTER_FAIL") {
            this.setState({
              msg: error.msg.msg,
              loading : false
            });
            
            // this.setState({
            //   msg: error.msg.msg
            // });
            console.log({ msg: error.msg.msg})
          } else if (error.id === "LOGIN_FAIL") {
            this.setState({
              msg: error.msg.msg,
              loading : false
            });
            console.log({ msg: error.msg.msg})
          } else if (error.id === "REGISTER_SUCCESS") {
            // this.props.history.push("/sponsor")
            
            // window.location.reload()
            console.log("register success")
          }
    
          else if (error.id === "LOGIN_SUCCESS") {
            // this.props.history.push("/sponsor")
    
            console.log("logged in successfully")
            // window.location.reload()
          }
          
          
          else {
            this.setState({
              msg: null
            });
          }
        }
    
      }

    render(){
      // console.log(this.props.error)
        return(
        
            // <!--================login_part Area =================-->
            <Fragment>

<div className="container">
  
  <div className="row justify-content-center">

  <div className="col-xl-10 col-lg-12 col-md-9">
    {/* <div class="elesarrloading"></div> */}

    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        {/* <!-- Nested Row within Card Body --> */}
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block bg-login-image">

          <Lottie options ={defaultOptions} width = {"100%"} />
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              {this.props.error.status === 400 ? 
                      <p style={{color:'red', fontSize:"30px"}} className="text-center">
                        {this.props.error.msg.msg} !!                        </p>

              : null}

              <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
              </div>
              <form className="user" onSubmit ={(e) =>{
                this.props.clearErrors()
                this.loginUser(e)}} >
                <div className="form-group">
                      <input 
                                                type="email" 
                                                className="form-control form-control-user"
                                                onChange = {(e) =>{
                                                  this.props.clearErrors()
                                                  this.onChange(e)
                                                
                                                }} 
                                                id="email" 
                                                name="email" 
                                                placeholder="email" 
                                                required
                                            />
                </div>
                <div className="form-group">
                <input 
                type="password" 
                className="form-control form-control-user"   
                onChange = {(e) =>{
                  this.props.clearErrors()
                  this.onChange(e)
                
                }} id="password" name="password" 
                placeholder="Password" />
                </div>
<center>
                <button   type="submit"  className="site-btn sb-line sb-dark">   {this.state.loading ?
                    'Please Wail.......'
                    : 
                    'Login'
                    }
                    
                    </button>
                    </center>
                <hr />
              </form>
              <hr />
              <div className="text-center">
                <Link className="small" to="/confirmEmail">Forgot Password?</Link>
              </div>
              <div className="text-center">
                <Link className="small" to="/signup">Create an Account!</Link>
              </div>
              {/* <div className="text-center">
                <Link className="small" to="/organisation-signup">Create an Organisation Account!</Link>
              </div> */}
              <div className="text-center">
                <Link className="btn mt-2 btn-primary" to="/">
                  Go BACK
                  </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>


</div>
            </Fragment>
            )
    }
 
}

const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error
  });
  
  export default connect(mapStateToProps, { login,clearErrors })(
    withRouter(Login)
  );
