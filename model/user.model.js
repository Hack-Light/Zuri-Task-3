const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  email: String,
  country: String
});

module.exports = model("user", UserSchema);
