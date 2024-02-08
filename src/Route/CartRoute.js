const express=require("express")
const { CartJoinController, AddCartController, DeleteCart } = require("../Controller/CartController")
const { AdminMiddleWare } = require("../MiddleWare/AdminMiddleWare")
const CartRoute=express.Router()


CartRoute.use(AdminMiddleWare)

CartRoute.post('/addcart',AddCartController)
CartRoute.get('/joincart',CartJoinController)
CartRoute.delete('/delete',DeleteCart)


module.exports=CartRoute