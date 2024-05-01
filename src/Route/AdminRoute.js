const express=require('express')
const { AdminSignup, AdminLogin } = require('../Controller/AdminController')
const AdminRoute=express.Router()


AdminRoute.get('/ejs',(request,response)=>{
    response.render('ViewTemplate')
})


AdminRoute.post('/signup',AdminSignup)
AdminRoute.post('/login',AdminLogin)


module.exports=AdminRoute