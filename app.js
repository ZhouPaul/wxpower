const express = require("express");
const bodyParser = require("body-parser")
const admin = require("./route/admin");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("./node_modules"));
app.use(express.static("./public"));

app.engine("html", require("express-art-template"));
app.set("views", __dirname + "/views");

//解析请求头为"application/x-www-form-urlencoded"的post请求参数
app.use(bodyParser.urlencoded({ extended: false }));
//解析请求头为 "application/json"的post请求参数
app.use(bodyParser.json());

app.use('/', admin);


mongoose.connect('mongodb://localhost/power')
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(() => {
        console.log('数据库连接失败');
    })


app.listen(8000, function() {
    console.log('app is running');
})