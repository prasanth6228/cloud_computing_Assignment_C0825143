const express = require('express');
const server = express();
const port = 8082;
server.get('/',(req,res)=>{
    res.send('<h1>HELLO WORLD...HOME!!!');
    res.end();
});

server.get('/products',(req,res)=>{
    res.send('<h1>PRODUCTS PAGE</h1>');
    res.end();
});

server.get('/Profile',(req,res)=>{
    res.send('<h1>PROFILE PAGE</h1>');
});

server.listen(port,()=>{
    console.log('Server running on'+port);
});
