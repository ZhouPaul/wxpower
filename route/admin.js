const express=require('express');
const admin=express.Router();
admin.get('/intro',(req,res)=>{
    res.render('intro.html');
});
admin.get('/honor',(req,res)=>{
    res.render('honor.html');
});
admin.get('/policy',(req,res)=>{
    res.render('policy.html');
});
admin.get('/quality',(req,res)=>{
    res.render('quality.html');
});
admin.get('/culture',(req,res)=>{
    res.render('culture.html');
})
module.exports=admin;