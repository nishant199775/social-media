const express=require('express');
const Router=express.Router();
const homeControllers=require('../controllers/homeController');


console.log('router started');
Router.get('/',homeControllers.header);
Router.use('/users',require('./users'));

module.exports=Router;