let express=require('express');
let bodyParser=require('body-parser');

let app=express();
app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type ="text" name ="title"><button type="submit">Add product </button></form>');
});

app.post('/product',(req,res,next)=>{
    console.log(req.body.title);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send("<h1>Hii i am express</h1>");
});

app.listen(4000);

