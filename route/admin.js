const express = require('express');
const Develop = require('../models/power');
const admin = express.Router();
admin.get('/intro', async(req, res) => {
    var id = req.query.id;
    if (id) {
        const content=await Develop.findOne({"num":id});
        res.render('detail.html',{content:content});
    }else {
        res.render('intro.html');
    }
});
admin.get('/honor', (req, res) => {
    res.render('honor.html');
});
admin.get('/policy', (req, res) => {
    res.render('policy.html');
});
admin.get('/quality', (req, res) => {
    res.render('quality.html');
});
admin.get('/culture', (req, res) => {
    res.render('culture.html');
});
admin.get('/contact',(req,res)=>{
    res.render('contact.html');
});
admin.get('/talents',(req,res)=>{
    res.render('talents.html');
});
admin.get('/need',(req,res)=>{
    res.render('need.html');
})
module.exports = admin;