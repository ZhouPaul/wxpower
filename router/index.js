const express = require("express");
const admin = express.Router();
const User=require("../models/user")

admin.get("/", async (req, res) => {
  var result = await User.find();
  res.render("index.html",{result});
  });
module.exports = admin;