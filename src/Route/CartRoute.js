const express=require("express")
const { CartJoinController, AddCartController } = require("../Controller/CartController")
const CartRoute=express.Router()

CartRoute.post('/addcart',AddCartController)
CartRoute.post('/cart',CartJoinController)



module.exports=CartRoute