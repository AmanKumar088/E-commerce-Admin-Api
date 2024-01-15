const express=require('express')
const AdminRoute = require('./src/Route/AdminRoute')
const app=express()
app.use(express.json())

app.use('/admin',AdminRoute)


module.exports=app