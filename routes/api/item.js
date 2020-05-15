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

const Item = require('../../model/Items');





router.post('/', (req, res) => {
    const { name, price, category, quantityLeft, description, imageUrl } = req.body;
  

    // Simple validation
    if(!name || !price || !category || !quantityLeft || !description || !imageUrl) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
  

    
    const newItem = new Item({
      name, price, category, quantityLeft, description, imageUrl 
   
    });


newItem.save().then(
  data=>{
    res.json("Item Saved Successfully")
  
  }
)

    
  });


//   Load items
router.get('/', (req,res) =>{
    Item.find().sort({date : -1})
    .then(items => {
      // console.log(items)
      res.status(200).json(items)
    }
  
     ) .catch(e => {
      // res.redirect("/");
      console.log(e);
    });
  })

  module.exports = router
  