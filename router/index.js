const express = require("express")
const router = express.Router();
const Idea = require("../models/idea");
const Case = require("../models/case");
const News = require("../models/news");


router.get('/idea', async(req, res) => {
    let page = req.query.page || 1;
    let pagesize = 8;
    let count = await Idea.countDocuments();
    let total = Math.ceil(count / pagesize);
    let start = (page - 1) * pagesize;

    var idea = await Idea.find().limit(pagesize).skip(start);
    res.render("idea.html", { idea, page, total });
})

// router.get('/idea', require("./admin/idea"))

router.get('/case', async(req, res) => {
    let page = req.query.page || 1;
    let pagesize = 12;
    let count = await Case.countDocuments();
    let total = Math.ceil(count / pagesize);
    let start = (page - 1) * pagesize;

    var cases = await Case.find().limit(pagesize).skip(start);
    res.render("case.html", { cases, page, total })
})

router.get('/news', async(req, res) => {
    let page = req.query.page || 1;
    let pagesize = 6;
    let count = await News.countDocuments();
    let total = Math.ceil(count / pagesize);
    let start = (page - 1) * pagesize;

    var news = await News.find().limit(pagesize).skip(start);
    res.render("news.html", { news, page, total })
})

router.get('/video', (req, res) => {
    res.render("video.html")
})

router.get('/settings/idea_item/:id', async(req, res) => {
    var id = req.params["id"];
    var result = await Idea.findById(id);
    res.render("settings/idea_item.html", { idea: result })
})

router.get('/settings/case_item/:id', async(req, res) => {
    var id = req.params["id"];
    var result = await Case.findById(id);
    res.render("settings/case_item.html", { cases: result })
})

router.get('/settings/news_item/:id', async(req, res) => {
    var id = req.params["id"];
    var result = await News.findById(id);
    res.render("settings/news_item.html", { news: result })
})


module.exports = router;