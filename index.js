const express=require('express');
const app=express();
const port=7500;
const Router=express.Router();
const expressLayouts=require('express-ejs-layouts')
// setting css and script at right position
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)
// setup static files
app.use(express.static('./assets'));
// setup layouts
app.use(expressLayouts);

// setup view engine
app.set('view engine','ejs');
app.set('views','./views');

// setup express router
app.use('/',require('./routes/index'));



// setup server
app.listen(port,(err)=>{
    if(err)
    console.log(err);
    console.log('server started at port',port);
});