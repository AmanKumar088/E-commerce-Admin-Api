const express=require('express')
const AdminRoute = require('./src/Route/AdminRoute')
const CategoryRoute = require('./src/Route/CategoryRoute')
const app=express()
app.use(express.json())



app.use('/admin',AdminRoute)
app.use('/category',CategoryRoute)






module.exports=app