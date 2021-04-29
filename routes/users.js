const express=require('express');
const Router=express.Router();
const userControllers=require('../controllers/usersController');

Router.get('/profile',userControllers.profile);
module.exports=Router;