const express = require("express");
const router = express.Router();
const User=require("../models/user")
const Bar=require("../models/bar")

router.get("/", async (req, res) => {
  var result = await User.find();
  res.render("index.html",{result});
  });
module.exports = router;