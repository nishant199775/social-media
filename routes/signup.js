const express=require('express');
const Router=express.Router();
const signupControllers=require('../controllers/signupController');
Router.get('/',signupControllers.signup);
Router.post('/create',signupControllers.create)
module.exports=Router;