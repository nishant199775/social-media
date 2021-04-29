const express=require('express');
const app=express();
const port=7500;

app.listen(port,(err)=>{
    if(err)
    console.log(err);
    console.log('server started at port',port);
});