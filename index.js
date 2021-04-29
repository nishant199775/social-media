const express=require('express');
const app=express();
const port=7500;
const Router=express.Router();
app.use('/',require('./routes/index'));
app.listen(port,(err)=>{
    if(err)
    console.log(err);
    console.log('server started at port',port);
});