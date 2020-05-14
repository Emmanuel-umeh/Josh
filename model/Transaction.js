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
      type: String,
    },
 

    product: {
      type: String,
      lowercase: true
    
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
