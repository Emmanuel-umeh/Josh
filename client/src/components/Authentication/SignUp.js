import React, {Fragment} from 'react';
// import Fragment from "../../hoc/Fragment"
import {signup} from '../../actions/authActions'
import axios from 'axios'
import {connect} from 'react-redux'
import { 
    Link,
    // Route,
    // Switch, 
    withRouter,
    BrowserRouter as Router } from "react-router-dom"

  
import Lottie from "react-lottie";
import * as CampaingLoading from '../LottieFiles/signup.json'

    
    
    const defaultOptions = {
       loop: true,
       autoplay: true,
       animationData: CampaingLoading.default,
       rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
       },
     };


class Signup extends React.Component{


  componentDidMount(){
      
    const { error } = this.props.auth;

  }

    state = {
        userName : null,
        email : null,
        password : null, 
        confirmPassword : null,
        terms:false,
        country : null,
        phoneNumber: null,
        loading:false,
        errMessage:null
    }

    onChangeTerms = e => {
      this.setState({value: e.target.checked})    
    };

    onChange =(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    register = async(e) =>{
        e.preventDefault()
      console.log(this.terms.value)
      
        this.setState({loading:true})
        e.preventDefault()
        this.setState({loading:true})
        const email = this.state.email // get email
        const name = this.state.userName // username
        const password = this.state.password // password 1
        const confirmPassword = this.state.confirmPassword // password 2

        const {country, phoneNumber} = this.state
        const newUser = {
            email: email
            ,password:password,
            name : name,
            confirmPassword : confirmPassword ,   
            country, phoneNumber      
        }  // create a user object

        await this.props.signup(newUser)  // call the register
        this.setState({loading:false})
      
    }

    render(){
        return(
        
            // <!--================login_part Area =================-->
            <Fragment>  
        
<div class="container">

<div class="card o-hidden border-0 shadow-lg my-5">
  <div class="card-body p-0">
    {/* <!-- Nested Row within Card Body --> */}
    <div class="row">
      <div class="col-lg-5 d-none d-lg-block bg-register-image">

          <Lottie options = {defaultOptions} />
      </div>
      <div class="col-lg-7">
        <div class="p-5">
        {this.props.error.status === 400 ? 
                      <p style={{color:'red', fontSize:"30px"}} className="text-center">
                        {this.props.error.msg.msg} !!                        
              </p>
              : null}
        {this.state.errMessage ? 
        
        <p style={{color:'red', fontSize:"30px"}} className="text-center">
        {this.state.errMessage} !!                        
        </p>

        : null }
          <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
          </div>
          <form class="user" onSubmit = {this.register}>
            <div class="form-group row">
              <div class="col-sm-6 mb-3 mb-sm-0">
              <input 
                    type="text" 
                    class="form-control form-control-user"    
                                    id="name" 
                    onChange = {this.onChange}  
                    name="userName" 
                    required
                                                placeholder="Full Name" />
              </div>
              <div class="col-sm-6">

              <input type="email"
                                  required 
                    class="form-control form-control-user"    
              onChange = {this.onChange} id="email" name="email"
                                                placeholder="Email" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <input 
                        type="password"
                        required 
                        onChange ={this.onChange}
                        class="form-control form-control-user"
                        name="password"
                        id="exampleInputPassword" placeholder="Password" />
              </div>
              <div class="col-sm-6">
              <input 
                                  required
                    type="password" 
                    class="form-control form-control-user"   
                    id="password" onChange ={this.onChange} name="confirmPassword"
                                                placeholder="Confirm Password" />              </div>
            </div>

            <div class="form-group row">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <input 
                        type="tel"
                        required 
                        onChange ={this.onChange}
                        class="form-control form-control-user"
                        name="phoneNumber"
                        id="exampleInputPassword" placeholder="Phone Number" />
              </div>
              <div class="col-sm-6">
              <select required className = "form-control" name = "country" defaultValue = "Select Your Country" onChange = {this.onChange} >
              <option className="hidden" selected disabled>Please select your Country</option>
    <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antartica">Antarctica</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
<option value="Botswana">Botswana</option>
<option value="Bouvet Island">Bouvet Island</option>
<option value="Brazil">Brazil</option>
<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Cayman Islands">Cayman Islands</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Christmas Island">Christmas Island</option>
<option value="Cocos Islands">Cocos (Keeling) Islands</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Congo">Congo, the Democratic Republic of the</option>
<option value="Cook Islands">Cook Islands</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cota D'Ivoire">Cote d'Ivoire</option>
<option value="Croatia">Croatia (Hrvatska)</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="East Timor">East Timor</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Falkland Islands">Falkland Islands (Malvinas)</option>
<option value="Faroe Islands">Faroe Islands</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="France Metropolitan">France, Metropolitan</option>
<option value="French Guiana">French Guiana</option>
<option value="French Polynesia">French Polynesia</option>
<option value="French Southern Territories">French Southern Territories</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
<option value="Holy See">Holy See (Vatican City State)</option>
<option value="Honduras">Honduras</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran (Islamic Republic of)</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
<option value="Korea">Korea, Republic of</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Lao">Lao People's Democratic Republic</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon" selected>Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macau">Macau</option>
<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia, Federated States of</option>
<option value="Moldova">Moldova, Republic of</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="Netherlands Antilles">Netherlands Antilles</option>
<option value="New Caledonia">New Caledonia</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk Island">Norfolk Island</option>
<option value="Northern Mariana Islands">Northern Mariana Islands</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Reunion">Reunion</option>
<option value="Romania">Romania</option>
<option value="Russia">Russian Federation</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
<option value="Saint LUCIA">Saint LUCIA</option>
<option value="Saint Vincent">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option>
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia (Slovak Republic)</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Georgia">South Georgia and the South Sandwich Islands</option>
<option value="Span">Spain</option>
<option value="SriLanka">Sri Lanka</option>
<option value="St. Helena">St. Helena</option>
<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard">Svalbard and Jan Mayen Islands</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syrian Arab Republic</option>
<option value="Taiwan">Taiwan, Province of China</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania, United Republic of</option>
<option value="Thailand">Thailand</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks and Caicos">Turks and Caicos Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Viet Nam</option>
<option value="Virgin Islands (British)">Virgin Islands (British)</option>
<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
<option value="Western Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Serbia">Serbia</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
</select>
            </div>
            </div>


            <div className="form-group row">
            <div class="col-sm-6 mb-3 mb-sm-0">

                  <div className="custom-control custom-checkbox small">
                    <input 
                      type="checkbox" 
                      className="custom-control-input" 
                      onChange = {this.onChangeTerms}
                      value={this.state.value}
                      ref = {(input)=> {this.terms=input}}
                      id="customCheck" 
                      required
                      // onClick={(e)=>{
                      //     e.preventDefault()
                      //     this.setState({terms:true})
                      //   } }
                      />
                    <label className="custom-control-label" htmlFor="customCheck">Agree To Our Terms And Condition</label>
                  </div>
                </div>
              </div>
            {this.state.loading=== true ? 

            <center>

<button type="submit"  className="site-btn sb-line sb-dark">
              Register.....

              </button>
            </center>
          
    
            : 
            <center>
            <button 
              
              type="submit"  className="site-btn sb-line sb-dark">
              Register Account
        </button>
        </center>
    
            }
            <hr />
            {/* <a href="index.html" class="btn btn-google btn-user btn-block">
              <i class="fab fa-google fa-fw"></i> Register with Google
            </a>
            <a href="index.html" class="btn btn-facebook btn-user btn-block">
              <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
            </a> */}
          </form>
          <hr />
          <div className="text-center">
                <Link className="small" to="/confirmEmail">Forgot Password?</Link>
              </div>
          <div class="text-center">
            <Link class="small" to="/login">Already have an account? Login!</Link>
          </div>
          {/* <div class="text-center">
            <Link class="small" to="/organisation-signup">Create Business Account</Link>
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


            </Fragment>
            )
    }
 
}

const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error
  });
  
  export default connect(mapStateToProps, { signup })(
    withRouter(Signup)
  );

