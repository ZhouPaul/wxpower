const mongoose = require("mongoose");

var barScheme = new mongoose.Schema({
  title: {
    type: String,
  },
 href: {
    type: String,
  },
});
var Bar = mongoose.model("Bar", barScheme);
module.exports = Bar;