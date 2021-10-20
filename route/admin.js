const express = require("express");
const admin = express.Router();
const Userz=require("../models/zuser")

admin.get("/", async (req, res) => {
  var result = await Userz.find();
  res.render("index.html",{result});
  });
module.exports = admin;