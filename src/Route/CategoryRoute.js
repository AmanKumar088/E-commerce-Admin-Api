const express=require('express');
const { AddCategory } = require('../Controller/CategoryController');
const CategoryRoute=express.Router();


CategoryRoute.post('/add',AddCategory)





module.exports=CategoryRoute