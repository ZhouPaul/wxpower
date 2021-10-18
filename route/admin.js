const express=require('express');
const admin=express.Router();
admin.get('/intro',(req,res)=>{
    res.send('intro');
});
admin.get('/honor',(req,res)=>{
    res.send('honor');
});
admin.get('/policy',(req,res)=>{
    res.send('policy');
});
admin.get('/quality',(req,res)=>{
    res.send('quality');
});
admin.get('/culture',(req,res)=>{
    res.render('culture.html');
})
module.exports=admin;