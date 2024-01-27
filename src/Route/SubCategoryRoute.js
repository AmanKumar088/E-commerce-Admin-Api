const express=require('express')
const { AddSubCategory, SingleSubCategory, UpdateSubCategory, DeleteSubCategory, GetAllSubCategory } = require('../Controller/SubCategoryController')
const SubCategoryRoute=express.Router()


SubCategoryRoute.post('/add',AddSubCategory)
SubCategoryRoute.get('/single/:id',SingleSubCategory)
SubCategoryRoute.put('/update/:id',UpdateSubCategory)
SubCategoryRoute.delete('/delete/:id',DeleteSubCategory)
SubCategoryRoute.get('/all',GetAllSubCategory)


module.exports=SubCategoryRoute