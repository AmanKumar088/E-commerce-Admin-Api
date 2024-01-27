const express=require('express');
const { AddCategory, GetAllCategory, SingleCategory, UpdateCategory, DeleteCategory } = require('../Controller/CategoryController');
const CategoryRoute=express.Router();


CategoryRoute.post('/add',AddCategory)
CategoryRoute.get('/get',GetAllCategory)
CategoryRoute.get('/single/:id',SingleCategory)
CategoryRoute.put('/update/:id',UpdateCategory)
CategoryRoute.delete('/delete/:id',DeleteCategory)


module.exports=CategoryRoute