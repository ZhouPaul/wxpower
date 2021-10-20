const express = require("express")
const admin = express.Router();
const Idea = require("../models/idea");
const Case = require("../models/case");
const News = require("../models/news");


admin.get('/idea', async(req, res) => {
    let page = req.query.page || 1;
    let pagesize = 8;
    let count = await Idea.countDocuments();
    let total = Math.ceil(count / pagesize);
    let start = (page - 1) * pagesize;

    var idea = await Idea.find().limit(pagesize).skip(start);
    res.render("idea.html", { idea, page, total });
})

// admin.get('/idea', require("./admin/idea"))

admin.get('/case', async(req, res) => {
    let page = req.query.page || 1;
    let pagesize = 12;
    let count = await Case.countDocuments();
    let total = Math.ceil(count / pagesize);
    let start = (page - 1) * pagesize;

    var cases = await Case.find().limit(pagesize).skip(start);
    res.render("case.html", { cases, page, total })
})

admin.get('/news', async(req, res) => {
    let page = req.query.page || 1;
    let pagesize = 6;
    let count = await News.countDocuments();
    let total = Math.ceil(count / pagesize);
    let start = (page - 1) * pagesize;

    var news = await News.find().limit(pagesize).skip(start);
    res.render("news.html", { news, page, total })
})

admin.get('/video', (req, res) => {
    res.render("video.html")
})

admin.get('/settings/idea_item/:id', async(req, res) => {
    var id = req.params["id"];
    var result = await Idea.findById(id);
    res.render("settings/idea_item.html", { idea: result })
})

admin.get('/settings/case_item/:id', async(req, res) => {
    var id = req.params["id"];
    var result = await Case.findById(id);
    res.render("settings/case_item.html", { cases: result })
})

admin.get('/settings/news_item/:id', async(req, res) => {
    var id = req.params["id"];
    var result = await News.findById(id);
    res.render("settings/news_item.html", { news: result })
})


module.exports = admin;