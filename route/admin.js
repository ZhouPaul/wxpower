const express = require("express");
const route = express.Router();
const User = require("../models/user")
//产品展示首页接口
route.get("/product1",(req,res)=>{
    var user = req.session.user;
    res.render("product1.html",{user})
});
route.get("/product2",(req,res)=>{
    var user = req.session.user;
    res.render("product2.html",{user})
});
route.get("/product3",(req,res)=>{
    var user = req.session.user;
    res.render("product3.html",{user})
});
//产品详情页面接口
route.get("/detail",(req,res)=>{
    User.find(function(err,datas){
        console.log(datas,"xxxxxxx")
    })
    res.render("../views/detail/detail.html")
})

module.exports = route;