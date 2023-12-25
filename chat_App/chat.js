const express=require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send('<form action="/login/add-login" method="POST"><input type ="text" name ="title"><br><button type="submit">send </button></form>');
});

module.exports=router;
