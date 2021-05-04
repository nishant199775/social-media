const express=require('express');
const Router=express.Router();
const passport=require('passport')
const signinControllers=require('../controllers/signinController');
Router.get('/',signinControllers.signin);
// using passport as middleware
Router.post('/createSession',passport.authenticate(
    'local',
    {failureRedirect:'/signin'}
),signinControllers.createSession);

module.exports=Router;