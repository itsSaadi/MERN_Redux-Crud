const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
});

const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;
