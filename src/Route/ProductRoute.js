const express=require('express');
const { AddProduct, SingleProduct, UpdateProduct, DeleteProduct, GetAllProduct, TemplateImage } = require('../Controller/ProductController');
const UploadMiddleWare = require('../MiddleWare/UploadMiddleWare');
const ProductRoute=express.Router()
const multer=require('multer')

ProductRoute.get('/ejs',TemplateImage)

ProductRoute.post('/add',UploadMiddleWare.single('product_img'),AddProduct)
ProductRoute.get('/single/:id',multer().none(),SingleProduct)
ProductRoute.put('/update/:id',multer().none(),UpdateProduct)
ProductRoute.delete('/delete/:id',multer().none(),DeleteProduct)
ProductRoute.get('/all',multer().none(),GetAllProduct)

module.exports=ProductRoute;