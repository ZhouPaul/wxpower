const express = require("express");
const route = express.Router();
const {User,User2,User3,User4,User5,User6,User7,User8,User9,User10,User11} = require("../models/user");

//产品展示首页接口
route.get("/product", (req, res) => {
    res.render("product.html")
});

route.get("/product1", (req, res) => {
    res.render("product1.html")
});
route.get("/product2", (req, res) => {
    res.render("product2.html")
});
route.get("/product3", (req, res) => {
    res.render("product3.html")
});
//产品详情页面接口
route.get("/detail", async (req, res, next) => {
    const data1 = await User.find();
    const data2 = await User2.find();
    // console.log(users2);
    res.render("../views/detail/detail.html", {
        listMsg1: data1,
        listMsg2: data2,
    })
})
route.get("/detail2", async (req, res, next) => {
    const data3 = await User3.find();
    // console.log(users2);
    res.render("../views/detail/detail2.html", {
        listMsg3: data3,

    })
})
route.get("/detail3", async (req, res, next) => {
    const data4 = await User4.find();
    // console.log(users2);
    res.render("../views/detail/detail3.html", {
        listMsg4: data4,
    })
})
route.get("/detail4", async (req, res, next) => {
    const data5 = await User5.find();
    // console.log(users2);
    res.render("../views/detail/detail4.html", {
        listMsg5: data5,
    })
})
route.get("/detail5", async (req, res, next) => {
    const data6 = await User6.find();
    // console.log(users2);
    res.render("../views/detail/detail5.html", {
        listMsg6: data6,
    })
})
route.get("/detail6", async (req, res, next) => {
    const data7 = await User7.find();
    const data8 = await User8.find();
    // console.log(users2);
    res.render("../views/detail/detail6.html", {
        listMsg7: data7,
        listMsg8: data8,
    })
})
route.get("/detail7", async (req, res, next) => {
    const data7 = await User7.find();
    const data8 = await User8.find();
    // console.log(users2);
    res.render("../views/detail/detail7.html", {
        listMsg7: data7,
        listMsg8: data8,
    })
})
route.get("/detail8", async (req, res, next) => {
    const data9 = await User9.find();
    const data10 = await User10.find();
    const data11 = await User11.find();
    // console.log(users2);
    res.render("../views/detail/detail8.html", {
        listMsg9: data9,
        listMsg10: data10,
        listMsg11: data11,
    })
})

module.exports = route;