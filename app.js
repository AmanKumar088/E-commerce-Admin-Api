const express=require('express')
const AdminRoute = require('./src/Route/AdminRoute')
const CategoryRoute = require('./src/Route/CategoryRoute')
const SubCategoryRoute = require('./src/Route/SubCategoryRoute')
const ProductRoute = require('./src/Route/ProductRoute')
const CartRoute = require('./src/Route/CartRoute')
const cors=require('cors')
const path=require('path')
const app=express()


app.use(express.json())
app.use(cors())

// ejs [embedded javascript templating]

app.set('views', path.join(__dirname,'src/Views'))
app.set('view engine','ejs')



app.use('/admin',AdminRoute)
app.use('/category',CategoryRoute)
app.use('/subcategory',SubCategoryRoute)
app.use('/product',ProductRoute)
app.use('/cart',CartRoute)

app.use("/images",express.static(__dirname+"/public/image"))
app.use("/uploadImages",express.static(__dirname+"/public/upload"))



module.exports=app