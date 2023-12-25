let express=require('express');
let bodyParser=require('body-parser');

let app=express();

const adminRoutes=require('./admin');
const shopRoutes=require('./shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>404 page not found');
});

app.listen(4000);

