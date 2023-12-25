const express=require('express');

const router=express.Router();

router.get('/add-login',(req,res,next)=>{
    res.send('<form action="/login/add-login" method="POST"><input type ="text" name ="title" ><br><button type="submit">login </button></form>');
});

router.post('/add-login',(req,res,next)=>{
    console.log(req.body.title);
});

module.exports=router;