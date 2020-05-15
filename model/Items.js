const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const ItemSchema = new Schema({

 
    name: {
      type: String,
      lowercase: true,
    },

    price: {
      type: Number,
    },
 
    imageUrl : {
      type : String
    },

    category: {
      type: String,
      lowercase: true,
      enum: ["male", "female"],
    
    },

    quantityLeft: {
        type: Number
      },

      rating : {
        type: Number,
        default : 3
      },

      description : {
          type : String
      },



    flag: {
      type: Boolean,
      default: false,
    },

    date: {
      type: Date,
      default: Date.now,
    },

});
module.exports = Item = mongoose.model("item", ItemSchema);
