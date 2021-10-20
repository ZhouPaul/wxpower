const express = require('express');
const Develop = require('../models/power');
const admin = express.Router();
admin.get('/intro', async(req, res) => {
    var id = req.query.id;
    if (id) {
        const content=await Develop.findOne({"num":id});
        res.render('xhintro/detail.html',{content:content});
    }else {
        res.render('xhintro/intro.html');
    }
});
admin.get('/honor', (req, res) => {
    res.render('xhintro/honor.html');
});
admin.get('/policy', (req, res) => {
    res.render('xhintro/policy.html');
});
admin.get('/quality', (req, res) => {
    res.render('xhintro/quality.html');
});
admin.get('/culture', (req, res) => {
    res.render('xhintro/culture.html');
});
admin.get('/contact',(req,res)=>{
    res.render('xhintro/contact.html');
});
admin.get('/talents',(req,res)=>{
    res.render('xhintro/talents.html');
});
admin.get('/need',(req,res)=>{
    res.render('xhintro/need.html');
})
module.exports = admin;