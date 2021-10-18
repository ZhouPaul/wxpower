const mongoose = require("mongoose");

var User = mongoose.model("User", userScheme);

module.exports = User;
