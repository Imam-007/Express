let express=require('express');
let bodyParser=require('body-parser');

let app=express();

const login=require('./login');
const chat=require('./chat');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/login',login);
app.use(chat);

app.use((req,res,next)=>{
    res.status(404).send('<h1>404 page not');
});

app.listen(4000);

