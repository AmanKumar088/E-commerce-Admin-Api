const express=require('express')
const AdminRoute = require('./src/Route/AdminRoute')
const CategoryRoute = require('./src/Route/CategoryRoute')
const SubCategoryRoute = require('./src/Route/SubCategoryRoute')
const ProductRoute = require('./src/Route/ProductRoute')
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())



app.use('/admin',AdminRoute)
app.use('/category',CategoryRoute)
app.use('/subcategory',SubCategoryRoute)
app.use('/product',ProductRoute)

app.use("/images",express.static(__dirname+"/public/image"))
app.use("/uploadImages",express.static(__dirname+"/public/upload"))



module.exports=app