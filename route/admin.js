const express=require('express');
const admin=express.Router();
admin.get('/index',(req,res)=>{ 
    res.render('culture.html');
});
module.exports=admin;