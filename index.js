const express=require('express');
const app=express();
const port=7500;
const Router=express.Router();
const expressLayouts=require('express-ejs-layouts')
const db=require('./config/mongoose');
const cookieParser=require('cookie-parser')
const session=require('express-session')
const passport=require('passport')
const passportLocal=require('./config/passport')
// Reading url data
app.use(express.urlencoded())
//Reading cookies
app.use(cookieParser())

//setting up database

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



//using session for passport
app.use(session({
    name:'codial',
    secret:'astalavista',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}))
app.use(passport.initialize());
app.use(passport.session())

// setup express router
app.use('/',require('./routes/index'));

// setup server
app.listen(port,(err)=>{
    if(err)
    console.log(err);
    console.log('server started at port',port);
});