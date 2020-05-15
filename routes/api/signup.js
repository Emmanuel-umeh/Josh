const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
var passport = require("passport");
// const controller = require("../../config/passport");
const User = require("../../model/User");


// const GoogleUser = require("../../models/googleUsers");

// @route   POST api/signup/user
// @desc    Register new user locally
// @access  Public
router.post("/user", (req, res) => {
  // if(req.method !== "local" ){
  //   next()
  // }

  const {
    // firstName,
    name,

    email,
    password,

    phoneNumber,
    country
  } = req.body;

  console.log("req.body " , req.body)

  // Simple validation
  if (
    !name ||
    !email ||
    // !username||
    !password ||
    !phoneNumber ||
  
    // !state||

    !country
  ) {

   return res.json("please enter all fields")
  }

  // Check for existing influencer
  User.findOne({ email: email }).then((data) => {
    if (data)
      return res.status(400).json({ msg: "user already exists" });

    const newUser = new User({
      method: "local",
    
        name,
        email,
        password,
    
        phoneNumber,
       
        country
   
    });

    console.log("new user", newUser )

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((data) => {
          jwt.sign(
            { id: data.id },
            "jwtSecret",
            { expiresIn: 12600 },
            (err, token) => {
              if (err) throw err;
            return  res.json({
                token,
                user: {
                  method: data.method,

                  id: data._id,
                  class: data.class,

                  name: data.name,
                  email: data.email,
              
                  phoneNumber: data.phoneNumber,
                //  state : data.state,
                  country: data.country,
               
                },
              });
            }
          );
        });
      });
    });
  });
  //     .catch(err => {
  //
  //       console.error
  // return res.json("username is invalid")
  //     });
  //  }
});

module.exports = router