const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const TransactionSchema = new Schema({

 
    ownerName: {
      type: String,
      lowercase: true,
    },

    ownerID: {
      type: String,
    },
    ownerEmail: {
      type: String,
      lowercase: true,
      required: true,
    },
    price: {
      type: Number,
    },
 

    productID: {
      type: String
    
    },
    productName: {
      type: String
    
    },

    quantity: {
        type: Number
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
module.exports = Transaction = mongoose.model("transaction", TransactionSchema);
