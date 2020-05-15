const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const UserSchema = new Schema({
  method: {
    type: String,
    enum: ["local", "google"],
  },

 
    name: {
      type: String,
      lowercase: true,
    },

    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
    },
 
    purchases: {
      type: Number,
      default : 0 
    },

    country: {
      type: String,
      lowercase: true,
      default: "",
    },

    // state: {
    //     type: String,
    //     lowercase: true,
    //     default: "",
    //   },


    flag: {
      type: Boolean,
      default: false,
    },

    date: {
      type: Date,
      default: Date.now,
    },

});
module.exports = User = mongoose.model("user", UserSchema);
