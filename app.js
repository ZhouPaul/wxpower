const express = require('express');
const mongoose = require('mongoose');
const route = require("./route/admin.js");
const expressSession = require('express-session');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
// app.set('views', path.join(__dirname, 'views')); //也就是写出模板所在的跟路径
app.set("views", __dirname + "/views");
// 当时用渲染后缀为html的模板时候，所使用的模板引擎是什么
app.engine('html', require('express-art-template'));
// 开启静态路由这是在根目录下开启静态路由的
app.use("/node_modules", express.static("./node_modules"));
app.use("/public", express.static("./public"));
app.use(bodyParser.urlencoded({
    extended: false
}));
//解析请求头为 "application/json"的post请求参数
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/power");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("连接成功");
});

app.use(expressSession({
    name: "mazg",
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 3,
    },
    resave: false,
    saveUninitialized: false,
    rolling: true,
    store: null
}));
// mongoose.connect('mongodb://127.0.0.1/power')
//     .then(() => {
//         console.log('数据库连接成功');
//     })
//     .catch(() => {
//         console.log('数据库连接失败');
//     });

//挂载路由
app.use("/", route);

app.listen(8000, function () {
    console.log('8000端口已启用');
})