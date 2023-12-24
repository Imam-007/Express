const http=require('http');
const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log('In middleware');
    next();
});

app.use((req,res,next)=>{
    console.log('In anothre middleware');
    
});

const server=http.createServer(app);
const PORT=5000;

server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/`);
});
