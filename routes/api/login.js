const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
var passport = require("passport");
// var dotenv = require('dotenv')
// import strategy from "passport-facebook";


// const FacebookStrategy = strategy.Strategy;


// User Model

const User = require('../../model/User');





router.post('/', (req, res) => {
    const { email, password } = req.body;
  
    // console.log(email, password)
    console.log("PASSWORD", password)
    // Simple validation
    if(!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
  
    // Check for existing user
    User.findOne({ "local.email" :email })
      .then(user => {
        if(!user){
  
    return res.json("user does not exist")
  
      }
    
        console.log("PASSWORD",password)
        
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
  
            console.log(user._id)
  
            jwt.sign(
              { id: user._id },
              'jwtSecret',
              { expiresIn:10000 },
              (err, token) => {
                if(err) throw err;
                res.status(200).json({
                  token,
                  user: {
                    method: data.method,
  
                    id: data._id,
                    class: data.class,
  
                    name: data.name,
                    email: data.email,
                
                    phoneNumber: data.phoneNumber,
                   state : data.state,
                    country: data.country,
                 
                  }
                });
              }
            )
          })
      })   .catch(e => {
        // res.redirect("/");
        console.log(e);
      });
  });


//   Load user
router.get('/user', auth, (req,res) =>{
    User.findById(req.user.id).select('-password')
    .then(user => {
      console.log(user)
      res.status(200).json(user)
    }
  
     ) .catch(e => {
      // res.redirect("/");
      console.log(e);
    });
  })

  module.exports = router
  