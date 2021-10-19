const express = require("express")
const router = express.Router();
const Idea = require("../models/idea");
const Case = require("../models/case");
const News = require("../models/news");


router.get('/idea', async(req, res) => {
    var idea = await Idea.find();
    res.render("idea.html", { idea });
})

router.get('/case', async(req, res) => {
    var cases = await Case.find();
    res.render("case.html", { cases })
})

router.get('/news', async(req, res) => {
    var news = await News.find();
    res.render("news.html", { news })
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