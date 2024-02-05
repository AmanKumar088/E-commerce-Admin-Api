const { default: mongoose } = require("mongoose");
const collection = require("../Config/collection");
const { ObjectId } = require("mongodb");

const CartSchema=new mongoose.Schema({
    user_id:ObjectId,
    product_id:ObjectId,
    product_quantity:Number,
},{
    timestamps:true
})

const CartModel=mongoose.model(collection.add_to_cart,CartSchema)


module.exports=CartModel



